import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function EventDetails() {
  const { id } = useParams();
  const location = useLocation();
  const eventName = location.state?.name || "Event";

  const [events, setEvents] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    event_id: id || "",
    name: "",
    email: "",
    phone: "",
    booking_date: new Date().toISOString().split("T")[0],
    event_name: "",
    event_location: "",
    event_date: "",
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/events-detail/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        if (data.length > 0) {
          const event = data[0];
          setFormData((prevData) => ({
            ...prevData,
            event_name: event.name,
            event_location: event.location,
            event_date: event.date,
          }));
        }
      })
      .catch((error) => console.error("Error fetching event details:", error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "email",
      "phone",
      "booking_date",
      "event_name",
      "event_location",
      "event_date",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      alert(`Please fill all required fields: ${missingFields.join(", ")}`);
      return;
    }

    fetch("http://127.0.0.1:8000/api/book-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert("Event booked successfully!");
          setShowBookingModal(false);
          setFormData({
            event_id: id || "",
            name: "",
            email: "",
            phone: "",
            booking_date: new Date().toISOString().split("T")[0],
            event_name: "",
            event_location: "",
            event_date: "",
          });
        } else {
          alert("Booking failed: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error booking event:", error);
        alert("An error occurred while booking the event.");
      });
  };

  return (
    <div className="w-full bg-secondary">
      <Header />
      <h1 className="mt-10 text-3xl font-bold text-center">{eventName}</h1>
      {events.length > 0 ? (
        <div className="w-10/12 p-4 mx-auto">
          {events.map((event) => (
            <div key={event.id} className="p-4 mb-6 border rounded-lg shadow-lg shadow-indigo-500/50 bg-tertiary">
              <img
                src={event.image}
                alt={event.name}
                className="object-cover w-full h-64 rounded-lg"
              />
              <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                <div>
                  <h1 className="text-2xl font-bold">organizer name : {event.organizer_name}</h1>
                  <p className="mt-2 text-gray-600">Persons : {event.attendees_count}</p>
                  <p className="mt-4 text-gray-500">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="text-xl font-bold text-btn-color">Price : ₹ {event.budget}</p>
                </div>

                <button
                  onClick={() => setShowBookingModal(true)}
                  className="px-6 py-2 mt-4 text-white rounded-lg bg-btn-color"
                >
                  Book Event
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading event details...</p>
      )}

      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-8/12 p-6 border rounded-lg shadow-xl bg-tertiary shadow-indigo-500/50">
            <h2 className="mb-4 text-2xl font-bold text-center">Book Event</h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-around ">
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "text" },
                {
                  label: "Booking Date",
                  name: "booking_date",
                  type: "date",
                  readOnly: true,
                },
                {
                  label: "Event Name",
                  name: "event_name",
                  type: "text",
                },
                {
                  label: "Event Location",
                  name: "event_location",
                  type: "text",
                  readOnly: true,
                },
                {
                  label: "Event Date",
                  name: "event_date",
                  type: "date",
                  readOnly: true,
                },
              ].map((field) => (
                <div key={field.name} className="mb-4 w-[40%]">
                  <label className="block text-gray-700">{field.label}:</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 mt-2 border-2 rounded-lg shadow-lg border-secondary shadow-indigo-500/50"
                  />
                </div>
              ))}
              <div className="flex space-x-4 w-[40%] justify-around items-center">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="w-40 px-6 py-3 text-white bg-red-500 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-white rounded-lg bg-btn-color"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default EventDetails;
