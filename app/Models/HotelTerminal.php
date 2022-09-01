<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelTerminal extends Model
{
    use HasFactory;

    protected $fillable = [
        'terminalCode',
        'hotelCode',
        'name',
        'description',
        'terminalType',
        'distance'
    ];

    public function setNameAttribute($name)
    {
        $this->attributes['name'] = json_encode($name);
    }

    public function setDescriptionAttribute($description)
    {
        $this->attributes['description'] = json_encode($description);
    }

    public function getNameAttribute($name)
    {
       return $this->attributes['name'] = json_decode($name);
    }

    public function getDescriptionAttribute($description)
    {
       return $this->attributes['description'] = json_decode($description);
    }
}
