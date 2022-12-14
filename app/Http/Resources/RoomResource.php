<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RoomResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

      //  dd($this->image);
        return [
            'id'            => $this->roomCode,
            'title'         => $this->type->description->content,
            'details'       => isset($this->room_rates) ? RoomDetailResource::collection($this->room_rates) : "",
            'image'         => $this->image
        ];
    }
}
