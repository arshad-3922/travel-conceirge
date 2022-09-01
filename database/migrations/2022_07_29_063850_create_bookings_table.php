<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->nullable();
            $table->string('bookingFileId')->nullable();
            $table->date('creationDate')->nullable();
            $table->string('status')->nullable();
            $table->longText('modificationsPolicies')->nullable();
            $table->longText('holder')->nullable();
            $table->longText('transfers')->nullable();
            $table->string('clientReference')->nullable();
            $table->string('remark')->nullable();
            $table->longText('invoiceCompany')->nullable();
            $table->longText('supplier')->nullable();
            $table->string('totalAmount')->nullable();
            $table->string('totalNetAmount')->nullable();
            $table->string('currency')->nullable();
            $table->longText('links')->nullable();


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
        Schema::dropIfExists('bookings');
    }
}
