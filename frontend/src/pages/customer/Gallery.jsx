import React from 'react';

const Gallery = () => {
    // Array of Unsplash images for the gallery as requested
    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Delicious Biryani",
            category: "Biryani"
        },
        {
            src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Authentic Mandi",
            category: "Mandi"
        },
        {
            src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Chicken Dishes",
            category: "Chicken"
        },
        {
            src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Restaurant Interior",
            category: "Interior"
        },
        {
            src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Dining Table Setup",
            category: "Dining Area"
        },
        {
            src: "https://images.unsplash.com/photo-1589302168068-964664d93ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Special Mutton Mandi",
            category: "Mandi"
        }
    ];

    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 drop-shadow-sm">Our Gallery</h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Take a visual tour of our mouth-watering dishes and beautiful restaurant ambience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-w-4 aspect-h-3">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent text-sm font-bold uppercase tracking-wider mb-1">{image.category}</span>
                                <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
