<?php
namespace App\Core\Chat;

class AddFriend{

   public function addFriends($toid,$token){
        $app_id     = 'b16652cc50aff395735187d44a20359b';
        $secret_key = '$2y$10$dHX2VCmyUQAypkX95BSoE.Ojo5BEaXVMtnPGo8BypTrjsreMtJi8K';
        $endpoint   = 'https://dev28.onlinetestingserver.com/soachatapi';
       // dd($token);  
       $flag = true;
       $url = $endpoint . "/api/user/add-friends?toUid=$toid&appid=$app_id&auto_accept=$flag";
       $ch = curl_init ();
       curl_setopt($ch, CURLOPT_URL, $url);
       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
       curl_setopt($ch, CURLOPT_HTTPHEADER, array(
               'Content-Type: application/json',
               'Authorization: Bearer'.$token)
       );
       $response = curl_exec ($ch);
       dd($response);
       curl_close ($ch);
       return $response;
   
   }
}


    
?>

