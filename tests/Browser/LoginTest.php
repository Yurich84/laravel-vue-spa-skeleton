<?php

namespace Tests\Browser;

use App\Models\User;
use Tests\Browser\Pages\Admin;
use Tests\Browser\Pages\Login;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{

    /** @test */
    public function login_with_valid_credentials()
    {
        $user = User::factory()->create();

        $this->browse(function ($browser) use ($user) {
            $browser->visit(new Login)
                ->submit($user->email, 'password')
                ->assertPageIs(Admin::class);

            $browser->visit(new Admin)
                ->clickLogout()
                ->assertPageIs(Login::class);
        });

    }


    /** @test */
    public function login_with_invalid_credentials()
    {
        $this->browse(function ($browser) {
            $browser->visit(new Login)
                ->submit('test@test.app', 'password123')
                ->assertSee('These credentials do not match our records.');
        });
    }
}
