<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;

class RatingController extends Controller
{
    public function index()
    {
        $ratings = Rating::orderBy('created_at', 'desc')->get();
        return response()->json($ratings);
    }



        public function store(Request $request)
        {
        $request->validate([
            'name' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'feedback' => 'nullable|string|max:255',
        ]);

        Rating::create($request->all());

        return response()->json(['message' => 'Rating submitted successfully!'], 201);
        }

}
