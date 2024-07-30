<?php

namespace Tests\Feature\Models;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     */
    public function testCustomerRelationship(): void
    {
        $user = User::factory()->for(Customer::factory())->create();

        $this->assertInstanceOf(Customer::class, $user->customer);
    }
}
