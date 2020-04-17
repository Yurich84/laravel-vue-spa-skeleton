<?php

namespace App\Http\Requests;

use App\Models\Brand;
use Illuminate\Foundation\Http\FormRequest;

class BrandRequest extends FormRequest
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
            Brand::COLUMN_NAME          => 'required|string',
            Brand::COLUMN_DESCRIPTION   => 'required|string',
            Brand::COLUMN_GROUP         => 'integer',
            Brand::COLUMN_SELECT        => 'integer'
        ];
    }
}
