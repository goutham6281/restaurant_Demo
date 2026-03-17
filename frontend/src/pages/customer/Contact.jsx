import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 drop-shadow-sm">Contact Us</h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Have a question or want to book a table? We are here to help! Reach out to us or visit our restaurant.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
                    {/* Contact Info */}
                    <div className="p-8 md:p-12 bg-primary text-white flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-white/10 p-4 rounded-full mr-6 border border-white/20">
                                    <FaMapMarkerAlt size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2 text-accent">Restaurant Address</h4>
                                    <p className="text-gray-200 leading-relaxed">
                                        Doolapally Rd, near Nithyachaitanya Kalari,<br/>
                                        Bahadurpally, Hyderabad,<br/>
                                        Telangana 500043
                                    </p>
                                    <p className="text-sm text-gray-300 mt-2 font-mono bg-black/20 inline-block px-2 py-1 rounded">Code: HC6M+7C Hyderabad</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-white/10 p-4 rounded-full mr-6 border border-white/20">
                                    <FaPhoneAlt size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1 text-accent">Phone Number</h4>
                                    <p className="text-xl text-white font-semibold">+91 95538 81041</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-white/10 p-4 rounded-full mr-6 border border-white/20">
                                    <FaClock size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1 text-accent">Open Hours</h4>
                                    <p className="text-white font-medium">Open 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <a href="tel:+919553881041" className="btn-secondary text-center py-3 px-6 hover:scale-105 transform">Call Now</a>
                            <a href="https://maps.google.com/?q=Flavours+Of+Mankal+Bahadurpally" target="_blank" rel="noreferrer" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-center py-3 px-6 hover:scale-105 transform">Get Directions</a>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="h-96 lg:h-auto min-h-[400px] w-full relative">
                        {/* We use a standard google maps embed URL based on the address */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.885827725964!2d78.431201!3d17.512967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzQ2LjciTiA3OMKwMjYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1628100000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                            title="Flavours of Mankal Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
