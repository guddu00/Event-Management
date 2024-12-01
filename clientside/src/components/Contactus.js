import { useState } from "react";

function Contactus() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        event: "",
        message: "",
    });

    const events = [
        "Wedding",
        "Corporate Event",
        "Birthday Party",
        "Conference",
        "Others",
    ]; 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", event: "", message: "" });
        } else {
            alert("Failed to send message.");
        }
    };

    return (
        <div className="relative py-[350px]">

            <div className='absolute inset-0 bg-[url("https://www.veeforu.com/wp-content/uploads/2022/10/Blue-pastel-gradient-background-free-download.-scaled.jpg")] bg-cover bg-center opacity-50 h-[700px]'></div>
            <div className="absolute w-full top-20">
                <h2 className="mb-12 text-3xl font-bold text-center text-btn-color">Contact Us</h2>
                <div className="flex items-center w-full justify-evenly ">
                    <div>
                        <img className="w-[500" src="https://msinireland.in/wp-content/uploads/elementor/thumbs/Contact-Us-p1ekeuq0402oxd8amzl4u0f3dyp8v6r3o78to6ufqk.png" alt="cntct" />
                    </div>
                    <div className=" p-6 bg-secondary rounded-xl shadow-lg shadow-indigo-500/50 w-[600px] left-1/3 top-10">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input type="text" name="name" id="name" className="block w-full p-2 mt-1 border rounded" value={formData.name} onChange={handleChange} required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full p-2 mt-1 border rounded"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="event" className="block text-sm font-medium text-gray-700">
                                    Event
                                </label>
                                <select
                                    name="event"
                                    id="event"
                                    className="block w-full p-2 mt-1 border rounded"
                                    value={formData.event}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Select an event
                                    </option>
                                    {events.map((event, index) => (
                                        <option key={index} value={event}>
                                            {event}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    className="block w-full p-2 mt-1 border rounded"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="px-4 py-2 text-white rounded bg-btn-color hover:bg-blue-600">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
