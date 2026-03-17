import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-gray-300 pt-16 pb-8 border-t-4 border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Flavours Of Mankal</h2>
                        <p className="text-sm mb-6 text-gray-400 leading-relaxed">
                            (ఫ్లెవర్స్ ఆఫ్ మంకల్) - Authentic Indian Restaurant serving the best Mandi, Biryani, and traditional cuisines in Hyderabad.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary"></span>
                        </h3>
                        <ul className="space-y-3 mt-2">
                            <li><Link to="/menu" className="hover:text-accent transition-colors">Our Menu</Link></li>
                            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
                            <li><Link to="/reviews" className="hover:text-accent transition-colors">Customer Reviews</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary"></span>
                        </h3>
                        <ul className="space-y-4 mt-2">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" size={18} />
                                <span>Doolapally Rd, near Nithyachaitanya Kalari,<br/>Bahadurpally, Hyderabad, Telangana 500043</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="text-primary mr-3 flex-shrink-0" size={16} />
                                <span>+91 95538 81041</span>
                            </li>
                            <li className="flex items-center">
                                <FaClock className="text-primary mr-3 flex-shrink-0" size={16} />
                                <span>Open 24 hours</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Flavours Of Mankal. All rights reserved.
                    </p>
                    <p className="text-sm font-medium text-gray-400 flex items-center">
                        Made in India <span className="ml-2 text-xl">🇮🇳</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
