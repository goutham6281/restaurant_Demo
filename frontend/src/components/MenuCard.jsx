import React from 'react';
import { useCart } from '../context/CartContext';

const MenuCard = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <div className="card flex flex-col h-full group">
            <div className="relative overflow-hidden aspect-w-4 aspect-h-3">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover w-full h-48 transform group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                    <div className="absolute top-2 right-2 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full shadow-md z-1">
                        Best Seller
                    </div>
                )}
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">{item.name}</h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">₹{item.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                    {item.description}
                </p>
                
                <button 
                    onClick={() => addToCart(item)}
                    className="w-full btn-outline mt-auto flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
