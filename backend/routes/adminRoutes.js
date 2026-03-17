const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Dummy admin login for simplicity
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // In a real app we would check the DB and hash passwords.
    // For this simple demo:
    if (username === 'admin' && password === 'admin123') {
        res.json({ token: 'dummy-jwt-token-for-admin', username: 'admin' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
