<?php

namespace Tests\Feature;

use App\Models\PersonalAccessToken;
use App\Models\User;
use Illuminate\Support\Facades\Config;
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
        $response = $this->postJson(route('login'), [
            'email' => $this->user->email,
            'password' => 'password',
            'device_name' => 'spa',
        ]);

        $token = $response->json()['token'];

        $response
            ->assertSuccessful()
            ->assertJson(['token' => $token])
            ->assertHeader('Authorization');

        $this->withToken($token)
            ->postJson(route('me'))
            ->assertSuccessful();

        $this->assertDatabaseHas(PersonalAccessToken::TABLE_NAME, [
            PersonalAccessToken::COLUMN_NAME => 'spa',
            PersonalAccessToken::COLUMN_TOKENABLE_ID => $this->user->id,
            PersonalAccessToken::COLUMN_TOKENABLE_TYPE => User::class,
        ]);
    }

    /** @test */
    public function fetch_the_current_user()
    {
        $this->actingAs($this->user)
            ->postJson(route('me'))
            ->assertSuccessful()
            ->assertJsonPath('data.email', $this->user->email);
    }

    /** @test */
    public function log_out()
    {
        Config::set('auth.defaults.guard', 'api');

        $response = $this->postJson(route('login'), [
            'email' => $this->user->email,
            'password' => 'password',
            'device_name' => 'spa',
        ]);

        $token = $response->json()['token'];

        $this->withToken($token)
            ->postJson(route('logout'))
            ->assertOk();

        $this->assertDatabaseMissing(PersonalAccessToken::TABLE_NAME, [
            PersonalAccessToken::COLUMN_NAME => 'spa',
            PersonalAccessToken::COLUMN_TOKENABLE_ID => $this->user->id,
            PersonalAccessToken::COLUMN_TOKENABLE_TYPE => User::class,
        ]);

        $this->withToken($token)
            ->postJson(route('me'))
            ->assertStatus(401);
    }
}
