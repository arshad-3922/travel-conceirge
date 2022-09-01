<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {   

        $charges = json_decode($this->price);
       // dd($charges->totalAmount);
        return [
            'id'    => $this->id,
            'name'  => $this->vehicle->name,
            'price' => $charges->totalAmount,
            'type'  => $this->transferType,
            'image' => $this->vehicle_images[2]->image,
            'car_features' => CarFeaturesResource::collection($this->transferDetailInfo)
        ];
    }
}
