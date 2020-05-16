<?php

namespace App\Modules\Setting\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
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
            User::COLUMN_NAME => 'required|string',
            User::COLUMN_EMAIL => 'required|email|unique:users,email,'.auth()->id(),
        ];
    }
}
