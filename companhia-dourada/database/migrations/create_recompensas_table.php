<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('recompensas', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descricao');
            $table->integer('custo_pontos');
            $table->timestamps();
        });

        Schema::create('recompensa_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('recompensa_id')->constrained('recompensas')->onDelete('cascade');
            $table->timestamp('resgatado_em')->useCurrent();
        });
    }

    public function down(): void {
        Schema::dropIfExists('recompensa_user');
        Schema::dropIfExists('recompensas');
    }
};

?>