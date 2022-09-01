<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->integer('code')->nullable();
            $table->string('name')->nullable();
            $table->longText('description')->nullable();
            $table->string('countryCode')->nullable();
            $table->string('stateCode')->nullable();
            $table->string('destinationCode')->nullable();
            $table->string('zoneCode')->nullable();
            $table->longText('coordinates')->nullable();
            $table->longText('categoryCode')->nullable();
            $table->string('categoryGroupCode')->nullable();
            $table->string('chainCode')->nullable();
            $table->string('accommodationTypeCode')->nullable();
            $table->longText('boardCodes')->nullable();
            $table->longText('segmentCodes')->nullable();
            $table->longText('amenityCodes')->nullable();
            $table->longText('address')->nullable();
            $table->string('postalCode')->nullable();
            $table->longText('city')->nullable();
            $table->string('email')->nullable();
            $table->string('license')->nullable();
            $table->longText('phones')->nullable();
            $table->longText('rooms')->nullable();
            $table->longText('facilities')->nullable();    
            $table->longText('terminals')->nullable();  
            $table->longText('issues')->nullable();  
            $table->longText('interestPoints')->nullable();  
            $table->longText('images')->nullable();  
            $table->longText('wildcards')->nullable();
            $table->string('web')->nullable();
            $table->string('lastUpdate')->nullable();
            $table->string('S2C')->nullable();
            $table->string('ranking')->nullable();
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
        Schema::dropIfExists('hotels');
    }
}
