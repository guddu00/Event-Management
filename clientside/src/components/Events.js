import React, { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="w-full pt-10 mt-10 bg-tertiary">
      <h1 className="text-3xl font-bold text-center text-btn-color">Events</h1>
      <p className="w-10/12 mx-auto mb-6 text-center">
        Welcome to the heart of unforgettable experiences! Explore our meticulously curated events designed to make every moment extraordinary. Whether it’s the joy of weddings, the cheer of birthdays, the nostalgia of anniversaries, or the professionalism of corporate gatherings, we specialize in turning ideas into reality.
      </p>
      <div className="grid w-10/12 grid-cols-1 gap-6 p-4 mx-auto border rounded-md sm:grid-cols-2 ">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="p-4 overflow-hidden transition-all duration-300 ease-in-out border rounded-lg shadow-xl cursor-pointer bg-tertiary shadow-indigo-500/50 hover:bg-slate-300" >
             <img src={event.image} alt={event.name} className="object-cover w-full h-40"/>
              <div className="p-4">
                <h2 className="mb-2 text-lg font-semibold">{event.name}</h2>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Events;
