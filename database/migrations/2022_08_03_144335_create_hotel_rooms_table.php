<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotel_rooms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hotelCode');
            $table->string('roomCode');
            $table->string('isParentRoom')->nullable();
            $table->string('minPax')->nullable();
            $table->string('maxPax')->nullable();
            $table->string('maxAdults')->nullable();
            $table->string('maxChildren')->nullable();
            $table->string('minAdults')->nullable();
            $table->longText('description')->nullable();
            $table->longText('type')->nullable();
            $table->longText('characteristic')->nullable();
            $table->longText('roomStays')->nullable();
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
        Schema::dropIfExists('hotel_rooms');
    }
}
