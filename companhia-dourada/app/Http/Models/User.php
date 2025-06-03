<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;

    protected $fillable = ['nome', 'cpf', 'email', 'tipo', 'password'];

    protected $hidden = ['password'];

    public function pedidosCriados()
    {
        return $this->hasMany(Pedido::class, 'criador_id');
    }

    public function pedidosAceitos()
    {
        return $this->hasMany(PedidoVoluntario::class, 'voluntario_id');
    }
}


?>