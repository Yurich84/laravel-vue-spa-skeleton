<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /** @var User */
    protected $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
    }

    /** @test */
    public function authenticate()
    {
        $this->postJson(self::PATH_PREFIX . 'auth/login', [
            'email' => $this->user->email,
            'password' => 'password',
        ])
        ->assertSuccessful()
        ->assertJsonStructure(['token', 'expires_in'])
        ->assertJson(['token_type' => 'bearer'])
        ->assertHeader('Authorization');
    }

    /** @test */
    public function fetch_the_current_user()
    {
        $this->actingAs($this->user)
            ->postJson(self::PATH_PREFIX . 'auth/me')
            ->assertSuccessful()
            ->assertJsonPath('data.email', $this->user->email);
    }

    /** @test */
    public function log_out()
    {
        $token = $this->postJson(self::PATH_PREFIX . 'auth/login', [
            'email' => $this->user->email,
            'password' => 'password',
        ])->json()['token'];

        $this->postJson(self::PATH_PREFIX . "auth/logout?token=$token")
            ->assertSuccessful();

        $this->postJson(self::PATH_PREFIX . 'auth/me')
            ->assertStatus(401);
    }
}
