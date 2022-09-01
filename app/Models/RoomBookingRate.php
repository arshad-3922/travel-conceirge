<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomBookingRate extends Model
{
    use HasFactory;

    protected $fillable = [
        'roomCode',
        'rateKey',
        'net',
        'boardName'
    ];

    // public function room_rates(){

    //     return $this->hasMany(RoomBookingRate::class,'roomCode','roomCode');
    // }

}
