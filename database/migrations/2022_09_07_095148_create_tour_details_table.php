<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour_details', function (Blueprint $table) {
            $table->id();
            $table->string('tourId');
            $table->longText('guidingOptions')->nullable();
            $table->string('importantInfo')->nullable();
            $table->longText('location')->nullable();
            $table->longText('address')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->longText('pickupInstructions')->nullable();
            $table->longText('scheduling')->nullable();
            $table->longText('segmentationGroups')->nullable();
            $table->longText('description')->nullable();
            $table->longText('countries')->nullable();
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
        Schema::dropIfExists('tour_details');
    }
}
