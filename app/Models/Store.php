<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;
    protected $guarded = [];

    //protected $with = ['category'];


    public function storeImages()
    {
    	return $this->hasMany(StoreImage::class,'store_id');
    }

    public function getBaseImageAttribute($value)
    {
    	return asset("assets/upload/store/{$value}");
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

}
