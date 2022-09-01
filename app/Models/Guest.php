<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Guest extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'relation',
        'trip_type',
        'type',
        'phone',
        'passport_number',
        'guest_req',
        'zip_code',
        'image'
    ];


    	
   public function getImageAttribute($value){
        return asset("/assets/upload/user/{$value}");
    }

    public function getTripTypeAttribute($value){
            
        if($value == 1){
            return "Friend,s Trip";
        }else{
            return "Other";
        }
    }  


    public function user_guests(){

        return $this->hasMany(UserGuest::class,'guest_id');
    }
}
