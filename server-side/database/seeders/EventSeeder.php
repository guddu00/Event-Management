<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    public function run()
    {
        Event::create(['name' => 'Wedding', 'description' => 'Celebrate the big day with us!']);
        Event::create(['name' => 'Birthday', 'description' => 'Make your birthday unforgettable!']);
        Event::create(['name' => 'Anniversary', 'description' => 'Cherish beautiful memories.']);
        Event::create(['name' => 'Corporate Event', 'description' => 'Organize professional corporate events.']);
    }
}

