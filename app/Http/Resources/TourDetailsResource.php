<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TourDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $country  = json_decode($this->tour_details['country']);
        return [
            'id'            => $this->code,
            'name'          => $this->name,
            'location'      => isset($this->tour_details['city']) ? $this->tour_details['city'].','.$country->name : $country->name,
            'price'         => $this->amounts_from[0]->boxOfficeAmount,
            'details'       => isset($this->tour_details['description']) ? strip_tags($this->tour_details['description']) : null,
            'is_like'       => $this->like,
            'inclusions'    => isset($this->tour_included) ? TourIncludedResource::collection($this->tour_included) : null,
            'exclusions'    => isset($this->tour_excluded) ? TourExcludedResource::collection($this->tour_excluded) : null,
            'activity_details' => isset($this->tour_details['description']) ? strip_tags($this->tour_details['description']) : null,
            'image'         => isset($this->tour_images[2]->image) ? $this->tour_images[2]->image : null
        ];
    }
}
