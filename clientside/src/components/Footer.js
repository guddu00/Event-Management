const Footer = () => {
    return (
        <footer className="text-gray-200 bg-gray-800">
            <div className="container px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">About Us</h3>
                        <p className="text-sm leading-relaxed">
                            We specialize in making your events unforgettable! Whether it's a wedding, corporate meeting, or birthday party, we've got you covered with exceptional service and creative planning.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-blue-400">Home</a></li>
                            <li><a href="/events" className="hover:text-blue-400">Events</a></li>
                            <li><a href="/aboutus" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
                        <ul className="space-y-2">
                            <li><i className="mr-2 fas fa-map-marker-alt"></i>Budge Budge Institute of Technology, south 24 pragnas, west bengal, 700137</li>
                            <li><i className="mr-2 fas fa-phone-alt"></i>+91 9117744562</li>
                            <li><i className="mr-2 fas fa-envelope"></i>guddkray9869@gmail.com</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-700">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-4 mt-8 text-center border-t border-gray-700">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Event Management. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
