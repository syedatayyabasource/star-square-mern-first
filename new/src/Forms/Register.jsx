import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registering User:", formData);
    
    try {
      // Jab aapki API ready ho jaye, bas yahan URL dalna hoga
      // const response = await axios.post('http://localhost:5000/api/register', formData);
      alert("Registration Successful! (Check Console for Data)");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="card border-0 shadow-sm p-4 rounded-4 text-start bg-white">
      <h4 className="fw-bold mb-4" style={{ color: '#0d1b2a' }}>Create Account</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small fw-bold">Full Name</label>
          <input type="text" name="username" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Email Address</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn w-100 fw-bold" style={{ backgroundColor: '#f4c430', color: '#0d1b2a' }}>
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;