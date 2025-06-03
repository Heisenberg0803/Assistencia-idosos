<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // voluntariado (idoso)
            $table->enum('categoria', ['assistencia', 'saude', 'educacao']);
            $table->string('titulo');
            $table->text('descricao');
            $table->string('bairro');
            $table->string('cidade');
            $table->integer('pontos');
            $table->enum('status', ['pendente', 'aceito', 'concluido', 'cancelado'])->default('pendente');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('pedidos');
    }
};

?>