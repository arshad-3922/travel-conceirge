<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelFacilitie extends Model
{
    use HasFactory;

    protected $fillable = [
        'facilityCode',
        'hotelCode',
        'facilityGroupCode',
        'description',
        'number',
        'voucher'
    ];

    public function setDescriptionAttribute($description)
    {
        $this->attributes['description'] = json_encode($description);
    }

    public function getDescriptionAttribute($description)
    {
        //dd(json_decode($description));
       return $this->attributes['description'] = json_decode($description);
    }
}
