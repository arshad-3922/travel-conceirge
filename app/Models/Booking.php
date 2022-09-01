<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

   // protected $with = ['subscription'];

    protected $fillable = [
        'reference',
        'bookingFileId',
        'creationDate',
        'status',
        'modificationsPolicies',
        'holder',
        'transfers',
        'clientReference',
        'remark',
        'invoiceCompany',
        'supplier',
        'totalAmount',
        'totalNetAmount',
        'currency',
        'links'
    ];
    

    // public function user(){
    //     return $this->belongsTo(User::class,'user_id','id');
    // }

    // public function service(){
    //     return $this->belongsTo(ServicesModel::class,'service_id','id');
    // }

    // public function subscription(){
    //     return $this->belongsTo(Packages::class,'package_id','id');
    // }



    public function setModificationsPoliciesAttribute($modificationsPolicies)
    {
        $this->attributes['modificationsPolicies'] = json_encode($modificationsPolicies);
    }

    public function setHolderAttribute($holder)
    {
        $this->attributes['holder'] = json_encode($holder);
    }
    
    public function setTransfersAttribute($transfers)
    {
       $this->attributes['transfers'] = json_encode($transfers);
    }

    public function setInvoiceCompanyAttribute($invoiceCompany)
    {
       $this->attributes['invoiceCompany'] = json_encode($invoiceCompany);
    }

    public function setSupplierAttribute($supplier)
    {
       $this->attributes['supplier'] = json_encode($supplier);
    }

    public function setLinksAttribute($links)
    {
       $this->attributes['links'] = json_encode($links);
    }

    // public function getModificationsPoliciesAttribute($modificationsPolicies)
    // {
    //     return $this->attributes['modificationsPolicies'] = json_decode($modificationsPolicies);
    // }

    // public function getHolderAttribute($holder)
    // {
    //     //dd(json_decode($holder));
    //     return $this->attributes['holder'] = json_decode(json_decode($holder));
    // }
    
    // public function getTransfersAttribute($transfers)
    // {
    //     return $this->attributes['transfers'] = json_decode($transfers);
    // }

    // public function getInvoiceCompanyAttribute($invoiceCompany)
    // {
    //    return  $this->attributes['invoiceCompany'] = json_decode($invoiceCompany);
    // }

    // public function getSupplierAttribute($supplier)
    // {
    //     return  $this->attributes['supplier'] = json_decode($supplier);
    // }

    // public function getLinksAttribute($links)
    // {
    //     return $this->attributes['links'] = json_decode($links);
    // }







}
