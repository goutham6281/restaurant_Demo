import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaBoxOpen, FaDollarSign, FaUsers, FaChartLine, FaSignOutAlt, FaRedo } from 'react-icons/fa';

const Dashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({ totalOrders: 0, totalRevenue: 0 });
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Protect route
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin/login');
            return;
        }
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [statsRes, ordersRes] = await Promise.all([
                axios.get('http://localhost:5000/api/orders/stats'),
                axios.get('http://localhost:5000/api/orders')
            ]);
            setStats(statsRes.data);
            setOrders(ordersRes.data);
        } catch (err) {
            console.error('Error fetching admin data', err);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.patch(`http://localhost:5000/api/orders/${orderId}/status`, { status: newStatus });
            fetchData(); // Refresh to get updated list
        } catch (err) {
            console.error('Update failed', err);
            alert('Could not update status');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Preparing': return 'bg-blue-100 text-blue-800';
            case 'Out for Delivery': return 'bg-orange-100 text-orange-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center bg-gray-50"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-3xl font-bold text-dark">Admin Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage orders, menu, and view analytics</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <button onClick={fetchData} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
                            <FaRedo /> Refresh
                        </button>
                        <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                            <FaSignOutAlt /> Logout
                        </button>
                    </div>
                </div>

                {/* Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl">
                            <FaBoxOpen />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Orders</p>
                            <h3 className="text-2xl font-bold text-dark">{stats.totalOrders}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-2xl">
                            <FaDollarSign />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
                            <h3 className="text-2xl font-bold text-dark">₹{stats.totalRevenue.toLocaleString()}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-2xl">
                            <FaUsers />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Customers</p>
                            {/* Simple unique customer estimation from orders array */}
                            <h3 className="text-2xl font-bold text-dark">{new Set(orders.map(o => o.customerInfo.phone)).size}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-2xl">
                            <FaChartLine />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Avg Order Value</p>
                            <h3 className="text-2xl font-bold text-dark">
                                ₹{stats.totalOrders > 0 ? Math.round(stats.totalRevenue / stats.totalOrders) : 0}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Recent Orders Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h2 className="text-lg font-bold text-dark">Recent Orders</h2>
                        <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">{orders.length} Orders</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 text-sm text-gray-500">
                                    <th className="px-6 py-4 font-medium">Order ID / Date</th>
                                    <th className="px-6 py-4 font-medium">Customer</th>
                                    <th className="px-6 py-4 font-medium">Items</th>
                                    <th className="px-6 py-4 font-medium">Total</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {orders.length === 0 ? (
                                    <tr><td colSpan="6" className="px-6 py-8 text-center text-gray-500">No orders found.</td></tr>
                                ) : (
                                    orders.map(order => (
                                        <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-mono text-dark font-medium">#{order._id.slice(-6).toUpperCase()}</div>
                                                <div className="text-xs text-gray-500 mt-1">{new Date(order.createdAt).toLocaleString()}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-dark">{order.customerInfo.name}</div>
                                                <div className="text-xs text-gray-500 mt-1">{order.customerInfo.phone} ({order.customerInfo.deliveryOption})</div>
                                            </td>
                                            <td className="px-6 py-4 max-w-xs truncate text-sm text-gray-600">
                                                {order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-primary">₹{order.totalAmount}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <select 
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary focus:border-primary block p-2 ml-auto"
                                                    value={order.status}
                                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Preparing">Preparing</option>
                                                    <option value="Out for Delivery">Out for Delivery</option>
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Add Menu Item Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-dark mb-4">Add Menu Item</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const newItem = Object.fromEntries(formData.entries());
                        newItem.price = Number(newItem.price);
                        try {
                            await axios.post('http://localhost:5000/api/menu', newItem);
                            alert('Menu item added successfully!');
                            e.target.reset();
                        } catch(err) {
                            alert('Failed to add item');
                        }
                    }}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                            <input required type="text" name="name" className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                            <input required type="number" name="price" className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <input required type="text" name="category" placeholder="e.g. Biryani" className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input required type="url" name="image" placeholder="https://example.com/image.jpg" className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea required rows="2" name="description" className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-red-800 transition-colors">Add Item</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
