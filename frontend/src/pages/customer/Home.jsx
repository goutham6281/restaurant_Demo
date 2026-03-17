import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ 
                        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-65"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                        <span className="text-accent">Flavours</span> Of Mankal
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 font-light mb-8 italic drop-shadow-md">
                        "Authentic Indian Flavours & Delicious Mandi"
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white border border-white/20">
                            <div className="flex items-center justify-center text-accent mb-1">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-accent/50" />
                            </div>
                            <div className="text-xl font-bold">4.1 <span className="text-sm font-normal">/ 5</span></div>
                            <div className="text-xs text-gray-300 uppercase tracking-wider">1209 Reviews</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white border border-white/20">
                            <div className="text-accent text-xl font-bold mb-1">₹200 – ₹400</div>
                            <div className="text-xs text-gray-300 uppercase tracking-wider">Price per person</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/menu" className="btn-primary py-3 px-8 text-lg hover:scale-105 transform">
                            Order Now
                        </Link>
                        <Link to="/menu" className="btn-secondary py-3 px-8 text-lg hover:scale-105 transform">
                            View Menu
                        </Link>
                        <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-dark py-3 px-8 text-lg hover:scale-105 transform">
                            Book Table
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary inline-block relative">
                            Why Choose Us
                            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-1 bg-accent"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6 text-primary shadow-inner">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-dark">Open 24 Hours</h3>
                            <p className="text-gray-600">Craving midnight Biryani? We're open round the clock to serve your hunger anytime.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6 text-secondary shadow-inner">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-dark">Beautiful Ambience</h3>
                            <p className="text-gray-600">Special Mandi seating arrangements and a perfect family dining area for memorable moments.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-accent shadow-inner">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-dark">Fast Delivery</h3>
                            <p className="text-gray-600">Quick delivery services ensuring your food arrives hot, fresh, and full of flavor.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
