<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('pedido_voluntarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pedido_id')->constrained('pedidos')->onDelete('cascade');
            $table->foreignId('voluntario_id')->constrained('users')->onDelete('cascade'); // tipo 'voluntario'
            $table->enum('status', ['aceito', 'cancelado', 'concluido'])->default('aceito');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('pedido_voluntarios');
    }
};
?>