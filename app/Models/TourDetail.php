<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'tourId',
        'guidingOptions',
        'importantInfo',
        'location',
        'address',
        'country',
        'city',
        'pickupInstructions',
        'scheduling',
        'segmentationGroups',
        'description',
        'countries'
    ];


   
    public function setGuidingOptionsAttribute($guidingOptions)
    {
        $this->attributes['guidingOptions'] = json_encode($guidingOptions);
    }

    public function setLocationAttribute($location)
    {
        $this->attributes['location'] = json_encode($location);
    }

    public function setCountryAttribute($country)
    {
        $this->attributes['country'] = json_encode($country);
    }

    public function setPickupInstructionsAttribute($pickupInstructions)
    {
        $this->attributes['pickupInstructions'] = json_encode($pickupInstructions);
    }

    public function setSchedulingAttribute($scheduling)
    {
        $this->attributes['scheduling'] = json_encode($scheduling);
    }

    public function setSegmentationGroupsAttribute($segmentationGroups)
    {
        $this->attributes['segmentationGroups'] = json_encode($segmentationGroups);
    }

    public function setCountriesAttribute($countries)
    {
        $this->attributes['countries'] = json_encode($countries);
    }


    public function getGuidingOptionsAttribute($guidingOptions)
    {
       return $this->attributes['guidingOptions'] = json_decode($guidingOptions);
    }

    // public function getLocationAttribute($location)
    // {
    //     return $this->attributes['location'] = json_decode($location);
    // }

    // public function getCountryAttribute($country)
    // {
    //     dd($country);
    //    return $this->attributes['country'] = json_decode($country);
    // }

    public function getPickupInstructionsAttribute($pickupInstructions)
    {
       return $this->attributes['pickupInstructions'] = json_decode($pickupInstructions);
    }

    // public function getSchedulingAttribute($scheduling)
    // {
    //     return $this->attributes['scheduling'] = json_decode($scheduling);
    // }

    // public function getSegmentationGroupsAttribute($segmentationGroups)
    // {
    //     return $this->attributes['segmentationGroups'] = json_decode($segmentationGroups);
    // }

    // public function getDescriptionAttribute($description)
    // {
    //     return $this->attributes['description'] = json_decode($description);
    // }

}
