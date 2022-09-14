<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\TravelersResource;
use App\Models\TravelerInvite;
use App\Models\User;
use Illuminate\Http\Request;
use App\Core\Chat\Soachat;
use App\Core\Chat\AddFriend;
use Facade\Ignition\Middleware\AddLogs;

class TravelersController extends BaseController
{
    public function index()
    {
        $user  = User::find(auth()->user()->id);
        $maxDistance = 10;
        $travelers  = User::select('*')->selectRaw('( 3959 * acos(
           cos( radians(?)) * 
           cos( radians(longitude)) * 
           cos( radians(latitude) - radians(?)) + sin(radians(?)) * 
           sin( radians(longitude)))) AS distance',[$user->longitude,$user->latitude,$user->longitude])
           ->havingRaw("distance < ?", [$maxDistance])->having('distance', '>',0)->get();
            $travelers = TravelersResource::collection($travelers);
            return $this->sendResponse($travelers, __('responseMessages.fetchTravelers')); 
    }

    public function inviteTravelar(Request $request)
    {
        $travelerInvite = TravelerInvite::create([
            'sender_id'       =>auth()->user()->id,
            'recipient_id'    =>$request->recipient_id,
            'message'         =>$request->message
        ]); 
        return $this->sendResponse($travelerInvite, __('responseMessages.inviteSend')); 

    }

    public function updateStatus(Request $request)
    {

        $user  = TravelerInvite::whereHas('sender')->with('sender')->where('id',$request->id)->first();
        $token = $request->token;
        $uuid  = $user->sender->uuid;
        if($request->status == 1){
            $soaChat = new AddFriend;
            $requestAccepted =  $soaChat->addFriends($uuid,$token);
            if($requestAccepted){
                 $updateInviteStatus = TravelerInvite::where('id',$request->id)
                ->update(['status'=>$request->status]);
            }
        }else{
             $updateInviteStatus = TravelerInvite::where('id',$request->id)
            ->update(['status'=>$request->status,'message'=>$request->message]);
            return $this->sendResponse($updateInviteStatus, __('responseMessages.requestUpdateStatus')); 
        }
    }
}
