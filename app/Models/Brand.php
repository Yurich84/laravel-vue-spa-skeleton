<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    const COLUMN_ID             = 'id';
    const COLUMN_NAME           = 'name';
    const COLUMN_DESCRIPTION    = 'description';
    const COLUMN_GROUP          = 'group';
    const COLUMN_SELECT         = 'select';

    const GROUP_NOT_WORK        = 0;
    const GROUP_BRANDS_RF       = 1;
    const GROUP_BRANDS_EU       = 2;
    const GROUP_BRANDS_MONITOR  = 3;
    const GROUP_IN_WORK         = 4;

    const GROUP_LIST = [
        self::GROUP_NOT_WORK        => 'Не работаем',
        self::GROUP_BRANDS_RF       => 'Сложные бренды РФ',
        self::GROUP_BRANDS_EU       => 'Сложные бренды EU',
        self::GROUP_BRANDS_MONITOR  => 'Бренд в мониторинге',
        self::GROUP_IN_WORK         => 'Проработанные сложные бренды'
    ];

    protected $guarded = [];
}
