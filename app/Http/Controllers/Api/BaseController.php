<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Hotel;
use App\Models\HotelCountry;
use Illuminate\Http\Request;
use Carbon\Carbon;
use DateTime;
use App\Models\User;
use App\Models\HotelBoard;
use App\Models\HotelSegment;
use App\Models\HotelAmenitie;
use App\Models\HotelFacilitie;
use App\Models\HotelMinMaxRate;
use App\Models\RoomBookingRate;
use App\Models\Vehicle;
use App\Models\VehicleImage;

// use Ixudra\Curl\Facades\Curl;

// use LaravelFCM\Message\OptionsBuilder;
// use LaravelFCM\Message\PayloadDataBuilder;
// use LaravelFCM\Message\PayloadNotificationBuilder;
// use FCM;
// // Models
// use App\Models\Notification;

class BaseController extends Controller
{

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result = 'null', $message)
    {
        $response = [
            'status' => 'Success',
            'message' => $message ?? null,
            'data'    => $result,
        ];

        return response($response, 200);
    }

    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($errorMessages, $errors = null, $code = 422)
    {
        $response = [
            'status' => 'Failed',
            'code'   =>$code,
            'message' => $errorMessages,
            'data' => $errors,
        ];

        return response($response, $code);
    }

    public function generatePin($digits){

        $i = 0; //counter
        $pin = ""; //our default pin is blank.
        while($i < $digits){
            //generate a random number between 0 and 9.
            $pin .= mt_rand(0, 9);
            $i++;
        }
        return $pin;
    }

    public function generateRandomString($length = 10) {

        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }


       public function getSlots($StartTime, $EndTime,$Duration="60")
       {    
            //dd($EndTime ,$StartTime);
            $data = array();
            $StartTime  = strtotime($StartTime);
            $EndTime    = strtotime($EndTime);
            $AddMins    = ($Duration*60);
            while($StartTime<$EndTime){
                $timestart  = date("h:i a", $StartTime);
                $StartTime += $AddMins;
                $data[] = array('from'=> $timestart,'to'=>date("h:i a", $StartTime));
        
            }
            //dd($data);
            return $data;
       }


    public function fileUpload($data,$folder)
    {
        if(isset($data)){
            $file_photo = $data;
            $timestamp  = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());
            $image   = $timestamp.'-'.str_replace([' ', ':'], '-', $file_photo->getClientOriginalName());
            $file_photo->move(public_path('assets/upload/'.$folder.'/'), $image );
            return $image;
        }
        return false;
    }

     public function saveImage($path, $image)
    {
          $image_64 = $image; //your base64 encoded data

            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf

            $replace = substr($image_64, 0, strpos($image_64, ',')+1); 


            $image_test = str_replace($replace, '', $image_64); 

            $image = str_replace(' ', '+', $image_test); 

            $imageName = uniqid().'.'.$extension;
            $final_path = $path . '/' . $imageName;
            $image_saved = file_put_contents($final_path, base64_decode($image));
            if ($image_saved !== false) {
                return $imageName;
            } else {
                return '';
            }
        }

        public function cmsUpload($file){
            $data = $file;
            $thumbnail_array_1 = explode(";", $data);
            $thumbnail_array_2 = explode(",", $thumbnail_array_1[1]);
            $data = base64_decode($thumbnail_array_2[1]);
            $thumbnailName = time() . '.png';
            $thumbnailNameToSave = public_path()."/assets/upload/cms/$thumbnailName";
            $thumbnailSaved  = file_put_contents($thumbnailNameToSave, $data);  
            if ($thumbnailSaved !== false) {
                return $thumbnailName;
            } else {
                return '';
            }
        }

        public function getCountryStates($stateCode)
        {
            $stateName = array();
            $data   = HotelCountry::get();
            foreach($data as $country)
            {
              foreach($country['states'] as $state)
              {
                  if(isset($state->code) == $stateCode)
                  {
                     $stateName[] = $state->name;
                  }
              }
            } 
            return $stateName;
        }

        public function insertData($model,$data,$field_name= null,$field_value=null)
        {
            foreach($data as $value)
            {
                if($field_name != null){
                    $value[$field_name] = $field_value;
                }
                $model::create($value);
            }
        }

        public function getHotelIds($facilities)
        {
            $facilities = explode(",",$facilities);
            //dd($facilities);
            $facilitiesData = HotelFacilitie::get();
            //dd($facilitiesData);
            $hotelIds = [];
            foreach($facilities as $items)
            {
               foreach($facilitiesData as $values)
                {
                    //dd($items);
                    if($values->description->content == $items)
                    {
                       //return $values->hotelCode;
                       return $hotelIds[] = $values->hotelCode;
                    }
                }
            }
            return $hotelIds;
        }


        public function updateHotelRates($hotles){

           // dd(count($hotles['hotels']));
            foreach($hotles['hotels'] as $hotel)
            {
                foreach($hotel['rooms'] as $room){
                    foreach($room['rates'] as $rates){
                        RoomBookingRate::updateOrCreate([
                          'roomCode' =>$room['code'],
                          'rateKey'  =>$rates['rateKey'],
                          'net'      =>$rates['net'],
                          'boardName'=>$rates['boardName'],
                        ]);
                    }
                }

                $hotelMinMax = HotelMinMaxRate::updateOrCreate([
                    'code'     =>$hotel['code'],
                    'minRate'  =>$hotel['minRate'],
                    'maxRate'  =>$hotel['maxRate'],
                ]);
            }
        }

        public function getHotelCode($pickup_coordinates,$drop_coordinates,$type){

   
            $typeTransportId = 1;
            $codeTransportId = 1;
            $transportTypes = array();
            $transportCodes = array();
            $transportTypeValues = array('ATLAS','IATA','STATION','PORT','GPS');
            $transportCodeValues = array('HT','PMI','BCNE','BCNP','GP');  

              
                foreach($transportCodeValues as $value){
                    for($i=0; $i<count($transportCodeValues); $i++){
                        $arraytemp = array('typeId'=>$codeTransportId,'fromCode'=>$value,'toCode'=>$transportCodeValues[$i]);
                        array_push($transportCodes,$arraytemp);
                        $codeTransportId++;
                    }
                }
             
             // return $transportCodes;
                foreach($transportTypeValues as $value){
                    for($i=0; $i<count($transportTypeValues); $i++){
                        $arraytemp = array(
                            'typeId'=>$typeTransportId,
                            'fromType'=>$value,
                            'fromCode'=>'',
                            'toType'=>$transportTypeValues[$i], 
                            'toCode'=>''
                            );
                         array_push($transportTypes,$arraytemp);
                         
                         $typeTransportId++;
                      }
                 }

                 
                
        // return $transportTypes;

            $hotels =  Hotel::get();  
            foreach($hotels as $hotel){
                $hotel_coordinates = $hotel->coordinates;
                if($hotel_coordinates->longitude  == $pickup_coordinates['longitude'] && $hotel_coordinates->latitude == $pickup_coordinates['latitude']){
                    foreach($transportTypes  as $value){
                         foreach($transportCodes as $value2) {
                              if($value2['typeId'] == $type && $value['typeId'] == $type){
                                //dd($value['fromType']);
                                if(isset($value2['fromCode']) && $value2['fromCode'] == 'GP'){
                                  $fromType = $value['fromType'] = $value['fromType'];
                                  $fromCode = $value['fromCode'] = $pickup_coordinates['latitude'].','.$pickup_coordinates['longitude'];
                                }
                                else{
                                    $fromType = $value['fromType'] = $value['fromType'];
                                    $fromCode = $value['fromCode'] = $value2['fromCode'];
                                }
                                if(isset($value2['fromCode']) && $value2['fromCode'] == 'HT'){
                                    $fromType = $value['fromType'] = $value['fromType'];
                                    $fromCode = $value['fromCode'] = $hotel->code;
                                }
                            }
                            
                        }
                      } 
                
                  } 

                // return array_values($transportTypes);                

                if($hotel_coordinates->longitude  == $drop_coordinates['longitude'] && $hotel_coordinates->latitude == $drop_coordinates['latitude']){
                    foreach($transportTypes as $value){
                            foreach($transportCodes as $value2) {
                                if($value2['typeId'] == $type && $value['typeId'] == $type){
                                if(isset($value2['toCode']) && $value2['toCode'] == 'GP'){
                                   // dd("sdsd");
                                  $toType = $value['toType'] = $value['toType'];
                                  $toCode = $value['toCode'] = $drop_coordinates['latitude'].','.$drop_coordinates['longitude'];
                                }
                                else{  
                                    $toType = $value['toType'] = $value['toType'];  
                                    $toCode = $value['toCode'] = $value2['toCode'];
                                }
                                if(isset($value2['toCode']) && $value2['toCode'] == 'HT'){
                                    $toType = $value['toType'] =  $value['toType']; 
                                    $toCode = $value['toCode'] =  $hotel->code;
                                }

                            }
                        }
                        
                    }
                }
            } 

                foreach($transportTypes as $code){

                    $code['fromType'] = $fromType;
                    $code['fromCode'] = $fromCode;
                    $code['toType']   = $toType;
                    $code['toCode']   = $toCode;
                    return $code;
                    
                }
        }


        public function storeCarDetails($data){
            
              Vehicle::truncate();  
              VehicleImage::truncate(); 
              $inserCarDetails = null; 
              foreach($data['services'] as $value){
              //  dd($value['services']);
                $value['service_id'] = $value['id'];
                $value['transferDetailInfo'] = $value['content']['transferDetailInfo'];
                $value['customerTransferTimeInfo'] = $value['content']['customerTransferTimeInfo'];
                $value['supplierTransferTimeInfo'] = $value['content']['supplierTransferTimeInfo'];
                $value['transferRemarks'] = $value['content']['transferRemarks'];
                $inserCarDetails  =  Vehicle::create($value); 
                    foreach($value['content']['images'] as $image){
                        $inserCarDetails  = VehicleImage::updateOrCreate([
                            'service_id'    =>$value['id'],
                            'image'         =>$image['url']
                        ]);
                    }
              }

              return $inserCarDetails;

        }


        public function storeBookingDetails($data)
        {   
            // dd($data);   
             foreach($data['bookings'] as $value)
             {
               $confirmBooking = Booking::create($value);
             }

             return $confirmBooking->reference;
        }

       
    // public function sendMessage($phone, $message) {

    //    //JAZZ OTP
    //     $data = Array();
    //     $data['number'] = $phone;
    //     $data['message'] = $message;
    //     $data['token'] = 'SVgRfDn0h%yxDo&$';
    //     $data['appname'] = 'symmetry'; 
    //     $data['masking'] = 'Symmetry';

    //     $OTPResponse = Curl::to('https://symmetrydigital-labs.com/SMSsms_pushPUSH_75160/sendMsg.php')
    //     ->withData($data)->post();
    //     return $OTPResponse;
    // }public function sendNotification($tokens, $title, $body, $dataArray)
    // {
    //     $optionBuilder = new OptionsBuilder();
    //     $optionBuilder->setTimeToLive(1);

    //     $notificationBuilder = new PayloadNotificationBuilder($title);
    //     $notificationBuilder->setBody($body);

    //     $dataBuilder = new PayloadDataBuilder();
    //     $dataBuilder->addData($dataArray);

    //     $option = $optionBuilder->build();
    //     $notification = $notificationBuilder->build();
    //     $data = $dataBuilder->build();
    //     $downstreamResponse = FCM::sendTo($tokens, $option, $notification, $data);

    //     if($downstreamResponse->numberSuccess()){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // public function sendDataMessage($tokens, $dataArray)
    // {
    //     $optionBuilder = new OptionsBuilder();
    //     $optionBuilder->setTimeToLive(1);

    //     $dataBuilder = new PayloadDataBuilder();
    //     $dataBuilder->addData($dataArray);

    //     $option = $optionBuilder->build();
    //     $data = $dataBuilder->build();
    //     $downstreamResponse = FCM::sendTo($tokens, $option, null, $data);

    //     if($downstreamResponse->numberSuccess()){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // public function createNotification($uuid, $userId, $from_user_id, $title, $body, $data, $notiticationType){

    //     $notification = Notification::create([
    //         'uuid'              =>  $uuid,
    //         'user_id'           =>  $userId,
    //         'from_user_id'      =>  $from_user_id,
    //         'title'             =>  $title,
    //         'body'              =>  $body,
    //         'data'              =>  $data,
    //         'notification_type' =>  $notiticationType,
    //     ]);

    //     if(isset($notification->id)){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
      public function uploadFile()
       {
         if(request()->hasFile('file')){
             $imageTempName = request()->file('file')->getPathname();
             $venue_img_extension = request()->file('file')->extension();
             $file = uniqid() . '.' . $venue_img_extension;
             $path = base_path('/public/uploads/jobs/video');
             request()->file('file')->move($path, $file);
             return $file;
         }
     }


    public function createCustomer($data){
    
       $createCustomer = array(
        "first_name"     =>$data['first_name'], 
        "last_name"      =>$data['first_name'],
        "email"          =>$data['email'],
        "phone"          =>$data['phone_number'],
        "note"           =>$data['spacial_request'],
       );

       $customer  = new Customer();
       $customer->save();

       //dd($customer);
       $transaction =  Square::setCustomer($customer)->charge([
        "amount"     => 500,
        "card_nonce" => 4111111111111111,
        'source_id'  => $customer->payment_service_id,
        "location_id"=> "LBSNZD7101TRK",
        "currency"   => "USD",
        "note"       =>$customer['spacial_request'],
       ]);

       return response()->json(compact('transaction'));

    }

}
