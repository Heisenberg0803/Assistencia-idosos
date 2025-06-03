<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PedidoVoluntario extends Model
{
    protected $fillable = ['pedido_id', 'voluntario_id', 'status'];

    public function pedido()
    {
        return $this->belongsTo(Pedido::class);
    }

    public function voluntario()
    {
        return $this->belongsTo(User::class, 'voluntario_id');
    }
}

?>