<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourAvailability extends Model
{
    use HasFactory;
    
    protected $fillable =[
        'code',
        'activity_code',
        'operation_days',
        'supplier_information',
        'provider_information',
        'rate_code',
        'rate_key',
        'operation_dates',
        'total_amount',
        'pax_amounts'
    ];


    public function setOperationDaysAttribute($operation_days)
    {
        $this->attributes['operation_days'] = json_encode($operation_days);
    }

    public function setSupplierInformationAttribute($supplier_information)
    {
        $this->attributes['supplier_information'] = json_encode($supplier_information);
    }

    public function setProviderInformationAttribute($provider_information)
    {
        $this->attributes['provider_information'] = json_encode($provider_information);
    }

    public function setOperationDatesAttribute($operation_dates)
    {
        $this->attributes['operation_dates'] = json_encode($operation_dates);
    }

    public function setTotalAmountAttribute($total_amount)
    {
        $this->attributes['total_amount'] = json_encode($total_amount);
    }

    public function setPaxAmountsAttribute($pax_amounts)
    {
        $this->attributes['pax_amounts'] = json_encode($pax_amounts);
    }


    public function getOperationDaysAttribute($operation_days)
    {
        return  $this->attributes['operation_days'] = json_decode($operation_days);
    }

    public function getSupplierInformationAttribute($supplier_information)
    {
        return $this->attributes['supplier_information'] = json_decode($supplier_information);
    }

    public function getProviderInformationAttribute($provider_information)
    {
        return $this->attributes['provider_information'] = json_decode($provider_information);
    }

    public function getOperationDatesAttribute($operation_dates)
    {
        return $this->attributes['operation_dates'] = json_decode($operation_dates);
    }

    public function getTotalAmountAttribute($total_amount)
    {
        return $this->attributes['total_amount'] = json_decode($total_amount);
    }

    public function getPaxAmountsAttribute($pax_amounts)
    {
        return $this->attributes['pax_amounts'] = json_decode($pax_amounts);
    }

}
