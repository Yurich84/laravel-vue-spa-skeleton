<?php

namespace Tests\Feature;

use App\Http\Controllers\Controller;
use App\Models\User;
use Tests\TestCase;

class SettingsTest extends TestCase
{
    /** @var User */
    protected $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
    }

    /** @test */
    public function update_profile_info()
    {
        $this->actingAs($this->user)
            ->patchJson(route('profile.update'), [
                'name' => 'Test User',
                'email' => 'test@test.app',
            ])
            ->assertSuccessful()
            ->assertJson(['type' => Controller::RESPONSE_TYPE_SUCCESS]);

        $this->assertDatabaseHas('users', [
            'id' => $this->user->id,
            'name' => 'Test User',
            'email' => 'test@test.app',
        ]);
    }

}
