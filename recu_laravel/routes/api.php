<?php

use App\Http\Controllers\ProductoController;
use Illuminate\Support\Facades\Route;


Route::get('/productos', [ProductoController::class, 'index']);

Route::post('/login', [ProductoController::class, 'login']);

Route::post('/edit', [ProductoController::class, 'edit']);

Route::post('/producto', [ProductoController::class, 'show']);

Route::post('/store', [ProductoController::class, 'store']);

Route::post('/delete', [ProductoController::class, 'destroy']);