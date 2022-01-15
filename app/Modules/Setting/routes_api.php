<?php

use Illuminate\Support\Facades\Route;

Route::prefix('settings')->group(function () {
    Route::patch('profile', 'ProfileController@update')->name('profile.update');
});
