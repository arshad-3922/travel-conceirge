<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name'                  => ['required','max:7','min:3'],
            'email'                 => ['required','unique:users,email'],
            'phone_number'          => ['required'],
            'password'              => ['required','string','min:6'],
            'password_confirmation' => ['required','same:password'],
        ];
    }
}
