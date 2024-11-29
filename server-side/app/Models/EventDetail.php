<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventDetail extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'event_details';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'event_id',
        'location',
        'date',
        'organizer_name',
        'attendees_count',
        'budget',
        'features',
        'image',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'features' => 'array',
        'date' => 'date',
        'budget' => 'float',
    ];

    /**
     * Relationship: EventDetail belongs to an Event.
     */
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
