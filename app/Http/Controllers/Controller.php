<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    const RESPONSE_TYPE_SUCCESS = 'success';
    const RESPONSE_TYPE_INFO    = 'info';
    const RESPONSE_TYPE_WARNING = 'warning';
    const RESPONSE_TYPE_ERROR   = 'error';
}
