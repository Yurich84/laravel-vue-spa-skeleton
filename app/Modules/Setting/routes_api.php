<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api', 'prefix' => 'settings'], function () {
    Route::patch('profile', 'ProfileController@update')->name('profile.update');
});
