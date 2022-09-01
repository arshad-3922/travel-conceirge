<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guarded = [];
    

    protected $withCount = ['products'];

    public function getImageAttribute($value)
    {
    	return asset("assets/upload/category/{$value}");
    }

    public function products()
    {
    	return $this->hasMany(Store::class,'category_id','id');
    }

    public function getLabelAttribute(){
        return $this->name;
    }

    public function sub_category(){
        return $this->hasMany(SubCategory::class);
    }
}
