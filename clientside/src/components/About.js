import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-6 bg-gray-100">
      <h1 className="mb-6 text-4xl font-bold text-blue-600">About Us</h1>
      <p className="max-w-3xl text-lg text-center text-gray-700">
        Welcome to our application! We are dedicated to providing the best
        services to our users. Whether you're here for event management, learning, or exploring, we strive to create an exceptional experience tailored to your needs.
      </p>

      <div className="grid max-w-5xl grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Mission Section */}
        <div className="p-6 text-center bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            To revolutionize how people interact with events and digital solutions, making it seamless and enjoyable for everyone.
          </p>
        </div>

        {/* Vision Section */}
        <div className="p-6 text-center bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600">
            Building a platform that empowers users to achieve their goals and celebrate life’s moments effortlessly.
          </p>
        </div>

        {/* Values Section */}
        <div className="p-6 text-center bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Our Values</h2>
          <p className="text-gray-600">
            We believe in innovation, integrity, and delivering value to our users.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="/events"
          className="px-6 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Explore Our Events
        </a>
      </div>
    </div>
  );
}

export default About;
