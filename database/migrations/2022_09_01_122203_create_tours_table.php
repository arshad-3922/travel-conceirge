<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable();
            $table->string('name')->nullable();
            $table->string('type')->nullable();
            $table->string('country')->nullable();
            $table->string('destination')->nullable();
            $table->longText('duration')->nullable();
            $table->longText('contract')->nullable();
            $table->longText('amountsFrom')->nullable();
            $table->longText('cancellationPolicies')->nullable();
            $table->longText('availabilityDates')->nullable();
            $table->longText('operationDays')->nullable();
            $table->longText('releases')->nullable();
            $table->longText('questions')->nullable();
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
        Schema::dropIfExists('tours');
    }
}
