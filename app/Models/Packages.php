<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Packages extends Model
{
    use HasFactory;

    //protected $table = "packages";
    protected $guarded = [];

    protected $casts = [
        'amount' => 'integer'
    ];

    public function getStatusAttribute($value)
    {
        if($value == 1){
            return "active";
        }else{
            return "inactive";
        }
    }
    
    public function setFeaturesAttribute($features)
    {
        $this->attributes['features'] = json_encode($features);
    }
    public function getFeaturesAttribute($features)
    {
      return $this->attributes['features'] = json_decode($features);
    }

    public function user_subscription()
    {
        return $this->hasOne(UserSubsription::class,'subscription_id','id');
    }

}
