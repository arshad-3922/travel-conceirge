<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CMSImages extends Model
{
    use HasFactory;
    protected $table = 'cms_images';

    public function getImageAttribute($value)
    {
        return asset("assets/upload/cms/{$value}");
    }
}
