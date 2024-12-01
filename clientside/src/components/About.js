import React from "react";

function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center w-full min-h-screen px-6 pt-20 mt-20 bg-tertiary">
      <h1 className="mb-6 text-4xl font-bold text-blue-600">About Us</h1>
      <p className="max-w-3xl text-lg text-center text-gray-700">
        Welcome to our application! We are dedicated to providing the best
        services to our users. Whether you're here for event management, learning, or exploring, we strive to create an exceptional experience tailored to your needs.
      </p>

      <div className="grid grid-cols-1 gap-16 mt-10 sm:grid-cols-2 lg:grid-cols-3 w-[85%]">
        <div className="relative p-6 text-center bg-white rounded-lg shadow-2xl shadow-indigo-500/50">
          <img
            src="https://www.pngkey.com/png/detail/334-3340877_mission-png-transparent-mission-mission-icons.png" // Replace with your image URL
            alt="Mission"
            className="object-cover w-full rounded-t-lg"
          />
          <h2 className="mt-12 mb-2 text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            To revolutionize how people interact with events and digital solutions, making it seamless and enjoyable for everyone.
          </p>
        </div>
        <div className="relative p-6 text-center bg-white rounded-lg shadow-2xl shadow-indigo-500/50">
          <img
            src="https://wallpapers.com/images/high/abstract-vision-concept-22c4vmgbipnllbh2-2.png" // Replace with your image URL
            alt="Vision"
            className="object-cover w-full rounded-t-lg "
          />
          <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600">
            Building a platform that empowers users to achieve their goals and celebrate life’s moments effortlessly.
          </p>
        </div>
        <div className="relative p-6 text-center bg-white rounded-lg shadow-2xl shadow-indigo-500/50">
          <img
            src="https://www.agileboston.org/wp-content/uploads/2016/06/core_value_image.png" // Replace with your image URL
            alt="Values"
            className="object-cover w-full rounded-t-lg"
          />
          <h2 className="mb-2 text-2xl font-semibold text-gray-800 ">Our Values</h2>
          <p className="text-gray-600">
            We believe in innovation, integrity, and delivering value to our users.
          </p>
        </div>
      </div>

     
      <div className="mt-12">
        <a
          href="/events"
          className="px-6 py-3 text-lg font-medium text-white transition rounded-md bg-btn-color hover:bg-blue-700"
        >
          Explore Our Events
        </a>
      </div>
    </div>
  );
}

export default About;
