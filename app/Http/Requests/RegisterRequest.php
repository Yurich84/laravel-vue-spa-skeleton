<?php

namespace App\Http\Requests;

use App\Models\User;
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
            User::COLUMN_NAME       => ['required', 'string', 'max:255'],
            User::COLUMN_EMAIL      => ['required', 'string', 'email', 'max:255', 'unique:users'],
            User::COLUMN_PASSWORD   => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }
}
