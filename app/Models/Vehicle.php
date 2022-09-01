<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'direction',
        'transferType',
        'vehicle',
        'category',
        'pickupInformation',
        'minPaxCapacity',
        'maxPaxCapacity',
        'transferDetailInfo',
        'customerTransferTimeInfo',
        'supplierTransferTimeInfo',
        'transferRemarks',
        'price',
        'rateKey',
        'cancellationPolicies',
        'links',
        'factsheetId',
    ];

    protected $casts = [
        'price.totalAmount' => 'integer'
    ];

    protected $with = ['vehicle_images'];


    public function vehicle_images()
    {
        return $this->hasMany(VehicleImage::class,'service_id','service_id');
    }

    
    public function setVehicleAttribute($vehicle)
    {
        $this->attributes['vehicle'] = json_encode($vehicle);
    }

    public function setCategoryAttribute($category)
    {
        $this->attributes['category'] = json_encode($category);
    }
    
    public function setPickupInformationAttribute($pickupInformation)
    {
       $this->attributes['pickupInformation'] = json_encode($pickupInformation);
    }

    public function setTransferDetailInfoAttribute($transferDetailInfo)
    {
      
       $this->attributes['transferDetailInfo'] = json_encode($transferDetailInfo);
    }

    public function setCustomerTransferTimeInfoAttribute($customerTransferTimeInfo)
    {
       $this->attributes['customerTransferTimeInfo'] = json_encode($customerTransferTimeInfo);
    }

    public function setSupplierTransferTimeInfoAttribute($supplierTransferTimeInfo)
    {
       $this->attributes['supplierTransferTimeInfo'] = json_encode($supplierTransferTimeInfo);
    }

    public function setTransferRemarksAttribute($transferRemarks)
    {
       $this->attributes['transferRemarks'] = json_encode($transferRemarks);
    }

    public function setPriceAttribute($price)
    {
       $this->attributes['price'] = json_encode($price);
    }

    public function setCancellationPoliciesAttribute($cancellationPolicies)
    {
       $this->attributes['cancellationPolicies'] = json_encode($cancellationPolicies);
    }

    public function setLinksAttribute($links)
    {
       $this->attributes['links'] = json_encode($links);
    }

    public function getVehicleAttribute($vehicle)
    {
        return $this->attributes['vehicle'] = json_decode($vehicle);
    }

    public function getCategoryAttribute($category)
    {
        return  $this->attributes['category'] = json_decode($category);
    }
 
    public function getPickupInformationAttribute($pickupInformation)
    {
        return $this->attributes['pickupInformation'] = json_decode($pickupInformation);
    }

    public function getTransferDetailInfoAttribute($transferDetailInfo)
    {
        return $this->attributes['transferDetailInfo'] = json_decode($transferDetailInfo);
    }

    public function getCustomerTransferTimeInfoAttribute($customerTransferTimeInfo)
    {
        return $this->attributes['customerTransferTimeInfo'] = json_encode($customerTransferTimeInfo);
    }

    public function getSupplierTransferTimeInfoAttribute($supplierTransferTimeInfo)
    {
        return $this->attributes['supplierTransferTimeInfo'] = json_encode($supplierTransferTimeInfo);
    }

    public function getTransferRemarksAttribute($transferRemarks)
    {
        return $this->attributes['transferRemarks'] = json_encode($transferRemarks);
    }

    // public function getPriceAttribute($price)
    // {
    //     return $this->attributes['price'] = json_decode($price);
    // }

    public function getCancellationPoliciesAttribute($cancellationPolicies)
    {
        return $this->attributes['cancellationPolicies'] = json_decode($cancellationPolicies);
    }

    public function getLinksAttribute($links)
    {
        return $this->attributes['links'] = json_decode($links);
    }
}
