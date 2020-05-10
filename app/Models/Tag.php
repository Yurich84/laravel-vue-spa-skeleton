<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    const COLUMN_ID             = 'id';
    const COLUMN_NAME           = 'name';

    protected $guarded = [self::COLUMN_ID];
}
