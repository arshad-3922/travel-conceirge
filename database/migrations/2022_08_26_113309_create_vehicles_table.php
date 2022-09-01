<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->integer('service_id')->nullable();
            $table->string('direction')->nullable();
            $table->string('transferType')->nullable();
            $table->longText('vehicle')->nullable();
            $table->longText('category')->nullable();
            $table->longText('pickupInformation')->nullable();
            $table->string('minPaxCapacity')->nullable();
            $table->string('maxPaxCapacity')->nullable();
            $table->longText('transferDetailInfo')->nullable();
            $table->longText('customerTransferTimeInfo')->nullable();
            $table->longText('supplierTransferTimeInfo')->nullable();
            $table->longText('transferRemarks')->nullable();
            $table->longText('price')->nullable();
            $table->longText('rateKey')->nullable();
            $table->longText('cancellationPolicies')->nullable();
            $table->longText('links')->nullable();
            $table->string('factsheetId')->nullable();
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
        Schema::dropIfExists('vehicles');
    }
}
