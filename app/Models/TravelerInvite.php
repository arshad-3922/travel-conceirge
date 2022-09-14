<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TravelerInvite extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'sender_id',
        'recipient_id',
        'message'
    ];

    public function getStatusAttribute($value)
    {
        if($value == 0){
            return "pending";
        }if($value == 1){
            return "approved";
        }if($value == 2){
            return "rejected";
        }
    }

    public function sender()
    {
        return $this->belongsTo(User::class,'sender_id','id');
    }

    public function recipient()
    {
        return $this->belongsTo(User::class,'recipient_id','id');
    }
}
