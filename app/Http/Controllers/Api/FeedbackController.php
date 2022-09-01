<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Feedback;
use App\Http\Controllers\Api\BaseController;
use App\Services\BusinessService;

class FeedbackController extends BaseController
{
    
    public function index(Request $request)
    {
        $feedbacks = Feedback::paginate($request->entries);
        return $this->sendResponse($feedbacks, __('responseMessages.fetchFeedbackSuccessfully'));
     }

    public function getFeedbackById($id){

        $feedback =  Feedback::find($id);
        return $this->sendResponse($feedback, __('responseMessages.fetchFeedbackSuccessfully'));

     }
}
