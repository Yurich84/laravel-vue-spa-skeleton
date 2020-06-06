<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class Register extends Page
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/register';
    }

    /**
     * Submit the form with the given data.
     *
     * @param  Browser $browser
     * @param  array $data
     * @return void
     */
    public function submit($browser, array $data = [])
    {
        foreach ($data as $key => $value) {
            $browser->type($key, $value);
        }

        $browser->press('Sign Up')
            ->pause(1000);
    }
}
