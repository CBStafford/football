<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\LeagueController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\TeamController;
use App\Http\Controllers\Api\V1\PlayerGamesController;
use App\Http\Controllers\Api\V1\NFLGamesController;
use App\Http\Controllers\Api\V1\ProfileController;
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

    Route::get('/official-scores', [NFLGamesController::class, 'index']);
    Route::get('/official-scores-week/{week}', [NFLGamesController::class, 'showWeek']);

    Route::get('/profile/{id}', [ProfileController::class, 'show']);
});

//NOTE Protected Routes
Route::group(['prefix'=>'v1', 'namespace'=>'App\Http\Controllers\Api\V1', 'middleware'=>'auth:sanctum'], function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/create-league', [LeagueController::class, 'store']);

    Route::post('/create-team', [TeamController::class, 'store']);
    Route::get('/team/{id}', [TeamController::class, 'show']);

    Route::get('/team-record', [PlayerGamesController::class, 'show']);
    Route::post('/set-score', [PlayerGamesController::class, 'store']);

    // Route::get('/profile/{id}', [ProfileController::class, 'show']);
    
});
