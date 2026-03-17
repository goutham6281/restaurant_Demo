import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ customerName: '', rating: 5, comment: '' });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reviews');
            setReviews(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Failed to fetch reviews', err);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await axios.post('http://localhost:5000/api/reviews', formData);
            setFormData({ customerName: '', rating: 5, comment: '' });
            fetchReviews();
            alert('Review submitted successfully!');
        } catch (err) {
            console.error('Failed to submit review', err);
            alert('Could not submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar key={index} className={index < rating ? "text-accent" : "text-gray-300"} />
        ));
    };

    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 drop-shadow-sm">Customer Reviews</h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We love hearing from you! Check out what our amazing customers have to say about their experience at Flavours Of Mankal.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Add Review Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold mb-6 text-dark flex items-center gap-2">
                                <FaStar className="text-accent" />
                                Write a Review
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input required type="text" value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                                    <select value={formData.rating} onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-white">
                                        <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                                        <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                                        <option value={3}>⭐⭐⭐ (3 Stars)</option>
                                        <option value={2}>⭐⭐ (2 Stars)</option>
                                        <option value={1}>⭐ (1 Star)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
                                    <textarea required rows="4" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" placeholder="Tell us about the food..."></textarea>
                                </div>
                                <button type="submit" disabled={submitting} className={`w-full py-3 rounded-lg text-white font-bold transition-all ${submitting ? 'bg-gray-400' : 'bg-primary hover:bg-red-800'}`}>
                                    {submitting ? 'Submitting...' : 'Submit Review'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Reviews List */}
                    <div className="lg:col-span-2 space-y-6">
                        {loading ? (
                            <div className="flex justify-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                            </div>
                        ) : reviews.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
                                <p className="text-gray-500 text-lg">No reviews yet. Be the first to review!</p>
                            </div>
                        ) : (
                            reviews.map(review => (
                                <div key={review._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <FaUserCircle size={40} className="text-gray-300" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-dark text-lg">{review.customerName}</h3>
                                                    <div className="flex mt-1 mb-2">
                                                        {renderStars(review.rating)}
                                                    </div>
                                                </div>
                                                <span className="text-sm text-gray-400">
                                                    {new Date(review.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed italic">"{review.comment}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
