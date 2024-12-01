    <?php

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\RatingController;
    use App\Http\Controllers\ContactController;
    use App\Http\Controllers\EventController;
    use App\Http\Controllers\EventDetailController;
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

    
    Route::get('/ratings', [RatingController::class, 'index']);
    Route::post('/ratings', [RatingController::class, 'store']);
    Route::apiResource('event-details', EventDetailController::class);
    Route::get('/events', [EventController::class, 'index']);
    Route::post('/events',[EventController::class, 'store']);
    Route::post('/contact', [ContactController::class, 'store']);
