<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $appends = ['rating','like'];

    protected $casts = [
        'ranking' => 'integer'
    ];

    // Hotel relations with other tables
    public function country()
    {
        return $this->belongsTo(HotelCountry::class,'countryCode','code');
    }

    public function room_details()
    {
        return $this->hasMany(HotelRoom::class,'hotelCode','code');
    }

    public function facilitie_details()
    {
        return $this->hasMany(HotelAmenitie::class,'hotelCode','code');
    }

    public function hotel_like(){

      return  $this->belongsTo(FavoriteHotel::class,'code','hotel_id');
    }

    public function hotel_extra_info(){

        return $this->belongsTo(HotelDetail::class,'code','hotelCode');
    }

    public function hotel_images(){

        return $this->hasMany(HotelImage::class,'hotelCode','code');
    }

    public function hotel_reviews(){

        return $this->hasMany(CustomerReview::class,'hotel_id','code');
    }

    public function min_max_rates(){

        return $this->belongsTo(HotelMinMaxRate::class,'code','code');
    }
    
    public function getRatingAttribute()
    {
        $data = $this->hotel_reviews()->avg('rating');
        if(!$data){return 0;}else{return $data;}
    }

    public function getLikeAttribute()
    {
        $data  = $this->hotel_like()->first();
        return  $data ? $data->is_like : 0;
        //if($data){return $data;}else{return 0;}
    }

    //Hotel Attributes
    public function setCoordinatesAttribute($coordinates)
    {
        $this->attributes['coordinates'] = json_encode($coordinates);
    }

    public function setBoardCodesAttribute($boardCodes)
    {
        $this->attributes['boardCodes'] = json_encode($boardCodes);
    }
    public function setSegmentCodesAttribute($segmentCodes)
    {
        $this->attributes['segmentCodes'] = json_encode($segmentCodes);
    }
    public function setAmenityCodesAttribute($amenityCodes)
    {
        $this->attributes['amenityCodes'] = json_encode($amenityCodes);
    }
    public function setAddressAttribute($address)
    {
        $this->attributes['address'] = json_encode($address);
    }
    public function setCityAttribute($city)
    {
        $this->attributes['city'] = json_encode($city);
    }
    public function setPhonesAttribute($phones)
    {
        $this->attributes['phones'] = json_encode($phones);
    }
    public function setRoomsAttribute($rooms)
    {
        $this->attributes['rooms'] = json_encode($rooms);
    }
    public function setFacilitiesAttribute($facilities)
    {
        $this->attributes['facilities'] = json_encode($facilities);
    }
    public function setTerminalsAttribute($terminals)
    {
        $this->attributes['terminals'] = json_encode($terminals);
    }
    public function setIssuesAttribute($issues)
    {
        $this->attributes['issues'] = json_encode($issues);
    }
    public function setInterestPointsAttribute($interestPoints)
    {
        $this->attributes['interestPoints'] = json_encode($interestPoints);
    }
    public function setImagesAttribute($images)
    {
        $this->attributes['images'] = json_encode($images);
    }
    public function setWildCardsAttribute($wildcards)
    {
        $this->attributes['wildcards'] = json_encode($wildcards);
    }


    public function getCoordinatesAttribute($coordinates)
    {
       
        return $this->attributes['coordinates'] = json_decode($coordinates);
    }

    public function getBoardCodesAttribute($boardCodes)
    {
        return $this->attributes['boardCodes'] = json_decode($boardCodes);
    }
    public function getSegmentCodesAttribute($segmentCodes)
    {
        return $this->attributes['segmentCodes'] = json_decode($segmentCodes);
    }
    public function getAmenityCodesAttribute($amenityCodes)
    {
        return $this->attributes['amenityCodes'] = json_decode($amenityCodes);
    }
    public function getAddressAttribute($address)
    {
        return $this->attributes['address'] = json_decode($address);
    }
    public function getCityAttribute($city)
    {
        return $this->attributes['city'] = json_decode($city);
    }
    public function getPhonesAttribute($phones)
    {
        return $this->attributes['phones'] = json_decode($phones);
    }
    public function getRoomsAttribute($rooms)
    {
        return $this->attributes['rooms'] = json_decode($rooms);
    }
    public function getFacilitiesAttribute($facilities)
    {
        return $this->attributes['facilities'] = json_decode($facilities);
    }
    public function getTerminalsAttribute($terminals)
    {
        return $this->attributes['terminals'] = json_decode($terminals);
    }
    public function getIssuesAttribute($issues)
    {
        return $this->attributes['issues'] = json_decode($issues);
    }
    public function getInterestPointsAttribute($interestPoints)
    {
        return $this->attributes['interestPoints'] = json_decode($interestPoints);
    }
    public function getImagesAttribute($images)
    {
        $imagePath = $this->attributes['images'] = json_decode($images);
        return "http://photos.hotelbeds.com/giata/".$imagePath[2]->path;
    }
    public function getWildCardsAttribute($wildcards)
    {
        return $this->attributes['wildcards'] = json_decode($wildcards);
    }
    
}
