<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;

//requests
use App\Http\Requests\AvailablityRequest;
use App\Http\Requests\BookingRequest;

//resources
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CustomerReviewResource;
use App\Http\Resources\GuestResource;
use App\Http\Resources\HotelDetailResource;
use App\Http\Resources\HotelResource;
use App\Http\Resources\TourResource;

//models
use App\Models\CustomerReview;
use App\Models\FavoriteHotel;
use App\Models\Guest;
use App\Models\Hotel;
use App\Models\HotelCategory;
use App\Models\HotelDetail;
use App\Models\RoomBookingRate;
use App\Models\Tour;
use App\Models\UserGuest;
use App\Models\Category;

//libaray
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;


class HotelController extends BaseController
{

   protected   $hotelApi;
   protected   $hotelSingnature;


   public function __construct()
   {
       $this->hotelApi        = config('app.hotel_api_key');
       $this->hotelSingnature = config('app.hotel_singnature');
       $this->middleware(function ($request, $next) {
        $this->user = Auth::user();
        if($this->user->is_subscribe == 0){
          return $this->sendError(__('responseMessages.notStepCompleted'), false);
        }
        else{
          return $next($request);
        }
    });
   }

   public function getPlaces(Request $request)
   {
      //dd($request->all());
        if($request->place_id && $request->place_id == 1 || 4){
          // $places  = Hotel::where('ranking','<=',10)->paginate($request->entries);
          $places  = Tour::with('tour_details','tour_images','tour_like')->paginate($request->entries);
        }
        if($request->place_id && $request->place_id == 3){
          // $places  = Hotel::where('ranking','<=',10)
          // ->where('s2c','=',4)->paginate($request->entries);
          $places  = Tour::with('tour_details','tour_images','tour_like')->paginate($request->entries);
        }
        if($request->place_id && $request->place_id == 2){
          $hotels  = Hotel::paginate($request->entries);
          $hotels  = HotelResource::collection($hotels); 
          return $this->sendResponse($hotels, __('responseMessages.hotelFeatched'));
        }
          $places  = TourResource::collection($places);
        return $this->sendResponse($places, __('responseMessages.placeFeatched'));
   }


   public function index(Request $request)
   {
        if($request->search)
          {
            $places  = Hotel::where('name', 'like', "%" .$request->search. "%")->paginate($request->entries);
            $categories =  Category::where('name', 'like', "%" .$request->search. "%")->paginate($request->entries);
            $other_places  =  Hotel::where('name', 'like', "%" .$request->search. "%")
              ->whereHas('country',function($query) use($request) {
                      $query->orWhere('description', 'like', "%" .$request->search. "%");
              })->inRandomOrder()->paginate($request->entries);
              $categories    = CategoryResource::collection($categories);
              $places        = HotelResource::collection($places);
              $other_places  = HotelResource::collection($other_places);
          return $this->sendResponse(['categories'=>$categories,'explore_places'=>$places,'other_places'=>$other_places], __('responseMessages.searchResults'));
          }
        else{
          $categories    = Category::paginate($request->entries);
          $places        = Hotel::whereHas('country')->inRandomOrder()->paginate($request->entries);
          $categories    = CategoryResource::collection($categories);
          $other_places  = HotelResource::collection($places);
        return $this->sendResponse(['categories'=>$categories,'other_places'=>$other_places], __('responseMessages.placeFeatched'));
    }
 }   

     public function makeFovirate(Request $request)
     {
          $request['user_id'] = auth()->user()->id;
          $request['is_like'] = true;
          $favoriteHotel  = FavoriteHotel::create($request->all());
          return $this->sendResponse($favoriteHotel, __('responseMessages.makeFavorite'));
     }

     public function postReview(Request $request)
     {

         $request['user_id'] = auth()->user()->id; 
         $submitReview  = CustomerReview::create($request->all());
         if($submitReview)
         {
          return $this->sendResponse($submitReview, __('responseMessages.reviewSubmit'));
         }
     }

     public function getReviews(Request $request)
     {
         if($request->type == 'all')
         {
          $reviews  =  CustomerReview::with('user')->get();
         }else{
          $reviews  =  CustomerReview::with('user')->orderBy('id','DESC')->get();
         } 
          $reviews  =  CustomerReviewResource::collection($reviews);

         return $this->sendResponse($reviews, __('responseMessages.reviewFeatched'));
     }

     public function hotelDetail($id)
     {    
           //return HotelRoom::with('room_rates')->get();
           $roomIds = [];
           $roomRates = RoomBookingRate::all();
           foreach($roomRates as $rates)
            {
                $roomIds[] = $rates['roomCode'];
            }
           $hotelDetail = Hotel::with(['country','hotel_extra_info',
            'facilitie_details','hotel_images','room_details'=>function($query) use($roomIds){
              $query->whereIn('roomCode',$roomIds);
            }])->where('code',$id)->first();
         // dd($hotelDetail);
            if($hotelDetail == null){
              return $this->sendError(__('responseMessages.hotelNotFound'), false);
            }
            if(isset($hotelDetail->hotel_extra_info) && isset($hotelDetail->room_details)){
              foreach($hotelDetail->room_details as $room){
                  for($i=0; $i<count($hotelDetail->hotel_images); $i++){
                   // return $hotelDetail->hotel_images;
                      $room['image']= $hotelDetail->hotel_images[$i]->path;
                  }
              }
              $hotelDetail  = new HotelDetailResource($hotelDetail);
              return $this->sendResponse($hotelDetail, __('responseMessages.hotelFeatched'));
            }
            elseif(!isset($hotelDetail->hotel_extra_info)){
              return $this->sendError(__('responseMessages.hotelDetailsNotFound'), false);
            }
           
     }

     public function getHotelsByFilter(Request $request)
     {
          $hotelIds    = $this->getHotelIds($request->facilities);
          $hotelDetail = Hotel::with('hotel_extra_info','hotel_reviews','min_max_rates')
          ->whereHas('hotel_reviews',function($query) use($request) {
              $query->orWhere('rating','=',$request->rating);
           })->whereHas('min_max_rates',function($query) use($request) {
            $query->orWhere('minRate','=',$request->min_rate);
            $query->orWhere('maxRate','=',$request->max_rate);
           })->orWhere('code',$hotelIds)->paginate($request->entries); 
          $hotelDetail  = HotelResource::collection($hotelDetail);
          return $this->sendResponse($hotelDetail, __('responseMessages.makeFavorite'));
     }

     public function addGuest(Request $request)
     {
         if($request->profile){
            $image = $this->fileUpload($request->profile,'user');
            $request['image'] = $image;
          }
         try{
          $guestCreated =  Guest::create($request->all());
          if($guestCreated){
            $guestCreated = UserGuest::create(['user_id'=>auth()->user()->id,'guest_id'=>$guestCreated->id]);
            return $this->sendResponse(true, __('responseMessages.guestCreated')); 
          }
         }catch(\Exception $error){
          return $error->getMessage();
         }
     }

     public function getGuests(Request $request)
     {
        $userGuests  = Guest::whereHas('user_guests',function($query){
              $query->where('user_id',auth()->user()->id);
        })->get();
        if($request->list){
          for($i=0; $i<count($userGuests); $i++){
            $userGuests[$i]['list'] = $request->list;
          }
        }
        $userGuests = GuestResource::collection($userGuests);
        return $this->sendResponse($userGuests, __('responseMessages.fetchGuests')); 

     }

     public function deleteGuest($id)
     {
          try{
            $deleteGuest = Guest::find($id)->delete();
            if($deleteGuest){
              $deleteGuest = UserGuest::where('guest_id',$id)->delete();
              return $this->sendResponse(true, __('responseMessages.deleteGuest')); 
            }
          }catch(\Exception $error){
            return $error->getMessage();
           }
     }

     public function checkHotelAvailablity(AvailablityRequest $request)
     {

         $hotelCodes = Hotel::where('name', 'like', "%" .$request->hotel_name. "%")->pluck('code');
         if(count($hotelCodes)){
         $endPoint = "https://api.test.hotelbeds.com/hotel-api/1.0/hotels";
         $requestBody = array(
           'stay'=>
            array(
              'checkIn'  => $request->checkin_date,
              'checkOut' => $request->checkout_date
            ),
            'occupancies'=>[
            array(
              'rooms'    => $request->rooms,
              'adults'   => $request->adults,
              'children' => $request->children,
            )],
            'hotels'=>
            array(
              'hotel'    => $hotelCodes
            )
         ); 
        
         $headers = array(
          'Api-key'           => $this->hotelApi,
          'X-Signature'       => $this->hotelSingnature,
          'Accept-Encoding'   => 'gzip',
         );

         try{
          
          $response = Http::withBody(
            json_encode($requestBody),'application/json',
           )->withHeaders($headers)->post($endPoint);
           $responseBody = json_decode($response->getBody(), true);
           return $responseBody;
           if(isset($responseBody['hotels']) && $responseBody['hotels']['total']  >= 1){
            $hotles  = $responseBody['hotels'];
            //update hotel & rooms rates
            $this->updateHotelRates($hotles);
            $hotelIds = array(); 
            foreach($hotles['hotels'] as $hotel)
            {
              $hotelIds[] = $hotel['code'];
            } 
            $hotles  = Hotel::whereIn('code',$hotelIds)->whereHas('country',function($query)use($request){
                      $query->where('description', 'like', "%" .$request->city_country. "%");
            })->paginate(10);
            $hotles  = HotelResource::collection($hotles);
            return $this->sendResponse($hotles, __('responseMessages.fetchHotels')); 
         }else{
          return $this->sendError(__('responseMessages.hotelNotFound'), false);
         }
         }catch(\Exception $error){
         
            return $error->getMessage();
         }

         }else{
          return $this->sendError(__('responseMessages.hotelNotFound'), false);
         }

         
      }


     public function createBooking(BookingRequest $request)
     {

      $endPoint = "https://api-secure.hotelbeds.com/hotel-api/1.0/bookings";

        $paxes = $request->paxes;  

        $bookingData = array(
          "holder" => array(
            "name"     =>$request->holder_firstName,
            "surname"  =>$request->holder_lastName,
          ),
          "rooms" => array(
            ["rateKey" =>$request->rateKey,
            "paxes"    =>$paxes
            ]),
          'clientReference'=>$request->clientReference,
          'remark' =>$request->remark,
          "paymentData" =>array(
            "paymentCard" =>array(
              "cardHolderName" =>$request->cardHolderName,
              "cardType"       =>$request->cardType,
              "cardNumber"     =>$request->cardNumber,
              "cardCVC"        =>$request->cardCVC,
             )
            ),
          'contactData'=>array(
          'email'      =>$request->email,
          'phoneNumber'=>$request->phoneNumber
          )  
          
        );

       // return $bookingData;

        $headers = array(
          'Api-key'           => $this->hotelApi,
          'X-Signature'       => $this->hotelSingnature,
          'Accept-Encoding'   => 'gzip',
         );

        try{
          $response = Http::withBody(
            json_encode($bookingData),'application/json',
           )->withHeaders($headers)->post($endPoint);
           $responseBody = json_decode($response->getBody(), true);

        }catch(\Exception $error){
         
            return $error->getMessage();
         }

         return $responseBody;
     }

   
  public function storeHotelDetails(Request $request)
  {
    
      //dd($request->all());
      $data = $request['hotel'];
      $hotelDetails = array(
        'hotelCode'         =>$data['code'],
        'state'             =>$data['state'],
        'destination'       =>$data['destination'],
        'zone'              =>$data['zone'],
        'categoryGroup'     =>$data['categoryGroup'],
        'chain'             =>isset($data['chain']) ? $data['chain'] : null,
        'accommodationType' =>$data['accommodationType'],
        'postalCode'        =>$data['postalCode'],
      );


      $hotelMetaDeta = array(
        'App\Models\HotelBoard'     => $data['boards'],
        'App\Models\HotelSegment'   => $data['segments'],
        'App\Models\HotelAmenitie'  => $data['amenities'],
        'App\Models\HotelRoom'      => $data['rooms'],
        'App\Models\HotelFacilitie' => $data['facilities'],
        // 'App\Models\HotelTerminal'  => $data['terminals'],
        'App\Models\HotelIssue'     => $data['issues'],
        'App\Models\HotelImage'     => $data['images'],
      );

      DB::transaction(function() use($hotelDetails,$hotelMetaDeta,$data){

        $hotelDetailsCreated = HotelDetail::create($hotelDetails);

            if($hotelDetailsCreated){

                  foreach($hotelMetaDeta as $model => $values)
                  {
                       $this->insertData($model,$values,'hotelCode',$data['code']);
                  }
            }

      });

  }

}
