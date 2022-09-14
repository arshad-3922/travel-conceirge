<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourAvailabilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour_availabilities', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('activity_code');
            $table->longText('operation_days');
            $table->longText('supplier_information');
            $table->longText('provider_information');
            $table->string('rate_code');
            $table->string('rate_key');
            $table->longText('operation_dates');
            $table->longText('total_amount');
            $table->longText('pax_amounts');
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
        Schema::dropIfExists('tour_availabilities');
    }
}
