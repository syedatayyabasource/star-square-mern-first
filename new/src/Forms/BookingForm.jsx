import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    service: '',
    date: '',
    company: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Booking Data:", booking);
    alert("Booking Submitted Successfully!");
  };

  return (
    <div className="card border-0 shadow-sm p-4 rounded-4 text-start bg-white">
      <h4 className="fw-bold mb-4" style={{ color: '#0d1b2a' }}>Service Booking</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small fw-bold">Select Service</label>
          <select className="form-select" onChange={(e) => setBooking({...booking, service: e.target.value})} required>
            <option value="">Choose...</option>
            <option value="Logistics">Logistics</option>
            <option value="Catering">Catering</option>
            <option value="Accommodation">Accommodation</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Company Name</label>
          <input type="text" className="form-control" onChange={(e) => setBooking({...booking, company: e.target.value})} required />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Booking Date</label>
          <input type="date" className="form-control" onChange={(e) => setBooking({...booking, date: e.target.value})} required />
        </div>
        <button type="submit" className="btn w-100 fw-bold" style={{ backgroundColor: '#0d1b2a', color: '#f4c430' }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;