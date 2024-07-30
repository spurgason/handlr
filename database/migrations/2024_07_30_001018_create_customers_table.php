<?php

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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('email', 100)->unique();
            $table->string('phone', 20);
            $table->integer('address_id');
            $table->dateTime('registration_date');
            $table->enum('status', ['active', 'inactive', 'locked'])->default('inactive');
            $table->timestamps();
        });
    }
};
