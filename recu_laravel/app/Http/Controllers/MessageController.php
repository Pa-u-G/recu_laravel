<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'remitente' => 'required',
            'destinatario' => 'required',
            'asunto' => 'required',
            'mensage' => 'required',
        ]);

        $producto = Message::create($request->all());

        return response()->json($producto);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $producto = Message::where("id", $request->id)->with('remitente')->with('destinatario')->first();
        return response()->json($producto);
    }


    public function users(){
        $user = User::all();

        return response()->json($user);
    }

    public function entrada(Request $request){
        $producto = Message::where("destinatario", $request->id)->orderBy('created_at', 'desc')->with('remitente')->get();

        return response()->json($producto);
    }
    
    public function salida(Request $request){
        $producto = Message::where("remitente", $request->id)->orderBy('created_at', 'desc')->with('destinatario')->get();
        
        return response()->json($producto);
    }
    
    public function leido(Request $request){
        $producto = Message::where("id", $request->id)->where("destinatario", $request->uid)->first();

        if ($producto) {
            $producto->leido = 0;
            $producto->save();
        }
        return response()->json($request);
    }
}
