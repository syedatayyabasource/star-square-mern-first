const mongoose = require('mongoose');

// User Schema design for Star Square Project
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Please provide a name"] 
    },
    email: { 
        type: String, 
        required: [true, "Please provide an email"], 
        unique: true,
        lowercase: true
    },
    role: { 
        type: String, 
        enum: ['student', 'admin', 'instructor'], 
        default: 'student' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('User', userSchema);