import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaUtensils } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { getCartCount } = useCart();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-primary text-white p-2 rounded-full transform group-hover:rotate-12 transition-transform">
                                <FaUtensils size={24} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-primary mb-0 leading-tight">Flavours Of Mankal</h1>
                                <span className="text-xs text-secondary font-semibold">Authentic Indian Flavours</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-secondary ${
                                    isActive(link.path) ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-dark'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="relative">
                            <Link to="/checkout" className="text-dark hover:text-primary transition-colors">
                                <FaShoppingCart size={24} />
                                <span className="absolute -top-2 -right-2 bg-accent text-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                                    {getCartCount()}
                                </span>
                            </Link>
                        </div>
                        
                        <Link to="/menu" className="btn-primary ml-4">
                            Order Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <div className="relative">
                            <Link to="/checkout" className="text-dark hover:text-primary transition-colors">
                                <FaShoppingCart size={24} />
                                <span className="absolute -top-2 -right-2 bg-accent text-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                                    0
                                </span>
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-dark hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
                    <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive(link.path) ? 'bg-red-50 text-primary' : 'text-dark hover:bg-gray-50'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/menu" onClick={() => setIsOpen(false)} className="btn-primary text-center mt-4">
                            Order Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
