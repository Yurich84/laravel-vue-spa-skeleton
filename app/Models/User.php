<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    const COLUMN_ID = 'id';
    const COLUMN_NAME = 'name';
    const COLUMN_EMAIL = 'email';
    const COLUMN_PASSWORD = 'password';
    const COLUMN_REMEMBER_TOKEN = 'remember_token';
    const COLUMN_EMAIL_VERIFIED_AT = 'email_verified_at';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        self::COLUMN_NAME,
        self::COLUMN_EMAIL,
        self::COLUMN_PASSWORD,
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        self::COLUMN_PASSWORD, self::COLUMN_REMEMBER_TOKEN,
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        self::COLUMN_EMAIL_VERIFIED_AT => 'datetime',
    ];
}
