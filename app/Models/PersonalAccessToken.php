<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

class PersonalAccessToken extends SanctumPersonalAccessToken
{
    use HasFactory;

    const TABLE_NAME = 'personal_access_tokens';
    const COLUMN_ID = 'id';
    const COLUMN_NAME = 'name';
    const COLUMN_TOKEN = 'token';
    const COLUMN_ABILITIES = 'abilities';
    const COLUMN_TOKENABLE_ID = 'tokenable_id';
    const COLUMN_TOKENABLE_TYPE = 'tokenable_type';
}
