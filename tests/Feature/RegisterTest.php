<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    /** @test */
    public function can_register()
    {
        $response = $this->postJson(self::PATH_PREFIX . 'auth/register', [
            'name' => 'Test User',
            'email' => 'test@test.app',
            'password' => 'secret',
            'password_confirmation' => 'secret',
        ])
        ->assertSuccessful();

        if(new User instanceof MustVerifyEmail) {
            $response->assertJson(['status' => 'We have e-mailed your verification link!']);
        } else {
            $response->assertJsonStructure(['id', 'name', 'email']);
        }

    }

    /** @test */
    public function can_not_register_with_existing_email()
    {
        factory(User::class)->create(['email' => 'test@test.app']);

        $this->postJson(self::PATH_PREFIX . 'auth/register', [
            'name' => 'Test User',
            'email' => 'test@test.app',
            'password' => 'secret',
            'password_confirmation' => 'secret',
        ])
        ->assertStatus(422)
        ->assertJsonValidationErrors(['email']);
    }
}
