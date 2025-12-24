const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const apiController = require('./controllers/apiController');

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI || "mongodb+srv://admin:yourpassword@cluster0.abcde.mongodb.net/StarSquareDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ StarSquare DB Connected Successfully"))
  .catch(err => console.log("❌ DB Error: " + err.message));

// --- ROUTES CONNECTED TO CONTROLLER ---
app.get('/api/admin/profile', apiController.getProfile);
app.post('/api/admin/update', apiController.updateProfile);
app.post('/api/contact', apiController.submitContact);
app.post('/api/register', apiController.registerUser); // YAHAN REGISTER USE HOGA
app.post('/api/login', apiController.adminLogin);
app.get('/api/admin/stats', apiController.getStats);
app.get('/api/admin/inquiries', apiController.getAllInquiries);
app.delete('/api/admin/inquiry/:id', apiController.deleteInquiry);
app.put('/api/user/update-password', apiController.updateUserPassword);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));