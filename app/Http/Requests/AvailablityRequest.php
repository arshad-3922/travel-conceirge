<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AvailablityRequest extends FormRequest
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
            'checkin_date'  => ['required','date','after_or_equal:now'],
            'checkout_date' => ['required','date','after:checkin_date'],
            'hotel_name'    => ['required'],
        ];
    }
}
