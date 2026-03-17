const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get all orders (for admin)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 }).populate('items.menuItem');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get revenue stats
router.get('/stats', async (req, res) => {
    try {
        const orders = await Order.find();
        const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
        const totalOrders = orders.length;
        // Simple logic for daily revenue, could be enhanced with actual date filtering
        res.json({ totalOrders, totalRevenue });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new order (for customers)
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update order status (for admin)
router.patch('/:id/status', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, 
            { status: req.body.status }, 
            { new: true }
        );
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
