<?php

namespace App\Services;
use App\Models\User;
use App\Models\Payment;
use App\Models\UserSubsription;
use Illuminate\Support\Facades\Hash;

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
                    return $userCreated;
                }
            }catch(\Exception $error){
                return $error->getMessage();
            }
            
        }

        public static function createProfile($request,$stripePayment)
        {
            $request['user_id']        = auth()->user()->id;    
            $request['transaction_id'] = $stripePayment['id'];
            $request['amount']         = $stripePayment['amount'];
            $request['status']         = "Paid";
            
            try{
                $createPayment = Payment::create($request->all());
                if($createPayment){
                    $userSubscription =  UserSubsription::create([
                      'user_id'           => auth()->user()->id,
                      'subsription_id'    => $request->subscription_id 
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
               // dd(auth()->user()->id);
                $updateProfile = User::where('id',auth()->user()->id)->update($request->all());
                if($updateProfile){
                    return $updateProfile;
                }   
            }catch(\Exception $error){
                return $error->getMessage();
            }
        }
  
}

?>