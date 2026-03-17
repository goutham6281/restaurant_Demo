require('dotenv').config();
const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');
const Review = require('./models/Review');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/flavours_of_mankal';

const seedData = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to DB for seeding');

        await MenuItem.deleteMany({});
        await Review.deleteMany({});

        const menuItems = [
            { name: 'Juicy Mutton Mandi', description: 'Delicious and tender mutton pieces slow-cooked with aromatic Mandi rice.', price: 400, category: 'Mandi', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', popular: true },
            { name: 'Chicken Mandi', description: 'Flavorful Basmati rice served with perfectly roasted Mandi chicken.', price: 300, category: 'Mandi', image: 'https://images.unsplash.com/photo-1589302168068-964664d93ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', popular: true },
            { name: 'Mutton Biryani', description: 'Authentic Hyderabadi Mutton dum biryani.', price: 350, category: 'Biryani', image: 'https://images.unsplash.com/photo-1589302168068-964664d93ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }, // using similar images
            { name: 'Chicken Biryani', description: 'Spicy and fragrant chicken biryani.', price: 250, category: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
            { name: 'Butter Chicken', description: 'Tender chicken in a rich, creamy tomato gravy.', price: 280, category: 'Indian Curries', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
            { name: 'Tandoori Chicken', description: 'Classic half tandoori chicken roasted in clay oven.', price: 220, category: 'Tandoori', image: 'https://images.unsplash.com/photo-1599487405412-258bedda7fb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
            { name: 'Chicken Soup', description: 'Hot and comforting chicken clear soup.', price: 120, category: 'Soups', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
            { name: 'Butter Naan', description: 'Soft Indian bread with butter.', price: 40, category: 'Breads', image: 'https://images.unsplash.com/photo-1605650893351-a0c3bb049e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        ];

        const reviews = [
            { customerName: 'Rahul T', rating: 5, comment: 'Soup, rice and chicken piece are deadly combination in this restaurant.' },
            { customerName: 'Sneha M', rating: 4, comment: 'Quality of food and service is very good and prices are reasonable.' },
            { customerName: 'Vikram S', rating: 5, comment: 'Juicy Mutton Mandi was amazing. Must try.' }
        ];

        await MenuItem.insertMany(menuItems);
        await Review.insertMany(reviews);

        console.log('Seeded DB successfully');
        process.exit();
    } catch (err) {
        console.error('Error seeding data', err);
        process.exit(1);
    }
};

seedData();
