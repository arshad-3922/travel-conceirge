<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelRoom extends Model
{
    use HasFactory;

    protected $with = ['room_rates'];

    protected $fillable = [
        'roomCode',
        'hotelCode',
        'isParentRoom',
        'minPax',
        'maxPax',
        'maxAdults',
        'maxChildren',
        'minAdults',
        'description',
        'type',
        'characteristic',
        'roomStays'
    ];

    public function room_rates(){

        return $this->hasMany(RoomBookingRate::class,'roomCode','roomCode');
    }

    public function setTypeAttribute($type)
    {
        $this->attributes['type'] = json_encode($type);
    }

    public function setCharacteristicAttribute($characteristic)
    {
        $this->attributes['characteristic'] = json_encode($characteristic);
    }

    public function setRoomStaysAttribute($roomStays)
    {
        $this->attributes['roomStays'] = json_encode($roomStays);
    }

    public function getTypeAttribute($type)
    {
        return $this->attributes['type'] = json_decode($type);
    }

    public function getCharacteristicAttribute($characteristic)
    {
        return $this->attributes['characteristic'] = json_decode($characteristic);
    }

    public function getRoomStaysAttribute($roomStays)
    {
        return $this->attributes['roomStays'] = json_decode($roomStays);
    }
}
