<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Http\Requests\PaymentRequest;
use App\Http\Resources\CountryResource;
use App\Http\Resources\SubscriptionResource;
use App\Http\Resources\UserLoginResource;
use App\Http\Resources\UserResource;
use App\Models\Country;
use App\Models\Feedback;
use App\Models\Packages;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\Request;
//
use Mail;
use Hash;
use App\Mail\ForgotCode;
use App\Mail\ContactUs;
use App\Models\TravelerInvite;
//Libraries

use App\Services\DashboardService;
use App\Services\UserService;
use App\Traits\StripePayment;
use Facade\Ignition\Support\Packagist\Package;

class AuthController extends BaseController
{
    //
    use StripePayment;
    public $userServiceProvider;

    public function __construct(UserService $userService)
    {
        $this->userServiceProvider = $userService;
    }
    
    /**
     * AuthController Login.
     *
     * @param LoginRequest $request
     */

    public function login(Request $request)
    {
        //dd($request->all());
        if($request->device_id && $request->device_type)
        {
            User::where('email', $request->email)->update([
            'device_id'=>$request->device_id,
            'device_type'=>$request->device_type
            ]);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (!$user->hasRole($request->role)) {
                // you can pass an id or slug
                return $this->sendError(__('responseMessages.userWithRoleNotFound', ['role' => $request->role]), false);
            }

            if (Hash::check($request->password, $user->password)) {
                // Indicating user has logged In from temp pass after login
                $token = $user->createToken(env('APP_NAME'))->accessToken;  
                $user['token'] = $token;
                $user['role']  = $user->getRoles()[0]->slug;
                if (!is_null($user) && $user) {
                $user  = new UserResource($user);
                return $this->sendResponse($user, __('responseMessages.loggedIn'));
            }
        
        }

            return $this->sendError(__('responseMessages.incorrectPassword'), false);
        }

        return $this->sendError(__('responseMessages.userNotFound'), false);
    }

    public function logout(Request $request)
    {
        if (true) {
            $user = $request->user();

            $user->token()->revoke();

            return $this->sendResponse(true, __('responseMessages.loggedOut'));
        }

        return $this->sendError(__('responseMessages.errorLogout'), false);
    }

    /**
     * AuthController sendForgotCode.
     *
     * @param Request $request
     */
    public function sendForgotCode(Request $request)
    {
        //dd($request->email);
        if (User::where('email', $request->email)->count() > 0) {
            $request['code'] = $this->generatePIN(4);
            $user = User::where('email', $request->email)->update([
                'forgot_code' => $request['code']
            ]);
            Mail::to($request['email'])->send(new ForgotCode($request));
            return $this->sendResponse(true, __('responseMessages.sendForgotCode'));
        }
        else{
            
            return response()->json(['message'=>'Email Not Found!...',401]);
        }

    }

    /**
     * AuthController verifiedForgotCode.
     *
     * @param Request $request
     */
    public function verifiedForgotCode(Request $request)
    {
        //dd($request->all());
        $user = User::where('forgot_code', $request->code)->first();
        if (!empty($user)) {
            return $this->sendResponse($user->id, __('responseMessages.verifiedForgotCode'));
        }
        return response()->json(['message'=>'Verification Code Not Matched!...',401]);
    }

    public function forgotPasswordChange(ResetPasswordRequest $request)
    {
       // dd($request->all());
        $password  = Hash::make($request->password);
        $user = User::where('email', $request->email)->update([
            'password' => $password,
            'forgot_code' => ''
        ]);

        return $this->sendResponse(true, __('responseMessages.passwordChanged'));
    }

    /**
     * AuthController changePassword.
     *
     * @param ChangePasswordRquest $request
     */

    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password'=>'required',
            'new_password'=>'required',
            'password_confirmation'=>'required|same:new_password'
        ]);
        $user  = User::where('id',$request->user()->id)->first();
        if(Hash::check($request->current_password,$user->password)) {
            $user_updated = User::where('id',$request->user()->id)->update(['password' => Hash::make($request->new_password)]);
            if ($user_updated) {
                return $this->sendResponse($user_updated,__('responseMessages.passwordUpdated'));
            }
            return $this->sendError(__('responseMessages.errorUpdatingPassword'), false);
        } else {
            return $this->sendError(__('responseMessages.oldPasswordMismatch'), false);
        }
    }

        public function updatePassword(Request $request){

            //dd($request->all());
            $request->validate([
                'password_confirmation'=>'required_with:new_password:same:new_password'
            ]);
            
            if (Hash::check($request->old_password,$request->user()->password)) {
                $user_updated = $request->user()->update(['password' => Hash::make($request->new_password)]);
                if ($user_updated) {
                    return $this->sendResponse($user_updated,__('responseMessages.passwordUpdated'));
                }
                return $this->sendError(__('responseMessages.errorUpdatingPassword'), false);
            } else {
                return $this->sendError(__('responseMessages.oldPasswordMismatch'), false);
            }
        }

        public function changeUserPassword(Request $request){
            //dd($request->all());
            if (Hash::check($request->old_password,$request->user()->password)) {
                $user_updated = $request->user()->update(['password' => Hash::make($request->new_password)]);
                if ($user_updated) {
                    return $this->sendResponse($user_updated,__('responseMessages.passwordUpdated'));
                }
                return $this->sendError(__('responseMessages.errorUpdatingPassword'), false);
            } else {
                return $this->sendError(__('responseMessages.oldPasswordMismatch'), false);
            }
        }

    /**
     * AuthController getProfile.
     *
     * @param Request $request
     */
    
    public function getProfile(Request $request)
    {   
        //dd(auth()->user()->id);
        if(auth()->user()->id) {
            $user =  User::with('country:id,name')->whereId(auth()->user()->id)->first();
            $user['token'] = null;
            $user =  new UserResource($user);
            return $this->sendResponse($user, __('responseMessages.profileFetch'));
        }
        else{
            return $this->sendError(('responseMessages.something wrong'),401);    
        }
        return $this->sendResponse(auth()->user(), __('responseMessages.passwordUpdated'));
    }


    public function getInvites()
    {
        $invites  = TravelerInvite::where('recipient_id',auth()->user()->id)->get();
        return $this->sendResponse($invites, __('responseMessages.fetchInvites'));
    }

    public function adminProfile(Request $request)
    {

        if($request->image != null){ 
            $image = $this->profileUpload($request->image);
            $profileUpdated = User::where('id', auth()->user()->id)->update([
                'image'    => $image
            ]);
         } 
        
         $profileUpdated = User::where('id', auth()->user()->id)->update([
            'name'       => $request->first_name, 
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
        ]);;

        return $this->sendResponse($profileUpdated, __('responseMessages.profileUpdated'));
        }
        
    public function updateProfile(Request $request)
    {   

        if(isset($request->image) ||  $request->image != null)
        {
            $profile = $this->fileUpload($request->image,'user');
            $profileUpdated = User::where('id', auth()->user()->id)->update([
                'image'    => $profile
            ]);
        }
            $profileUpdated = $this->userServiceProvider::updateProfile($request);
            return $this->sendResponse($profileUpdated, __('responseMessages.profileUpdated'));
    
      }

      public function getCountries()
      {
        $countries  = CountryResource::collection(Country::all());
        if ($countries) {
            return $this->sendResponse($countries, __('responseMessages.fetchCountries'));
        }
      }

      public function getSubsriptions()
      {
        $subscriptions  = SubscriptionResource::collection(Packages::all());
        if ($subscriptions) {
            return $this->sendResponse($subscriptions, __('responseMessages.fetchSubscriptions'));
        }
      }

    public function register(RegisterRequest $request)
    {
         $userCreated = $this->userServiceProvider::registerUser($request);
         return $this->sendResponse($userCreated, __('responseMessages.userRegister'));
    }

    public function completeProfile(PaymentRequest $request)
    {
        //dd($request->all());
        $amount  = Packages::where('id',$request->subscription_id)->pluck('amount')->first();
        $stripePayment = $this->stripe($request->card_number,$request->expiry,$request->cvv,$amount);
        if($stripePayment)
        {
            $userCreated = $this->userServiceProvider::createProfile($request,$stripePayment);
            return $this->sendResponse($userCreated, __('responseMessages.completeProfile'));
        }
    }

    public function getUsers(Request $request)
    {   
            $user  = User::whereHas('user_role',function($query){
                $query->where('role_id','!=',1);
            })->paginate($request->entries); 
            return $this->sendResponse($user,__('responseMessages.fetchUserSuccessfully'));
    }

        public function getNewUsers(){
            $user =  User::take(5)->latest()->paginate(3);
            return $this->sendResponse($user, __('responseMessages.fetchUserSuccessfully'));
        }

        public function dashboardData(){

            $graphdata    =  DashboardService::getGraphData();
            $users        =  DashboardService::getUsers();
            $recent_users =  DashboardService::getRecentUsers();
            return $this->sendResponse(['users'=>$users,'recent_users'=>$recent_users,'graphdata'=>$graphdata], __('responseMessages.fetchUserSuccessfully'));

        }

     public function userStatus($id)
    {
        //dd($id);
        $userStatus = User::where('id',$id)->first();
        $status  = $userStatus->block_status;
        $data = User::whereId($id)->update([
            'block_status' => $status == 1 ? 0 : 1
        ]);
        $data = array();
        $data['status'] = ($userStatus->block_status == 1) ? 0 : 1;
        $data['id']     = $id;
        return $this->sendResponse($data, __('responseMessages.updateStatus'));

    }

    public function updateStatus(Request $request , $id)
    {
        $user  = User::where('id',$id)->update(['block_status'=>$request->status]);
        return $this->sendResponse($user, __('responseMessages.updateStatus'));

    }


    public function updateUser(Request $request){

        //dd($request->all());
        if($request->profile != null){  
         $image = $this->profileUpload($request->profile);
         $user = User::where('id',$request->id)->update(['image'=>$image]);
        }    

     //   $user  = UserService::updateSalePerson($request);
        return $this->sendResponse($user,__('responseMessages.userUpdated'));  
  }

    public function userApproved(Request $request){
        $id     = $request->params['id'];
        $status = $request->params['status'];
        $data = User::whereId($id)->update([
            'is_approved' => $status
        ]);
        return $this->sendResponse($data, __('responseMessages.userVerifySuccessfully'));
    }

    public function userReject($id){

        $userVerification = User::where('id',$id)->first();
        $status  = $userVerification->is_approved;
        $data = User::whereId($id)->update([
            'is_approved' => 2
        ]);
        return $this->sendResponse($data, __('responseMessages.userRejectSuccessfully'));
    }

    public function setting()
    {
        return Setting::first();
    }

    public function createSetting(Request $request)
    {
        $settingsdata = Setting::first();

        if($settingsdata){
            if($request->from == 'tax'){
                $setting = Setting::whereId(1)->update(['tax' => $request->tax]);
            }else{
                $setting = Setting::whereId(1)->update(['shipping_charges' => $request->shipping_charges]);
            }
        }else{
            if($request->from == 'tax'){
             $setting = Setting::create([
                'tax' => $request->tax
            ]);
         }else{
            $setting = Setting::create([
                'shipping_charges' => $request->shipping_charges
            ]);
        }
    }


    return $this->sendResponse(true, __('responseMessages.settingUpdateSuccessfully'));

}

    public function contactUs(Request $request)
    {
        //dd($request->all());
        $contactus = Mail::to('richardsteve979@gmail.com')->send(new ContactUs($request->all()));
        \Log::channel('mysql')->info('User registered by email without verify');
        $data = array(
            'first_name' =>$request->name,
            'last_name'  =>$request->name,
            'email'      =>$request->email,
            'subject'    =>$request->subject,
            'message'   =>$request->message,
        );
        $feedback  = Feedback::create($data);
        if($feedback){
        return response()->json([
            'status' => 'success',
            'message' => 'Contact Form submit successfully',
        ]);

      }
        
    }
        public function getUserById($id){
            $data = User::where('id',$id)->first();
            return $this->sendResponse($data,__('responseMessages.ViewUserSuccessfully'));
        }

        public function getUserByEdit($id){
            $data = User::where('id',$id)->first();
            return $this->sendResponse($data,__('responseMessages.UserSuccessfully Get'));
        }

       public function getVerificationRequest(Request $request){
       
        if (request()->filled('from') && request()->filled('to')) {
            $user = User::where(function ($q) {
                   $q->where('created_at', '>=', request('from'))
                    ->where('created_at', '<=', request('to'));
            });
            return $this->sendResponse($user, __('responseMessages.fetchProfesstionalSuccessfully'));

        }
        if (request()->filled('search')) {
            $user = User::where('name', 'like', "%" . request('search') . "%");

        }

        if(request()->filled('status')){
            $user = User::where('status',1);
        }
        if (request()->filled('page')) {
            $user = User::latest('id')->paginate(request('entries', 10));
        } else {
            $user = User::get();
        }
        
        $user =  User::whereRaw('id IN (SELECT user_id FROM role_user WHERE role_id = (SELECT id FROM roles where  slug = ? LIMIT 1))',['slug'=>'professional'])
        ->paginate($request->entries);
        return $this->sendResponse($user, __('responseMessages.fetchVerificationSuccessfully'));
       } 

}
