<?php

use App\Models\Customer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Customer::class, 'customer_id')
                ->constrained('customers')
                ->onDelete('cascade');
            $table->string('address_one', 100);
            $table->string('address_two', 100)->nullable();
            $table->string('city', 50);
            //            $table->foreignIdFor(State::class, 'state_id');
            $table->string('postal_code', 20);
            $table->string('country', 50);
            $table->timestamps();
        });
    }
};
