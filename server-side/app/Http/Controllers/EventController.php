<?php

namespace App\Http\Controllers;
use App\Models\EventDetail;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        return response()->json(Event::all(), 200);
    }

   

    public function store(Request $request)
{
    try {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|url', 
        ]);

        $event = Event::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Event created successfully!',
            'data' => $event,
        ], 201);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to create event',
            'error' => $e->getMessage(),
        ], 500);
    }
}
}

