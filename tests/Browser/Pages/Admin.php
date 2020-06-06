<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class Admin extends Page
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/admin/';
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param  Browser  $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
        $browser->waitForLocation($this->url())->assertPathIs($this->url());
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@navbar-toggle' => '.home-container .header .userinfo .userinfo-inner',
        ];
    }

    /**
     * Click on the log out link.
     *
     * @param Browser $browser
     * @return void
     */
    public function clickLogout($browser)
    {
        $browser->mouseover('@navbar-toggle')
            ->waitForText('Logout')
            ->click('@logout')
            ->waitForText('Confirm LogOut')
            ->press('Ok')
            ->pause(100);
    }
}
