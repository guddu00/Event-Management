<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class EventBooking extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
        'event_id' => 'required|exists:events,id',
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phone' => 'required|string|max:15',
        'booking_date' => 'required|date',
        'event_name' => 'required|string|max:255',
        'event_location' => 'required|string|max:255',
        'event_date'  => 'required|date',
    ]);

    $booking = Booking::create([
        'event_id' => $validated['event_id'],
        'name' => $validated['name'],
        'email' => $validated['email'],
        'phone' => $validated['phone'],
        'booking_date' => $validated['booking_date'],
        'event_name' => $validated['event_name'],
        'event_location' => $validated['event_location'],
        'event_date' => $validated['event_date'],
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Event booked successfully.',
        'booking' => $booking,
    ], 201);
}

}
