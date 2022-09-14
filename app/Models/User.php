<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use jeremykenedy\LaravelRoles\Traits\HasRoleAndPermission;
class User extends Authenticatable {
	
	use HasApiTokens,HasFactory, Notifiable,HasRoleAndPermission;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */

	protected $guarded = [];

	protected $with = ['country'];

	protected $fillable = [
		'name',
		'email',
		'phone_number',
		'country_id',
		'city',
		'state',
		'zip_code',
		'password',
		'image',
		'latitude',
		'longitude'
	];

	//protected $appends = ['coins'];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	/**
	 * The attributes that should be cast to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
		'latitude'		=> 'double',
		'longitude'		=> 'double'
	];


	public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = \Str::uuid();
        });
    }
	
		
	public function getImageAttribute($value){
		if(!$value){
		 return asset("/assets/upload/user/invite.png");
		}else{
			return asset("/assets/upload/user/{$value}");
		}
    }

	public function user_role()
	{
		return $this->belongsTo(RoleUser::class,'id','user_id');
	}

	public function country()
	{
		return $this->belongsTo(Country::class,'country_id','id');
	}

	
}
