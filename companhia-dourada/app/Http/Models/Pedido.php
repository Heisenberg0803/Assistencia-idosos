<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        'criador_id', 'categoria', 'titulo', 'descricao',
        'bairro', 'cidade', 'pontos', 'status'
    ];

    public function criador()
    {
        return $this->belongsTo(User::class, 'criador_id');
    }

    public function voluntarios()
    {
        return $this->hasMany(PedidoVoluntario::class);
    }
}

?>