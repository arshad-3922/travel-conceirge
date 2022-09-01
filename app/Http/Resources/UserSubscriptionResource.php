<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserSubscriptionResource extends JsonResource
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
            'id'                 => $this->user_subscription->id,
            'note'               => $this->name,
            'price'              => $this->amount,
            'subscription_level' => $this->type,
            'features'           => $this->features,
            'description'        => $this->description
        ];
    }
}
