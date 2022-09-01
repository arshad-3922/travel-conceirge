<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelTerminalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotel_terminals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hotelCode');
            $table->string('terminalCode');
            $table->string('name');
            $table->longText('description')->nullable();
            $table->string('terminalType')->nullable();
            $table->longText('distance')->nullable();
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
        Schema::dropIfExists('hotel_terminals');
    }
}
