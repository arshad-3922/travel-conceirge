<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CMS extends Model
{
    use HasFactory;
    protected $table = 'cms';

    public function images()
    {
        return $this->hasMany(CMSImages::class,'cms_id');
    }
}
