<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'jwt', 'prefix' => 'settings'], function () {
    Route::patch('profile', 'ProfileController@update')->name('profile.update');
});
