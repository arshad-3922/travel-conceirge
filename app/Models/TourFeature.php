<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        'tourId',
        'groupCode',
        'excluded',
        'included'
    ];

    
    public function setExcludedAttribute($excluded)
    {
        $this->attributes['excluded'] = json_encode($excluded);
    }

    public function setIncludedAttribute($included)
    {
        $this->attributes['included'] = json_encode($included);
    }

    // public function getExcludedAttribute($excluded)
    // {   
    //     return $this->attributes['excluded'] = json_decode($excluded);
    // }

    // public function getIncludedAttribute($included)
    // {
    //     return $this->attributes['included'] = json_decode($included);
    // }
    
}
