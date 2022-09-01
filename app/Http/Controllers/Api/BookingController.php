<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Http\Controllers\Api\BaseController;

class BookingController extends BaseController
{
    public function index(Request $request)
    {
        if(request()->filled('from') && request()->filled('to')) {
            $bookings = Booking::with('user','service')->where(function ($q) {
                $q->where('created_at', '>=', request('from'))
                    ->where('created_at', '<=', request('to'));
            })->paginate($request->entries);
            return $this->sendResponse($bookings, __('responseMessages.fetchbookingsuccessfully'));
        }
        if (request()->filled('search')){
            $search    = $request->search;
            $bookings = Booking::with('user','service')->where(function($query)use($search){
                $query->where('name','like', "%" .$search. "%");
            })->paginate($request->entries);
           return $this->sendResponse($bookings, __('responseMessages.fetchbookingsuccessfully'));
        }
        if (request()->filled('page')) {
            $bookings = Booking::with('user','service')->latest('id')->paginate($request->entries);
        } else {
            $bookings = Booking::with('user','service')->paginate($request->entries);
        }
        return $this->sendResponse($bookings, __('responseMessages.fetchbookingsuccessfully'));
       }

        public function getBookingById($id){
            $booking = Booking::with('user','service')->where('id',$id)->first();
            return $this->sendResponse($booking, __('responseMessages.fetchbookingsuccessfully'));
        }
   
}
