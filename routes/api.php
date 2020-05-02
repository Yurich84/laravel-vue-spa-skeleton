<?php

Route::group(['prefix' => 'auth'], function () {

    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

});

Route::apiResource('brands', 'Brand\BrandController');

Route::group(['middleware' => 'auth:api'], function () {

    Route::group(['prefix' => 'auth'], function () {
        Route::post('logout', 'Auth\LoginController@logout');
        Route::post('me', 'Auth\UserController@me');
    });

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');
});
