<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HotelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            'id'            => $this->code,
            'name'          => $this->name,
            'location'      => $this->country->states[1]->name.','.$this->country->description,
            'rating'        => $this->rating,
            'is_like'       => $this->like,
            'image'         => $this->images
        ];
    }
}
