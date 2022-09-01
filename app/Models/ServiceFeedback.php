<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceFeedback extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','service_id','subject','message','rating'];

    protected $with = ['user','service'];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function service()
    {
        return $this->belongsTo(ServicesModel::class,'service_id','id');
    }
}
