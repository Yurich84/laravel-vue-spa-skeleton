<?php

use \Maatwebsite\Excel\Facades\Excel;
use \App\Imports\BrandsImport;
use \App\Models\Brand;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('import:brands', function () {
    Brand::query()->truncate();
    $filename = database_path('data.csv');
    Excel::import(new BrandsImport, $filename);
    $this->info('Brands have been imported.');
})->describe('Importing brands');
