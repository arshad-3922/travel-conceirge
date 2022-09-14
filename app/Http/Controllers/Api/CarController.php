<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\BookingResource;
use App\Http\Resources\CarResource;
use App\Models\Booking;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class CarController extends BaseController
{   

    protected   $vehicleApi;
    protected   $vehicleSingnature;

    public function __construct()
    {
        $this->vehicleApi        = config('app.vehicle_api_key');
        $this->vehicleSingnature = config('app.vehicle_singnature');

        $this->middleware(function ($request, $next){
          $this->user = Auth::user();
          if($this->user->is_subscribe == 0){
            return $this->sendError(__('responseMessages.notStepCompleted'), false);
          }
          else{
            return $next($request);
          }
      });


    }
       
    public function index(Request $request){

        ///return $request->pickup_date;
        $language = "en";
        $time     = $request->pickup_date;
        $adults   = $request->adults;
        $children = $request->children;  
        $infants  = $request->infants;
        
   
        for($i =1; $i<=25; $i++){
            if($request->type === $i){
              $pickup_location = $request->pickup_location;  
              $drop_location   = $request->drop_of_location;  
              $data  =  $this->getHotelCode($pickup_location,$drop_location,$request->type);
            }
        }

        $endPoint = "https://api.test.hotelbeds.com/transfer-api/1.0/availability/$language/from/".$data['fromType']."/".$data['fromCode']."/to/".$data['toType']."/".$data['toCode']."/$time/$adults/$children/$infants";
     
         $headers = array(
            'Api-key'           => $this->vehicleApi,
            'X-Signature'       => $this->vehicleSingnature,
            'Accept-Encoding'   => 'gzip',
          );

          try{
            $response = Http::withHeaders($headers)->get($endPoint);
            $responseBody = json_decode($response->getBody(), true);
            //return $responseBody;
            if(isset($responseBody['services']) && $responseBody != null){
              $search_vehicles =  $this->storeCarDetails($responseBody);
              $vehicles  = Vehicle::where('transferType','!=','SHARED')->get();
              $vehicles  = CarResource::collection($vehicles);
              return $this->sendResponse($vehicles, __('responseMessages.fetchCars')); 
            }else{
              return $this->sendError(__('responseMessages.carNotFound'), false);
            }
       
           }catch(\Exception $error){
              return $error->getMessage();
           }  
           
    }


    public function getCarsByFilter(Request $request)
    {     
          $vehiclesArr = []; 
          $vehicles  = Vehicle::where('transferType','!=','SHARED')->get();
          foreach($vehicles as $value){
                $charges = json_decode($value->price);
                $charges =  intval($charges->totalAmount);
                //dd($charges);
                if($charges == $request->min_rate || $charges == $request->max_rate){
                      $vehiclesArr[] = $value;
                } 
          }
          $vehicles  = CarResource::collection($vehiclesArr);
          return $this->sendResponse($vehicles, __('responseMessages.fetchCars')); 

    }

    public function confirmBooking(Request $request)
    {
        //dd($request->all());
        
        $requestBody = $request->all();

        $endPoint = "https://api.test.hotelbeds.com/transfer-api/1.0/bookings";
     
         $headers = array(
            'Api-key'           => $this->vehicleApi,
            'X-Signature'       => $this->vehicleSingnature,
            'Accept-Encoding'   => 'gzip',
          );

          try{
            $response = Http::withBody(
              json_encode($requestBody),'application/json',
             )->withHeaders($headers)->post($endPoint);
             $responseBody = json_decode($response->getBody(), true);
            // return $responseBody;
             if(isset($responseBody['bookings']) && $responseBody != null){
                $bookingReference = $this->storeBookingDetails($responseBody);
               // dd($bookingReference);
                $bookingConfirm   = Booking::where("reference",$bookingReference)->first();
                $bookingConfirm   = new BookingResource($bookingConfirm);
                return $this->sendResponse($bookingConfirm, __('responseMessages.fetchBookings')); 
              }else{
                return $this->sendError(__('responseMessages.carNotFound'), false);
              }
       
           }catch(\Exception $error){
              return $error->getMessage();
           }  
    }

    public function fetchData(Request $request){

      //return $request->all();
     // $bookingReference = $this->storeBookingDetails($request->all());
      $bookingConfirm   = Booking::where("reference",$request->reference_no)->first();
      $bookingConfirm   = new BookingResource($bookingConfirm);
      return $this->sendResponse($bookingConfirm, __('responseMessages.fetchCars')); 

    } 

}
