const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerInfo: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        deliveryOption: { type: String, enum: ['Delivery', 'Takeaway', 'Dine-in'], required: true }
    },
    items: [{
        menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['Cash on Delivery', 'UPI', 'Credit/Debit Card'], default: 'Cash on Delivery' },
    status: { type: String, enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
