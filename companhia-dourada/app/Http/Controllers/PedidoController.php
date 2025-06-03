<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Models\PedidoVoluntario;

class PedidoController extends Controller
{
    // Listar todos os pedidos disponíveis
    public function index()
    {
        return Pedido::with('criador')->where('status', 'disponivel')->get();
    }

    // Criar um novo pedido (feito por voluntariado)
    public function store(Request $request)
    {
        $request->validate([
            'categoria' => 'required|in:assistencia,saude,educacao',
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'bairro' => 'required|string',
            'cidade' => 'required|string',
            'pontos' => 'required|integer|min:1',
        ]);

        $pedido = Pedido::create([
            'criador_id' => $request->user()->id,
            'categoria' => $request->categoria,
            'titulo' => $request->titulo,
            'descricao' => $request->descricao,
            'bairro' => $request->bairro,
            'cidade' => $request->cidade,
            'pontos' => $request->pontos,
            'status' => 'disponivel',
        ]);

        return response()->json($pedido, 201);
    }

    // Atualizar um pedido (apenas o criador)
    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);

        if ($request->user()->id !== $pedido->criador_id) {
            return response()->json(['erro' => 'Ação não autorizada.'], 403);
        }

        $pedido->update($request->only([
            'categoria', 'titulo', 'descricao', 'bairro', 'cidade', 'pontos'
        ]));

        return response()->json($pedido);
    }

    // Deletar/cancelar um pedido
    public function destroy(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);

        if ($request->user()->id !== $pedido->criador_id) {
            return response()->json(['erro' => 'Ação não autorizada.'], 403);
        }

        $pedido->delete();
        return response()->json(['mensagem' => 'Pedido cancelado.']);
    }

    // Voluntário aceita o pedido
    public function aceitar(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);

        if ($pedido->status !== 'disponivel') {
            return response()->json(['erro' => 'Pedido não está disponível.'], 400);
        }

        $pedido->status = 'aceito';
        $pedido->save();

        PedidoVoluntario::create([
            'pedido_id' => $pedido->id,
            'voluntario_id' => $request->user()->id,
            'status' => 'aceito',
        ]);

        return response()->json(['mensagem' => 'Pedido aceito.']);
    }

    // Voluntário conclui o pedido
    public function concluir(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);
        $voluntarioId = $request->user()->id;

        $relacao = PedidoVoluntario::where('pedido_id', $id)
            ->where('voluntario_id', $voluntarioId)
            ->first();

        if (! $relacao || $relacao->status !== 'aceito') {
            return response()->json(['erro' => 'Você não aceitou esse pedido.'], 403);
        }

        $pedido->status = 'concluido';
        $pedido->save();

        $relacao->status = 'concluido';
        $relacao->save();

        // Adiciona pontos ao voluntário
        $user = $request->user();
        $user->pontos += $pedido->pontos;
        $user->save();

        return response()->json(['mensagem' => 'Pedido concluído com sucesso.']);
    }

    // Voluntário desiste do pedido
    public function cancelar(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);
        $voluntarioId = $request->user()->id;

        $relacao = PedidoVoluntario::where('pedido_id', $id)
            ->where('voluntario_id', $voluntarioId)
            ->first();

        if (! $relacao) {
            return response()->json(['erro' => 'Você não está atribuído a este pedido.'], 403);
        }

        $relacao->delete();

        $pedido->status = 'disponivel';
        $pedido->save();

        return response()->json(['mensagem' => 'Pedido removido da sua lista.']);
    }
}

?>