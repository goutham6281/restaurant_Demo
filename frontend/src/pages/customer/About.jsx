import React from 'react';

const About = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Restaurant Ambience" 
                            className="w-full h-auto rounded-2xl shadow-xl relative z-10"
                        />
                    </div>
                    
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Welcome to Flavours Of Mankal</h1>
                        <div className="w-20 h-1 bg-primary mb-6"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Flavours Of Mankal (ఫ్లెవర్స్ ఆఫ్ మంకల్) is a popular Indian restaurant located in Bahadurpally, Hyderabad. It is well known for its delicious Mandi, authentic Biryani, and traditional Indian dishes. Our mission is to serve happiness through our secret spice blends and perfectly cooked meals.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            We pride ourselves on providing a beautiful ambience that caters to everyone. Whether you're looking for a comfortable family dining area, special Mandi seating, or a quick takeaway, we have you covered. The best part? The restaurant is open 24 hours to satisfy your cravings anytime!
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">Open 24/7</h4>
                                    <span className="text-sm text-gray-500">Always ready to serve</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-accent">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">Affordable Pricing</h4>
                                    <span className="text-sm text-gray-500">Value for money</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
