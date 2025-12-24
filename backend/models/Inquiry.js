const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    message: { 
        type: String, 
        required: [true, "Please add a message"] 
    },
    status: { 
        type: String, 
        enum: ['pending', 'resolved'], 
        default: 'pending' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Inquiry', inquirySchema);