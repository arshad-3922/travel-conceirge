<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GuestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        if($this->list){
            return [
                'id'             => $this->id,
                'name'           => $this->first_name,
            ];
        }
        else{
        return [
            'id'            => $this->id,
            'name'          => $this->first_name,
            'email'         => $this->email,
            'phone'         => $this->phone,
            'zip_code'      => $this->zip_code,
            //'request'       => $this->guest_req,
            'relation'      => $this->relation
        ];
      
      }
    }
}
