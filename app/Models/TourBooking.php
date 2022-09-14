<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourBooking extends Model
{
    use HasFactory;

    protected $fillable =[
        'reference',
        'status',
        'currency',
        'pendingAmount',
        'agency',
        'creationDate',
        'paymentData',
        'clientReference',
        'holder',
        'total',
        'totalNet',
        'dateFrom',
        'dateTo',
        'paxes'
    ];

    protected $casts = [
        'paymentData' => 'integer'
    ];

    public function setAgencyAttribute($agency)
    {
        $this->attributes['agency'] = json_encode($agency);
    }

    public function setPaymentDataAttribute($paymentData)
    {
        $this->attributes['paymentData'] = json_encode($paymentData);
    }

    public function setHolderAttribute($holder)
    {
        $this->attributes['holder'] = json_encode($holder);
    }
    
    public function setPaxesAttribute($paxes)
    {
        $this->attributes['paxes'] = json_encode($paxes);
    }


    public function getAgencyAttribute($agency)
    {
        return $this->attributes['agency'] = json_decode($agency);
    }

    public function getPaymentDataAttribute($paymentData)
    {
        return  $this->attributes['paymentData'] = json_decode($paymentData);
    }

    // public function getHolderAttribute($holder)
    // {
    //     return  $this->attributes['holder'] = json_decode($holder);
    // }
    
    public function getPaxesAttribute($paxes)
    {
        return $this->attributes['paxes'] = json_decode($paxes);
    }
}
