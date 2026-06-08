<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = "messages";

    protected $fillable = ["remitente","destinatario","asunto","mensage","leido"];

    public function destinatario()
    {
        return $this->belongsTo(User::class, 'destinatario');
    }
    
    public function remitente()
    {
        return $this->belongsTo(User::class, 'remitente');
    }
}