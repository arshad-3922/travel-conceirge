<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [

        'cardholder_name',
        'card_number',
        'cvv',
        'expiry',
        'transaction_id',
        'amount',
        'type',
        'recurring_subscription',
        'payment_method'        

    ];

    protected $casts = [
        'amount' => 'integer',
    ];

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function user_subscription(){
        return $this->belongsTo(UserSubscription::class,'id','payment_id');
    }
}
