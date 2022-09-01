<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'holder_firstName'  => ['required'],
            'holder_lastName'   => ['required'],
            'rateKey'           => ['required'],
            'paxes'             => ['required'],  
            'cardHolderName'    => ['required'],
            'cardType'          => ['required'],
            'cardNumber'        => ['required','digits:16','integer'],
            'expiryDate'        => ['required'], 
            'cardCVC'           => ['required'],   
            'email'             => ['required'],   
            'phoneNumber'       => ['required'], 
            'clientReference'   => ['required'], 
            'remark'            => ['required'], 
        ];
    }
}
