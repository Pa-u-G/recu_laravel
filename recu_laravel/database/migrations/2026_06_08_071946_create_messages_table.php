<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("remitente");
            $table->unsignedBigInteger("destinatario");
            $table->string("asunto");
            $table->string("mensage");
            $table->boolean("leido")->default(true);


            $table->foreign("remitente")->references("id")->on("users");
            $table->foreign("destinatario")->references("id")->on("users");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
