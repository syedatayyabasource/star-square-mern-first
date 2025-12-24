import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const totalAmount = "5,400.00";

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Logic: Hum card details save nahi karte, sirf transaction confirmation bhejte hain
      console.log("Processing Payment for SAR", totalAmount);

      // Simulation: Backend ko batana ke payment confirm ho gayi hai
      // await axios.post('http://localhost:5000/api/payments/confirm', { amount: totalAmount, status: 'paid' });

      setTimeout(() => {
        alert(`✅ Payment of SAR ${totalAmount} Successful!\nTransaction ID: STR-${Math.floor(Math.random() * 1000000)}`);
        setLoading(false);
      }, 2000);
    } catch (error) {
      alert("❌ Payment Gateway Connection Error");
      setLoading(false);
    }
  };

  return (
    <div className="card shadow border-0 p-4">
      <h5 className="fw-bold mb-4" style={{ color: '#0d1b2a' }}>Secure Payment Info</h5>
      
      <div className="mb-3 bg-light p-3 rounded d-flex justify-content-between">
        <span className="fw-bold">Total Amount:</span>
        <span className="fw-bold text-success">SAR {totalAmount}</span>
      </div>

      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label className="form-label small fw-bold">Cardholder Name</label>
          <input type="text" className="form-control shadow-sm" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Card Number</label>
          <input type="text" className="form-control shadow-sm" placeholder="XXXX XXXX XXXX XXXX" required />
        </div>
        <div className="row">
          <div className="col-6">
            <label className="form-label small fw-bold">Expiry</label>
            <input type="text" className="form-control shadow-sm" placeholder="MM/YY" required />
          </div>
          <div className="col-6">
            <label className="form-label small fw-bold">CVV</label>
            <input type="password" size="3" className="form-control shadow-sm" placeholder="***" required />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-dark w-100 py-2 mt-4 shadow fw-bold"
          disabled={loading}
          style={{ backgroundColor: '#0d1b2a', color: '#f4c430' }}
        >
          {loading ? "⌛ Processing..." : "Pay with Mada / Visa"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;