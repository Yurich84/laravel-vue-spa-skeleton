<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class Login extends Page
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/login';
    }

    /**
     * Submit the form with the given credentials.
     *
     * @param  Browser $browser
     * @param  string $email
     * @param  string $password
     * @return void
     */
    public function submit($browser, $email, $password)
    {
        $browser->type('email', $email)
                ->type('password', $password)
                ->press('Sign In')
                ->pause(500);
    }
}
