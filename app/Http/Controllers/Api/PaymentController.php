<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Models\PaymentLog;
use App\Http\Controllers\Api\BaseController;
use App\Models\Payment;

class PaymentController extends BaseController
{

       public function index(Request $request)
       {
          
           $payment_log = new Payment();
           if (request()->filled('from') && request()->filled('to')) {
               $payment_log = $payment_log->with('user')->where(function ($q) {
                      $q->where('created_at', '>=', request('from'))
                        ->where('created_at', '<=', request('to'));
               });
           }
           if (request()->filled('search')) {
               $payment_log = $payment_log->with('user')->where('charges', 'like', "%" . request('search') . "%");
           }

           if (request()->filled('page')) {
               $payment_log = $payment_log->with('user')->latest('id')->paginate(request('entries', 10));
           } else {
               $payment_log = $payment_log->with('user')->paginate($request->entries);
           }
   
           return $this->sendResponse($payment_log, __('responseMessages.fetchPaymentLogsSuccessfully'));
       }
}
