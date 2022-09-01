<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
            'id'           => $this->id,
            'payment_type' => $this->type,
            'date'         => $this->created_at->format('M d Y'),
            'time'         => $this->created_at->format('g:i A'),
            'price'        => $this->amount
        ];
    }
}
