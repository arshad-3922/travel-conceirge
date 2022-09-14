<?php
namespace App\Core\PushNotification;

class PushNotification{

   public function sendNotification($device_token,$title,$description){
      //dd($device_token);
      $fields = array(
         'data' => array(
             'title' =>$title,
             'body'  =>$description,
             'sound' => 'default',
         ),
         'priority' => 'high',
         'registration_ids' => [$device_token],
         );
         $url = 'https://fcm.googleapis.com/fcm/send';
         // FCM Account = connecthear
         $headers = array(
         'Authorization: key=AAAAosZP1Ic:APA91bGqVZzA1OEn1_QD9LI-M0eJm2OkHPtnRSt4KFQdememYcOghvRBNcUgo2NdkgcehEmmZFQqDESYte0HUevQWazZwJ6WDoJfDY_ea5B04crtzW5sSUaPkbRGsEMqLwZPor3lOkJE',
         'Content-Type: application/json',
         );
         // Open connection
         $ch = curl_init();
         // Set the url, number of POST vars, POST data
         curl_setopt($ch, CURLOPT_URL, $url);
         curl_setopt($ch, CURLOPT_POST, true);
         curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
         curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
         $result = curl_exec($ch);
         //dd($result);
         if ($result === FALSE) {
            die('Curl failed: ' . curl_error($ch));
         }  
         curl_close($ch);

   
   }
}


    
?>

