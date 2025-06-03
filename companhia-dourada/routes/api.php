<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\RecompensaController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/perfil', [UserController::class, 'perfil']);

    // Pedidos
    Route::get('/requests', [PedidoController::class, 'index']);
    Route::post('/requests', [PedidoController::class, 'store']);
    Route::put('/requests/{id}', [PedidoController::class, 'update']);
    Route::delete('/requests/{id}', [PedidoController::class, 'destroy']);
    Route::post('/requests/{id}/aceitar', [PedidoController::class, 'aceitar']);
    Route::post('/requests/{id}/concluir', [PedidoController::class, 'concluir']);
    Route::post('/requests/{id}/cancelar', [PedidoController::class, 'cancelar']);

    // Recompensas
    Route::get('/benefits', [RecompensaController::class, 'index']);
    Route::post('/benefits/{id}/trocar', [RecompensaController::class, 'trocar']);
});


?>