<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelIssue extends Model
{
    use HasFactory;

    protected $fillable = [
        'issueCode',
        'hotelCode',
        'issueType',
        'description',
        'dateFrom',
        'dateTo',
        'alternative'
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
