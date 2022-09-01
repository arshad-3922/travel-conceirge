<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSubsription extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'subsription_id'
    ];
}
