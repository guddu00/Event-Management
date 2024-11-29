<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use App\Http\Controllers\EventController;

use App\Http\Controllers\EventDetailController;

Route::apiResource('event-details', EventDetailController::class);

Route::get('/events', [EventController::class, 'index']);
Route::post('/events',[EventController::class, 'store']);
