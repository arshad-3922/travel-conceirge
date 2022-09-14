<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\TourBookingResource;
use App\Http\Resources\TourDetailsResource;
use App\Http\Resources\TourResource;
use App\Models\FavoriteTour;
use App\Models\Tour;
use App\Models\TourAvailability;
use App\Models\TourBooking;
use App\Models\TourFeature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class TourController extends BaseController
{

        protected   $tourApi;
        protected   $tourSingnature;

        public function __construct()
        {
            $this->tourApi        = config('app.tour_api_key');
            $this->tourSingnature = config('app.tour_singnature');

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

        
        public function index(Request $request)
        {
            if($request->search && $request->country){
                $toures =  Tour::where('name', 'like', "%" .$request->search. "%")
                ->where('country',$request->country)
                ->with('tour_details','tour_images','tour_like')->paginate($request->entries);
            }else{
                $toures =  Tour::with('tour_details','tour_images','tour_like')->paginate($request->entries);
            }
                $toures =  TourResource::collection($toures);
            return $this->sendResponse($toures, __('responseMessages.toursFetch'));
        }

        public function tourDetail($id)
        {   
            $tour   =  Tour::with('tour_details','tour_images','tour_included','tour_excluded','tour_like')
            ->where('code',$id)->first();     
            $tour   =  new TourDetailsResource($tour);
            return $this->sendResponse($tour, __('responseMessages.toursFetch'));
        }

        


        public function makeFovirate(Request $request)
        {
             $request['user_id'] = auth()->user()->id;
             $request['is_like'] = true;
             $favoriteHotel  = FavoriteTour::create($request->all());
             return $this->sendResponse($favoriteHotel, __('responseMessages.favoriteTour'));
        }


        public function tourAvailability(Request $request)
        {

            $requestBody = $request->all();

            $endPoint = "https://api.test.hotelbeds.com/activity-api/3.0/activities/details/full";

            $headers = array(
                'Api-key'           => $this->tourApi,
                'X-Signature'       => $this->tourSingnature,
                'Accept-Encoding'   => 'gzip',
            );

            try{
                $response = Http::withBody(
                json_encode($requestBody),'application/json',
                )->withHeaders($headers)->post($endPoint);
                $responseBody = json_decode($response->getBody(), true);
                // return $responseBody;
                if(isset($responseBody['activity']) && $responseBody != null){
                    $data = $responseBody['activity'];
                    $modalities = $responseBody['activity']['modalities'][0];
                    $modalitie_rates = $responseBody['activity']['modalities'][0]['rates'][0];

                    $checkAvailability = TourAvailability::firstOrCreate([
                        'code'                 =>$data['code'],
                        'activity_code'        =>$data['activityCode'],
                        'operation_days'       =>$data['operationDays'],
                        'supplier_information' =>isset($modalities['supplierInformation'])  ? $modalities['supplierInformation'] : null,
                        'provider_information' =>isset($modalities['providerInformation'])  ? $modalities['providerInformation'] : null,
                        'rate_code'            =>isset($modalitie_rates['rateCode']) ? $modalitie_rates['rateCode'] : null,
                        'rate_key'             =>isset($modalitie_rates['rateDetails'][0]['rateKey'])        ? $modalitie_rates['rateDetails'][0]['rateKey'] : null,
                        'operation_dates'      =>isset($modalitie_rates['rateDetails'][0]['operationDates']) ? $modalitie_rates['rateDetails'][0]['operationDates'] : null,
                        'total_amount'         =>isset($modalitie_rates['rateDetails'][0]['totalAmount'])    ? $modalitie_rates['rateDetails'][0]['totalAmount'] : null,
                        'pax_amounts'          =>isset($modalitie_rates['rateDetails'][0]['paxAmounts'])     ? $modalitie_rates['rateDetails'][0]['paxAmounts'] : null,
                       ]);
                        
                        $from_to = [];
                        $dates =  $checkAvailability->operation_dates;
                        foreach($dates as $value){
                            $from_to[] =  $value->from .' to '. $value->to;
                        }
                        $result['supplier_information'] = $checkAvailability->supplier_information->name;
                        $result['provider_information'] = $checkAvailability->provider_information->name;
                        $result['rate_key'] = $checkAvailability->rate_key;
                        $result['from_to'] = $from_to;
                        $result['total_amount'] = $checkAvailability->total_amount->amount;

                       return $this->sendResponse($result, __('responseMessages.toursFetch'));
                    }else{
                        return $this->sendError(__('responseMessages.tourNotFound'), false);
                    }
        
            }catch(\Exception $error){
                return $error->getMessage();
            } 

        }

        public function confirmBooking(Request $request)
        {
            
            $requestBody =  $request->all();
            $endPoint = "https://api.test.hotelbeds.com/activity-api/3.0/bookings";

            $headers = array(
                'Api-key'           => $this->tourApi,
                'X-Signature'       => $this->tourSingnature,
                'Accept-Encoding'   => 'gzip',
            );

            try{
                $response = Http::withBody(
                  json_encode($requestBody),'application/json',
                 )->withHeaders($headers)->put($endPoint);
                 $responseBody = json_decode($response->getBody(), true);
                 //return $responseBody;
                 if(isset($responseBody['booking']) && $responseBody != null){
                    $bookingReference = $this->storeTourBookingDetails($responseBody['booking']);
                    $bookingConfirm   = TourBooking::where("reference",$bookingReference)->first();
                    $bookingConfirm   = new TourBookingResource($bookingConfirm);
                    return $this->sendResponse($bookingConfirm, __('responseMessages.fetchBookings')); 
                  }else{
                    return $this->sendError(__('responseMessages.tourNotFound'), false);
                }
           
               }catch(\Exception $error){
                  return $error->getMessage();
               }  
            
        }

        public function addTourDetails(Request $request)
        {   

            if(isset($request['booking']) && $request != null){
                $bookingReference = $this->storeTourBookingDetails($request['booking']);
                $bookingConfirm   = TourBooking::where("reference",$bookingReference)->first();
                $bookingConfirm   = new TourBookingResource($bookingConfirm);
                return $this->sendResponse($bookingConfirm, __('responseMessages.fetchBookings')); 
              }else{
                return $this->sendError(__('responseMessages.tourNotFound'), false);
            }
            // $headers = array(
            //     'Api-key'           => $this->tourApi,
            //     'X-Signature'       => $this->tourSingnature,
            //     'Accept-Encoding'   => 'gzip',
            //   );
            // foreach($request['activities'] as $data){
            //     //return $data['code'];
            //  $tuorDetailsEditPoint = "https://api.test.hotelbeds.com/activity-content-api/3.0/activities/en/".$data['code'];
            //  $response = Http::withHeaders($headers)->get($tuorDetailsEditPoint);
            //  $responseBody = json_decode($response->getBody(), true);
            //  //return $responseBody;
            //  foreach($responseBody['activitiesContent'] as $tour)
            //     {
            //         if(is_array($tour['featureGroups'])){
            //             foreach($tour['featureGroups'] as $feature){
            //                 TourFeature::create([
            //                     'tourId'    =>$tour['activityCode'],
            //                     'groupCode' =>isset($feature['groupCode']) ? $feature['groupCode'] : null,
            //                     'excluded'  =>isset($feature['excluded']) ? $feature['excluded'] : null,
            //                     'included'  =>isset($feature['included']) ? $feature['included'] : null, 
            //                 ]);
            //             }
            //         }
            //         // if(is_array($tour['media']['images'])){
            //         //     $images = $tour['media']['images'];
            //         //     foreach($images as $file){
            //         //         if(is_array($file['urls'])){
            //         //             foreach($file['urls'] as $image){
            //         //                 TourImages::create([
            //         //                     'tourId'=>$tour['activityCode'],
            //         //                     'image' =>$image['resource']
            //         //                 ]);
            //         //             }
            //         //         }
            //         //     }
            //         // }

            //         // TourDetail::create([
            //         //     'tourId'            =>$tour['activityCode'],
            //         //     'guidingOptions'    =>isset($tour['guidingOptions']) ? $tour['guidingOptions'] : null,
            //         //     'location'          =>isset($tour['location']['startingPoints'][0]['meetingPoint']['geolocation']) ? $tour['location']['startingPoints'][0]['meetingPoint']['geolocation'] : null,
            //         //     'address'           =>isset($tour['location']['startingPoints'][0]['meetingPoint']['address']) ? $tour['location']['startingPoints'][0]['meetingPoint']['address'] : null,
            //         //     'country'           =>isset($tour['location']['startingPoints'][0]['meetingPoint']['country']) ? $tour['location']['startingPoints'][0]['meetingPoint']['country'] : null,
            //         //     'city'              =>isset($tour['location']['startingPoints'][0]['meetingPoint']['city']) ? $tour['location']['startingPoints'][0]['meetingPoint']['city'] : null,
            //         //     'pickupInstructions'=>isset($tour['location']['startingPoints'][0]['pickupInstructions']) ? $tour['location']['startingPoints'][0]['pickupInstructions'] : null,
            //         //     'scheduling'        =>isset($tour['scheduling']) ? $tour['scheduling'] : null,
            //         //     'segmentationGroups'=>isset($tour['segmentationGroups']) ? $tour['segmentationGroups'] : null,
            //         //     'description'       =>isset($tour['description']) ? $tour['description'] : null,
            //         //     'countries'         =>isset($tour['countries']) ? $tour['countries'] : null
            //         // ]);
                    
            //     }
            
            // }
             
        }
}
