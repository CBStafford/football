<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//NOTE Public Routes
Route::group(['prefix'=>'v1', 'namespace'=>'App\Http\Controllers\Api\V1'], function(){
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/user', [UserController::class, 'index']);
    Route::get('/user/{id}', [UserController::class, 'show']);
});

//NOTE Protected Routes
Route::group(['prefix'=>'v1', 'namespace'=>'App\Http\Controllers\Api\V1', 'middleware'=>'auth:sanctum'], function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    
});
