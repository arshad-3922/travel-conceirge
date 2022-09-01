<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelCountry extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function setStatesAttribute($states)
    {
        $this->attributes['states'] = json_encode($states);
    }

    public function getStatesAttribute($states)
    {
      return $this->attributes['states'] = json_decode($states);
    }
}
