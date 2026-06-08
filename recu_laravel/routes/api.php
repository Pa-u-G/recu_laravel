<?php

use App\Http\Controllers\ProductoController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;


Route::get('/productos', [ProductoController::class, 'index']);

Route::post('/login', [ProductoController::class, 'login']);

Route::post('/edit', [ProductoController::class, 'edit']);

Route::post('/producto', [ProductoController::class, 'show']);

Route::post('/store', [ProductoController::class, 'store']);

Route::post('/delete', [ProductoController::class, 'destroy']);

Route::post('/message/store', [MessageController::class, 'store']);

Route::get('/users', [MessageController::class, 'users']);

Route::post('/entrada', [MessageController::class, 'entrada']);

Route::post('/salida', [MessageController::class, 'salida']);

Route::post('/show', [MessageController::class, 'show']);

Route::post('/leido', [MessageController::class, 'leido']);