const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Inquiry = require('../models/Inquiry');

// --- ADMIN LOGIN ROUTE (Extra for Dashboard Connection) ---
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Ma'am ko dikhane ke liye database se user check karna
        if (email === "admin@starsquare.com" && password === "admin123") {
            res.status(200).json({ success: true, message: "Admin Verified" });
        } else {
            res.status(401).json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --- USER ROUTES (4) ---
router.post('/users', async (req, res) => { // 1. Create User
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) { res.status(400).json({ error: error.message }); }
});

router.get('/users', async (req, res) => { // 2. Get All Users
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

router.put('/users/:id', async (req, res) => { // 3. Update User
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated);
    } catch (error) { res.status(400).json({ error: error.message }); }
});

router.delete('/users/:id', async (req, res) => { // 4. Delete User
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({msg: "User Deleted Successfully"});
    } catch (error) { res.status(400).json({ error: error.message }); }
});

// --- INQUIRY ROUTES (4) ---

router.post('/inquiries', async (req, res) => { // 5. Create Inquiry
    try {
        const newInq = new Inquiry(req.body);
        await newInq.save();
        res.status(201).json(newInq);
    } catch (error) { res.status(400).json({ error: error.message }); }
});

router.get('/inquiries', async (req, res) => { // 6. Get All Inquiries
    try {
        const inqs = await Inquiry.find().populate('user');
        res.json(inqs);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

router.put('/inquiries/:id', async (req, res) => { // 7. Update Status
    try {
        const updated = await Inquiry.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated);
    } catch (error) { res.status(400).json({ error: error.message }); }
});

router.delete('/inquiries/:id', async (req, res) => { // 8. Delete Inquiry
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.json({msg: "Inquiry Deleted From Atlas"});
    } catch (error) { res.status(400).json({ error: error.message }); }
});

module.exports = router;               