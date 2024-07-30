<?php

namespace Tests\Feature\Models;

use App\Models\Address;
use App\Models\Customer;
use Tests\TestCase;

class AddressTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testCustomerRelationship(): void
    {
        $address = Address::factory()->for(Customer::factory())->create();

        $this->assertInstanceOf(Customer::class, $address->customer);
    }
}
