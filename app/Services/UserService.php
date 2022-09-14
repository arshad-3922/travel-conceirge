<?php

namespace App\Services;
use App\Models\User;
use App\Models\Payment;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\Hash;
use App\Core\Chat\Soachat;
class UserService {
   
        public static function registerUser($request)
        {
            //dd($stripePayment);
            try{
                $request['password'] = Hash::make($request->password);
                $userCreated = User::create($request->all());
                $role = config('roles.models.role')::where('slug', $request->role)->first();
                $userCreated->attachRole($role);
                if($userCreated){
                    $soachat = new Soachat();        
                    $soachat->addUser($userCreated->uuid,$userCreated->name,$userCreated->image);
                    return $userCreated;
                }
            }catch(\Exception $error){
                return $error->getMessage();
            }
            
        }

        public static function createProfile($request,$stripePayment)
        {
 
            $request['transaction_id'] = $stripePayment['id'];
            $request['amount']         = $stripePayment['amount'];
            $request['status']         = "Paid";

            try{
                $updateUserSteps = User::where('id',auth()->user()->id)->update(['is_subscribe'=>true]);
                $createPayment = Payment::create($request->all());
                if($createPayment){
                    $userSubscription =  UserSubscription::create([
                        'user_id'           => auth()->user()->id,
                        'subscription_id'   => $request->subscription_id,
                        'payment_id'        => $createPayment->id  
                    ]);
                    return $userSubscription;
                }   
            }catch(\Exception $error){
                return $error->getMessage();
            }
            
        }

        public static function updateProfile($request)
        {
            try{
                $updateProfile = User::where('id',auth()->user()->id)->update([
                    'name'           =>$request->name,
                    'email'          =>$request->email,
                    'phone_number'   =>$request->phone_number,
                    'country_id'     =>$request->country_id,
                    'city'           =>$request->city,
                    'state'          =>$request->state,
                    'zip_code'       =>$request->zip_code
                ]);
                return $updateProfile;  
            }catch(\Exception $error){
                return $error->getMessage();
            }
        }
  
}

?>