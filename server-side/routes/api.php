    <?php

use App\Http\Controllers\RatingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventDetailController;
use App\Http\Controllers\EventBooking;

Route::get('/ratings', [RatingController::class, 'index']);
Route::post('/ratings', [RatingController::class, 'store']);
Route::get('/events', [EventController::class, 'index']);
Route::post('/events', [EventController::class, 'store']);
Route::get('/event-details', [EventDetailController::class, 'index']);
Route::get('/events-detail/{id}', [EventDetailController::class, 'show']);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/book-event', [EventBooking::class, 'store']);
