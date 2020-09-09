<?php

namespace Tests\Browser;

use App\Models\User;
use Tests\Browser\Pages\Admin;
use Tests\Browser\Pages\Login;
use Tests\Browser\Pages\Register;
use Tests\DuskTestCase;

class RegisterTest extends DuskTestCase
{

    /** @test */
    public function register_with_valid_data()
    {
        $this->browse(function ($browser) {
            $browser->visit(new Register)
                ->submit([
                    'name' => 'Test User',
                    'email' => 'test@test.app',
                    'password' => 'password',
                    'password_confirmation' => 'password',
                ])
                ->assertPageIs(Login::class);
        });
    }

    /** @test */
    public function can_not_register_with_the_same_twice()
    {
        $user = User::factory()->create();

        $this->browse(function ($browser) use ($user) {
            $browser->visit(new Register)
                ->submit([
                    'name' => 'Test User',
                    'email' => $user->email,
                    'password' => 'password',
                    'password_confirmation' => 'password',
                ])
                ->assertSee('The email has already been taken.');
        });
    }
}
