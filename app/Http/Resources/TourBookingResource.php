<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TourBookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $holder = json_decode($this->holder);

        return [
            'id'            => $this->id,
            'reference_no'  => $this->reference,
            'name'          => $holder->name,
            'surname'       => $holder->surname,
            'email'         => $holder->email,
            'phone'         => $holder->telephones[0],
            'date'          => $this->created_at->format('M d Y'),
            'time'          => $this->created_at->format('g:i A'),
            'total_amount'  => $this->pendingAmount,
            'status'        => $this->status
           ];
    }
}
