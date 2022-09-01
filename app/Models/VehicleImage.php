<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'image'
    ];

    public function setImageAttribute($images)
    {
        $this->attributes['image'] = json_encode($images);
    }

    public function getImageAttribute($images)
    {
      return $this->attributes['image'] = json_decode($images);
    }
}
