<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
   //models
use App\Models\Subscription;
use App\Models\CardDetail;
use App\Models\UserSubscription;
use App\Models\Transaction;

//Libraries
use App\Http\Controllers\Api\BaseController;

class SubscriptionController extends BaseController
{
     public function index(Request $request)
       {
           if (request()->filled('from') && request()->filled('to')) {
               $subscription_log = Subscription::with('user','package')->where(function ($q){
                   $q->where('created_at', '>=', request('from'))
                     ->where('created_at', '<=', request('to'));   
               });
               return $this->sendResponse($subscription_log->paginate($request->entries), __('responseMessages.fetchSubscriptionLogsSuccessfully'));
  
           }
           if (request()->filled('search')) {
               $subscription_log = Subscription::with('user','package')->where('status', 'like', "%" . request('search') . "%");
               return $this->sendResponse($subscription_log->paginate($request->entries), __('responseMessages.fetchSubscriptionLogsSuccessfully'));
            }
           if (request()->filled('page')) {
               $subscription_log = Subscription::with('user','package')->latest('id')->paginate($request->entries);
               return $this->sendResponse($subscription_log, __('responseMessages.fetchSubscriptionLogsSuccessfully'));

           } else {
               $subscription_log = Subscription::with('user','package')->paginate($request->entries);
           }
   
           return $this->sendResponse($subscription_log, __('responseMessages.fetchSubscriptionLogsSuccessfully'));
       }
}
