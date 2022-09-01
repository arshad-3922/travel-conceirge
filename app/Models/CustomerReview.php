<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'hotel_id',
        'user_id',
        'rating',
        'review',
        'review_anonymously'
    ];

   // protected $appends = ['review_type'];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }

    // public function getReviewTypeAttribute()
    // {
    //    return array(
    //     '1'     =>'All',
    //     '2'     =>'MostRecent',
    //    );
    // }
}
