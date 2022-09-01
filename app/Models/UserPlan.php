<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPlan extends Model
{
    use HasFactory;

    protected $appends = ['expired_at','expired','subscription_id'];
    public function getExpiredAttribute(){
    	if(now()->gte($this->expired_at)):
    		$this->is_expired = 1;
    		$this->save();
    		return true;
    	endif;
    	return false;
    }
    public function getExpiredAtAttribute() // the name can be anything e.g getFooAttribute
    {
    	$subsriptionDate =  Carbon::parse($this->created_at);
    	return $subsriptionDate->addMonths($this->plan->duration);
    }

    public function getSubscriptionIdAttribute() // the name can be anything e.g getFooAttribute
    {
        return encrypt($this->id);
    }

    public function plan()
    {
    	return $this->belongsTo(Plan::class,'plan_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
