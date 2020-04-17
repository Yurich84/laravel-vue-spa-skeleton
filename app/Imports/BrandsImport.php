<?php

namespace App\Imports;

use App\Models\Brand;
use Maatwebsite\Excel\Concerns\ToModel;

class BrandsImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return Brand
    */
    public function model(array $row)
    {
        if(is_integer($row[0])) {
            return new Brand([
                'id' => $row[0],
                'name' => $row[1],
                'description' => $row[2],
                'group' => array_search($row[3], Brand::GROUP_LIST),
                'select' => $row[4] === 'Да'
            ]);
        } else {
            return null;
        }
    }
}
