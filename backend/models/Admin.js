const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // We'll keep it simple or hash it if needed
    role: { type: String, default: 'admin' }
});

module.exports = mongoose.model('Admin', adminSchema);
