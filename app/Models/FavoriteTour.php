<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteTour extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tour_id',
        'is_like'
    ];


    protected $casts = [
        'is_like' => 'integer'
    ];
}
