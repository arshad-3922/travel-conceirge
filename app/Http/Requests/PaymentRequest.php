<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
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
            'cardholder_name'  => ['required'],
            'card_number'      => ['required','digits:16','integer'],
            'expiry'           => ['required'],
            'cvv'              => ['required','max:3','min:3'],
            'payment_method'   => ['required'],
        ];
    }
}
