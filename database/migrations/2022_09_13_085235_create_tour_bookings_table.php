<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour_bookings', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->nullable();
            $table->string('status')->nullable();
            $table->string('currency')->nullable();
            $table->string('pendingAmount')->nullable();
            $table->longText('agency')->nullable();
            $table->string('creationDate')->nullable();
            $table->longText('paymentData')->nullable();
            $table->string('clientReference')->nullable();
            $table->longText('holder')->nullable();
            $table->string('total')->nullable();
            $table->string('totalNet')->nullable();
            $table->string('dateFrom')->nullable();
            $table->string('dateTo')->nullable();
            $table->longText('paxes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tour_bookings');
    }
}
