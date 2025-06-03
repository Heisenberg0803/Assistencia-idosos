<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function perfil(Request $request)
    {
        $user = $request->user();

        $pedidosAtivos = $user->tipo === 'voluntario'
            ? $user->pedidosAceitos()->where('status', 'aceito')->count()
            : $user->pedidosCriados()->where('status', '!=', 'concluido')->count();

        $pedidosConcluidos = $user->tipo === 'voluntario'
            ? $user->pedidosAceitos()->where('status', 'concluido')->count()
            : $user->pedidosCriados()->where('status', 'concluido')->count();

        return response()->json([
            'user' => $user,
            'pedidos_ativos' => $pedidosAtivos,
            'pedidos_concluidos' => $pedidosConcluidos,
            'pontos' => $user->pontos,
        ]);
    }
}

?>