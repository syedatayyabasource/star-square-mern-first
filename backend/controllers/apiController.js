const mongoose = require('mongoose');

// Models (Schemas)
const Profile = mongoose.model('Profile', new mongoose.Schema({
  fullName: String, designation: String, email: String, contact: String
}));

const Contact = mongoose.model('Contact', new mongoose.Schema({
  name: String, email: String, service: String, message: String,
  date: { type: Date, default: Date.now }
}));

const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}));

// --- Logic Functions ---

exports.getProfile = async (req, res) => {
  try { const data = await Profile.findOne(); res.json(data || {}); } 
  catch (err) { res.status(500).json(err); }
};

exports.updateProfile = async (req, res) => {
  const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json({ message: "Profile Synced to MongoDB!", profile });
};

exports.submitContact = async (req, res) => {
  try {
    const newInquiry = new Contact(req.body);
    await newInquiry.save();
    res.status(200).json({ success: true, message: "✅ Inquiry sent successfully!" });
  } catch (error) { res.status(500).json({ success: false, message: error.message }); }
};
// Password update karne ka logic
exports.updateUserPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        const updatedUser = await User.findOneAndUpdate(
            { email: email }, 
            { password: newPassword }, 
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User nahi mila!" });
        }

        res.json({ success: true, message: "✅ Password successfully updated!", updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Fields required!" });
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ success: true, message: "✅ Registration Successful!" });
  } catch (err) { res.status(400).json({ message: err.code === 11000 ? "User already exists!" : err.message }); }
};

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;
  if(email === "admin@starsquare.com" && password === "admin123") { res.json({ success: true }); } 
  else { res.status(401).json({ success: false, message: "Invalid Credentials" }); }
};

exports.getStats = (req, res) => {
  res.json({ bookings: "1,284", fleet: "42 Units", uptime: "99.9%", staff: "86/90" });
};

exports.getAllInquiries = async (req, res) => {
  const inquiries = await Contact.find().sort({ date: -1 });
  res.json(inquiries);
};

exports.deleteInquiry = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Inquiry Deleted" });
};