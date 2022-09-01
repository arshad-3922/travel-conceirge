<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelDetail extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function setStateAttribute($state)
    {
        $this->attributes['state'] = json_encode($state);
    }

    public function setDestinationAttribute($destination)
    {
        $this->attributes['destination'] = json_encode($destination);
    }

    public function setZoneAttribute($zone)
    {
        $this->attributes['zone'] = json_encode($zone);
    }

    public function setCategoryGroupAttribute($categoryGroup)
    {
        $this->attributes['categoryGroup'] = json_encode($categoryGroup);
    }

    public function setChainAttribute($chain)
    {
        $this->attributes['chain'] = json_encode($chain);
    }

    public function setAccommodationTypeAttribute($accommodationType)
    {
        $this->attributes['accommodationType'] = json_encode($accommodationType);
    }


    public function getStateAttribute($state)
    {
        return $this->attributes['state'] = json_decode($state);
    }

    public function getDestinationAttribute($destination)
    {
        return $this->attributes['destination'] = json_decode($destination);
    }

    public function getZoneAttribute($zone)
    {
        return $this->attributes['zone'] = json_decode($zone);
    }

    public function getCategoryGroupAttribute($categoryGroup)
    {
        return $this->attributes['categoryGroup'] = json_decode($categoryGroup);
    }

    public function getChainAttribute($chain)
    {
        return $this->attributes['chain'] = json_decode($chain);
    }

    public function getAccommodationTypeAttribute($accommodationType)
    {
        return $this->attributes['accommodationType'] = json_decode($accommodationType);
    }
}
