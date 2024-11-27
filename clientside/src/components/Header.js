import React, { useState, useEffect } from "react";

function Header() {
    const [events, setEvents] = useState([]); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const [activeNav, setActiveNav] = useState("home"); 
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/events")
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error("Error fetching events:", error));
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavClick = (navItem) => {
        setActiveNav(navItem); 
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest(".dropdown")) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div
                className='absolute inset-0 bg-[url("https://img.freepik.com/premium-photo/blurred-background-event-concert-award-ceremony-with-lighting-conference-hall_38810-6375.jpg")] bg-cover bg-center opacity-70 h-[600px]'
            ></div>

            <div className="absolute inset-0 bg-black opacity-70 h-[600px]"></div>

            <nav className="relative flex justify-between items-center px-10 py-4 bg-opacity-20 bg-black text-white">
              
                <h1 className="text-3xl font-bold "><span className="text-primary">In-</span>Event</h1>

                <ul className="flex space-x-6 text-lg font-medium relative">
                    <li>
                        <a
                            href="#home"
                            className={`hover:text-primary ${activeNav === "home" ? "text-primary" : ""}`}
                            onClick={() => handleNavClick("home")}
                        >
                            Home
                        </a>
                    </li>
                    <li className="relative dropdown">
                        <a
                            href="#events"
                            className={`hover:text-primary ${activeNav === "events" ? "text-primary" : ""}`}
                            onClick={() => {
                                handleNavClick("events"); // Set active on click
                                toggleDropdown();
                            }}
                        >
                            Events
                        </a>
                        {isDropdownOpen && (
                            <ul className="absolute text-center w-[250px] z-10 left-[-100px] mt-2 bg-blue-950 text-primary rounded-lg shadow-lg opacity-100 transition-opacity duration-300 ease-in-out transform">
                                {events.length > 0 ? (
                                    events.map((event) => (
                                        <li
                                            key={event.id}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {event.name}
                                        </li>
                                    ))
                                ) : (
                                    <li className="px-4 py-2">Loading...</li>
                                )}
                            </ul>
                        )}
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`hover:text-primary ${activeNav === "about" ? "text-primary" : ""}`}
                            onClick={() => handleNavClick("about")}
                        >
                            About
                        </a>
                    </li>



                    <li>
                        <a
                            href="#contact"
                            className={`hover:text-primary ${activeNav === "contact" ? "text-primary" : ""}`}
                            onClick={() => handleNavClick("contact")}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex items-center bg-white rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-transparent focus:outline-none text-black"
                    />
                    <button className="text-black ml-2 hover:text-secondary">
                        🔍
                    </button>
                </div>
            </nav>

            <div className="relative p-5 gap-8 flex flex-col h-[500px] items-center justify-center">
                <img src="https://pngimg.com/uploads/wedding/wedding_PNG19527.png" alt="" />
                <h4 className="text-white font-bold text-xl">Countries best Organizer</h4>
                <h2 className="text-4xl font-bold text-white  px-6 py-3 rounded-lg ">
                    Crafting Memories, One Event at a Time.
                </h2>
            </div>
        </div>
    );
}

export default Header;
