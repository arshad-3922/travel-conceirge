<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HotelDetailResource extends JsonResource
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
            'location'      => $this->hotel_extra_info->state->name.','.$this->country->description,
            'rating'        => $this->rating,
            'image'         => $this->images,
            'is_like'       => $this->like,
            'other_images'  => isset($this->hotel_images) ?  ImageResource::collection($this->hotel_images) : null,
            'facilities'    => isset($this->facilities)   ?  FacilitieResource::collection($this->facilitie_details) : null,
            'room_listing'  => RoomResource::collection($this->room_details)
        ];
    }
}
