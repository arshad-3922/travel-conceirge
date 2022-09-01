<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelSegment extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'hotelCode',
        'description'
    ];

    public function setDescriptionAttribute($description)
    {
        $this->attributes['description'] = json_encode($description);
    }

    public function getDescriptionAttribute($description)
    {
       return $this->attributes['description'] = json_decode($description);
    }
}
