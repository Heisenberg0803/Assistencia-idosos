<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recompensa;

class RecompensaController extends Controller
{
    public function index()
    {
        return Recompensa::all();
    }

    public function trocar(Request $request, $id)
    {
        $user = $request->user();
        $recompensa = Recompensa::findOrFail($id);

        if ($user->pontos < $recompensa->custo_pontos) {
            return response()->json(['erro' => 'Pontos insuficientes.'], 400);
        }

        $user->pontos -= $recompensa->custo_pontos;
        $user->save();

        return response()->json([
            'mensagem' => 'Recompensa resgatada com sucesso.',
            'pontos_restantes' => $user->pontos
        ]);
    }
}

?>