import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const { cartItems, getCartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: '', phone: '', address: '', deliveryOption: 'Delivery', paymentMethod: 'Cash on Delivery'
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.e.preventDefault();
        setLoading(true);
        try {
            const orderData = {
                customerInfo: {
                    name: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                    deliveryOption: formData.deliveryOption
                },
                items: cartItems.map(item => ({
                    menuItem: item._id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                totalAmount: getCartTotal(),
                paymentMethod: formData.paymentMethod
            };

            await axios.post('http://localhost:5000/api/orders', orderData);
            clearCart();
            alert('Order placed successfully!');
            navigate('/');
        } catch (err) {
            console.error('Checkout failed', err);
            alert('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-12 flex flex-col items-center">
                <div className="bg-gray-100 rounded-full p-8 mb-6 text-gray-400">
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 max-w-md text-center">Looks like you haven't added anything to your cart yet. Let's fix that!</p>
                <Link to="/menu" className="btn-primary">Explore Menu</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-dark mb-8 drop-shadow-sm">Secure Checkout</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-dark flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                Customer Details
                            </h2>
                            <form id="checkout-form" onSubmit={(e) => { e.preventDefault(); handleSubmit({e}); }} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" placeholder="Rahul Sharma" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" placeholder="+91 9876543210" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address (Or instructions for Takeaway)</label>
                                    <textarea required rows="3" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" placeholder="Apt 101, Main Block..."></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Order Type</label>
                                        <select name="deliveryOption" value={formData.deliveryOption} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-white">
                                            <option>Delivery</option>
                                            <option>Takeaway</option>
                                            <option>Dine-in</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                                        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary bg-white">
                                            <option>Cash on Delivery</option>
                                            <option>UPI</option>
                                            <option>Credit/Debit Card</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-dark">Order Summary</h2>
                            <div className="max-h-64 overflow-y-auto pr-2 mb-4 space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item._id} className="flex justify-between items-center group">
                                        <div className="flex-1">
                                            <h4 className="text-sm font-semibold text-dark truncate pr-2">{item.name}</h4>
                                            <div className="flex items-center mt-1 space-x-2">
                                                <button onClick={() => updateQuantity(item._id, -1)} className="w-6 h-6 rounded bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200">-</button>
                                                <span className="text-sm w-4 text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item._id, 1)} className="w-6 h-6 rounded bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200">+</button>
                                            </div>
                                        </div>
                                        <div className="text-right ml-2 flex flex-col items-end">
                                            <span className="font-semibold text-primary">₹{item.price * item.quantity}</span>
                                            <button onClick={() => removeFromCart(item._id)} className="text-xs text-red-400 hover:text-red-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Subtotal</span>
                                    <span>₹{getCartTotal()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Taxes & Fees (5%)</span>
                                    <span>₹{Math.round(getCartTotal() * 0.05)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Delivery Fee</span>
                                    <span>{formData.deliveryOption === 'Delivery' ? '₹40' : 'Free'}</span>
                                </div>
                                <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg text-dark">
                                    <span>Total</span>
                                    <span>₹{getCartTotal() + Math.round(getCartTotal() * 0.05) + (formData.deliveryOption === 'Delivery' ? 40 : 0)}</span>
                                </div>
                            </div>
                            
                            <button 
                                form="checkout-form" 
                                type="submit" 
                                disabled={loading}
                                className={`w-full mt-6 py-3 rounded-lg text-white font-bold text-lg transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-red-800 shadow-md hover:shadow-lg'}`}
                            >
                                {loading ? 'Processing...' : 'Place Order'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
