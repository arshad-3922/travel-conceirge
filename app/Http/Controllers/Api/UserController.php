<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\UserSubscriptionResource;
use App\Models\Packages;
use App\Models\Payment;
use App\Models\UserSubsription;

class UserController extends BaseController
{
                
    public function paymentsLogs(Request $request)
    {
        //dd($request->all());
        if(request()->filled('from') && request()->filled('to')) {
          $payments = Payment::whereHas('user_subscription',function($query){
            $query->where("user_id",auth()->user()->id);      
          })->where(function ($q) {
                $q->whereDate('created_at','>=', request('from'))
                ->whereDate('created_at', '<=', request('to'));
            })->paginate($request->entries);
        }else{
          $payments = Payment::whereHas('user_subscription',function($query){
            $query->where("user_id",auth()->user()->id);      
          })->paginate($request->entries);
         }
          $payments = PaymentResource::collection($payments);
        return $this->sendResponse($payments, __('responseMessages.fetchPayments')); 

    }

      public function subscriptions()
      {
            $subscriptions = Packages::whereHas('user_subscription')->with(['user_subscription'=>function($query){
                  $query->where('user_id',auth()->user()->id);
            }])->get();
            $subscriptions = UserSubscriptionResource::collection($subscriptions);
            return $this->sendResponse($subscriptions, __('responseMessages.fetchSubscription')); 

      }

      public function cancelSubscription($id)
      {
            $cancelSubscription = UserSubsription::where("id",$id)
            ->where("user_id",auth()->user()->id)->delete();
            return $this->sendResponse($cancelSubscription, __('responseMessages.cancelSubscription')); 
      }


}
