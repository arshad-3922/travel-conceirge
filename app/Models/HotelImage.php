<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'hotelCode',
        'type',
        'path',
        'order',
        'visualOrder'
    ];

    public function getPathAttribute($value)
    {
        return "http://photos.hotelbeds.com/giata/".$value;
    }

    public function setTypeAttribute($type)
    {
        $this->attributes['type'] = json_encode($type);
    }

    public function getTypeAttribute($type)
    {
       return $this->attributes['type'] = json_decode($type);
    }

}
