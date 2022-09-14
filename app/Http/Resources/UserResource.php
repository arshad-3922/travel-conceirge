<?php

namespace App\Http\Resources;

use App\Models\Country;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'id'            => $this->id,
            'name'          => $this->name,
            'email'         => $this->email,
            'phone_number'  => $this->phone_number,
            'country_id'    => $this->country->id,
            'country_name'  => $this->country->name,
            'city'          => $this->city,
            'state'         => $this->state,
            'zip_code'      => $this->zip_code,
            'is_subscribe'  => $this->is_subscribe,
            'image'         => $this->image,
            'token'         => (isset($this->token)) ? $this->token: null,
        ];
    }
}
