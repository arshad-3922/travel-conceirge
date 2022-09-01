<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotel_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hotelCode');
            $table->longText('state')->nullable();
            $table->longText('destination')->nullable();
            $table->longText('zone')->nullable();
            $table->longText('categoryGroup')->nullable();
            $table->longText('chain')->nullable();
            $table->longText('accommodationType')->nullable();
            $table->string('postalCode')->nullable();
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
        Schema::dropIfExists('hotel_details');
    }
}
