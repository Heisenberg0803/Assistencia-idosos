<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recompensa extends Model
{
    protected $fillable = ['nome', 'descricao', 'custo_pontos'];
}


?>