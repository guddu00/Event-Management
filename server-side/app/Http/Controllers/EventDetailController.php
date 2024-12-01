<?php

namespace App\Http\Controllers;

use App\Models\EventDetail;
use Illuminate\Http\Request;

class EventDetailController extends Controller
{
    
    public function index()
    {
        $eventDetails = EventDetail::all();
        return response()->json($eventDetails, 200);
    }

    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'location' => 'required|string|max:255',
            'date' => 'required|date',
            'organizer_name' => 'required|string|max:255',
            'attendees_count' => 'required|integer|min:0',
            'budget' => 'required|numeric|min:0',
            'features' => 'required|array',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('event_images', 'public');
        }

        $eventDetail = EventDetail::create($validated);

        return response()->json($eventDetail, 201);
    }

    public function show($id)
    {
        $eventDetail = EventDetail::find($id);

        if (!$eventDetail) {
            return response()->json(['error' => 'Event detail not found'], 404);
        }

        return response()->json($eventDetail, 200);
    }

    public function update(Request $request, $id)
    {
        $eventDetail = EventDetail::find($id);

        if (!$eventDetail) {
            return response()->json(['error' => 'Event detail not found'], 404);
        }

        $validated = $request->validate([
            'event_id' => 'sometimes|exists:events,id',
            'location' => 'sometimes|string|max:255',
            'date' => 'sometimes|date',
            'organizer_name' => 'sometimes|string|max:255',
            'attendees_count' => 'sometimes|integer|min:0',
            'budget' => 'sometimes|numeric|min:0',
            'features' => 'sometimes|array',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('event_images', 'public');
        }

        $eventDetail->update($validated);

        return response()->json($eventDetail, 200);
    }

    public function destroy($id)
    {
        $eventDetail = EventDetail::find($id);

        if (!$eventDetail) {
            return response()->json(['error' => 'Event detail not found'], 404);
        }

        $eventDetail->delete();

        return response()->json(['message' => 'Event detail deleted successfully'], 200);
    }
}
