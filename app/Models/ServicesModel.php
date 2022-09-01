<?php

namespace App\Models;

use Facade\Ignition\Support\Packagist\Package;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicesModel extends Model
{
    use HasFactory;
    protected $table = "services";
    protected $fillable = [
        'name',"description","base_image","status"
    ];
    
    protected $with     = ['service_images'];
    
    public function getBaseImageAttribute($value){
        return asset("/assets/upload/service/{$value}");
    }

    public function category(){
        return $this->belongsTo(Category::class,'category_id','id');
    }

    public function service_images(){
        return $this->hasMany(ServiceImage::class,'service_id');
    }

    public function business_service()
    {
        return $this->hasMany(BusinessService::class,'service_id');
    }

}
