import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: 'Tayyaba Zahra',
    designation: 'Administrator / COO',
    email: 'admin@starsquare.com',
    contact: '+971 50 123 4567'
  });

  const [loading, setLoading] = useState(false);

  // 1. Backend se purana data lana (GET Route)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/profile');
        if (res.data) setFormData(res.data);
      } catch (err) {
        console.log("Using default profile data");
      }
    };
    fetchProfile();
  }, []);

  // 2. Data update karna (POST/PUT Route)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Aapka backend URL (Deployment ke baad ye Render ka URL hoga)
      await axios.post('http://localhost:5000/api/admin/update', formData);
      toast.success("Profile Synced to Cloud Database!");
    } catch (err) {
      toast.error("Database connection failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-6">
        <label className="form-label small fw-bold text-muted">FULL NAME</label>
        <input type="text" name="fullName" className="form-control border-0 bg-light py-2" value={formData.fullName} onChange={handleChange} />
      </div>
      <div className="col-md-6">
        <label className="form-label small fw-bold text-muted">DESIGNATION</label>
        <input type="text" name="designation" className="form-control border-0 bg-light py-2" value={formData.designation} onChange={handleChange} />
      </div>
      <div className="col-md-6">
        <label className="form-label small fw-bold text-muted">CORPORATE EMAIL</label>
        <input type="email" name="email" className="form-control border-0 bg-light py-2" value={formData.email} onChange={handleChange} />
      </div>
      <div className="col-md-6">
        <label className="form-label small fw-bold text-muted">SECURE CONTACT</label>
        <input type="text" name="contact" className="form-control border-0 bg-light py-2" value={formData.contact} onChange={handleChange} />
      </div>
      <div className="col-12 mt-4">
        <button type="submit" disabled={loading} className="btn btn-warning w-100 fw-800 py-2 shadow-sm">
          {loading ? "SAVING TO ATLAS..." : "UPDATE IDENTITY PROFILE"}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;