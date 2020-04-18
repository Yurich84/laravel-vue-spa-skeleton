<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository extends AbstractRepository
{
    /**
     * @var string
     */
    protected $class = User::class;

}
