<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email'        => ['required'],
            'password'     => ['required','string','min:6'],
            'device_id'    => ['required'],
            'device_type'  => ['required'],
            'role'         => ['required', 'string']
        ];
    }
}
