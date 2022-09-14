<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TourResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {   
        $country = json_decode($this->tour_details['country']);
        //dd($this->tour_like);
        return [
            'id'            => $this->code,
            'name'          => $this->name,
            'location'      => isset($this->tour_details['city']) ? $this->tour_details['city'].','.$country->name : $country->name,
            'price'         => $this->amounts_from[0]->boxOfficeAmount,
            'details'       => isset($this->tour_details['description']) ? $this->tour_details['description'] : null,
            'is_like'       => $this->like,
            'image'         => isset($this->tour_images[2]->image) ? $this->tour_images[2]->image : null
        ];
    }
}
