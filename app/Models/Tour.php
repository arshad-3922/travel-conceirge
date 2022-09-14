<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'type',
        'country',
        'destination',
        'duration',
        'contract',
        'amountsFrom',
        'cancellationPolicies',
        'availabilityDates',
        'operationDays',
        'releases',
        'questions'
    ];


    protected $appends = ['like'];

    public function setDurationAttribute($duration)
    {
          $this->attributes['duration'] = json_encode($duration);
    }

    public function setContractAttribute($contract)
    {
          $this->attributes['contract'] = json_encode($contract);
    }

    public function setAmountsFromAttribute($amountsFrom)
    {       
          $this->attributes['amountsFrom'] = json_encode($amountsFrom);
    }

    public function setCancellationPoliciesAttribute($cancellationPolicies)
    {
          $this->attributes['cancellationPolicies'] = json_encode($cancellationPolicies);
    }

    public function setAvailabilityDatesAttribute($availabilityDates)
    {
          $this->attributes['availabilityDates'] = json_encode($availabilityDates);
    }

    public function setOperationDaysAttribute($operationDays)
    {
          $this->attributes['operationDays'] = json_encode($operationDays);
    }

    public function setReleasesAttribute($releases)
    {
          $this->attributes['releases'] = json_encode($releases);
    }

    public function setQuestionsAttribute($questions)
    {
          $this->attributes['questions'] = json_encode($questions);
    }


    public function getDurationAttribute($duration)
    {
        return $this->attributes['duration'] = json_decode($duration);
    }

    public function getContractAttribute($contract)
    {
        return $this->attributes['contract'] = json_decode($contract);
    }

    public function getAmountsFromAttribute($amountsFrom)
    {
        return $this->attributes['amountsFrom'] = json_decode($amountsFrom);
    }

    public function getCancellationPoliciesAttribute($cancellationPolicies)
    {
        return $this->attributes['cancellationPolicies'] = json_decode($cancellationPolicies);
    }

    public function getAvailabilityDatesAttribute($availabilityDates)
    {
        return $this->attributes['availabilityDates'] = json_decode($availabilityDates);
    }

    public function getOperationDaysAttribute($operationDays)
    {
        return $this->attributes['operationDays'] = json_decode($operationDays);
    }

    public function getReleasesAttribute($releases)
    {
        return $this->attributes['releases'] = json_decode($releases);
    }

    public function getQuestionsAttribute($questions)
    {
        return $this->attributes['questions'] = json_decode($questions);
    }

    public function getLikeAttribute()
    {
        $data  = $this->tour_like()->first();
        return  $data ? $data->is_like : 0;
        //if($data){return $data;}else{return 0;}
    }


    //relations

    public function tour_images()
    {
        return $this->hasMany(TourImages::class,"tourId",'code');
    }

    public function tour_details()
    {
        return $this->belongsTo(TourDetail::class,'code','tourId');
    }

    public function tour_included()
    {
        return $this->hasMany(TourIncluded::class,'tour_id','code');
    }

    public function tour_excluded()
    {
        return $this->hasMany(TourExcluded::class,'tour_id','code');
    }

    public function tour_like()
    {
        return $this->belongsTo(FavoriteTour::class,'id','tour_id');
    }
}
