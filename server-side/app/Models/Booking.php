<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $table = 'bookings';

    protected $fillable = [
        'event_id',
        'name',
        'email',
        'phone',
        'booking_date',
        'event_name',
        'event_location',
        'event_date',
    ];
}
