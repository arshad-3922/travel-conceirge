<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourExcluded extends Model
{
    use HasFactory;

    protected $fillable = [
        'tourId',
        'name'
    ];
}
