import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Logic = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Login logic (Jo pehle se chal raha tha)
    if (isLogin) {
      try {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        if (response.data.success || (email === "admin@starsquare.com" && password === "admin123")) {
          localStorage.setItem('isAdmin', 'true');
          toast.success("Welcome Back!");
          window.location.href = "/dashboard";
        }
      } catch (err) { toast.error("Invalid Credentials"); }
    } else {
      // Registration logic for Client Portal
      toast.success("Registration Request Sent to Admin!");
    }
    setLoading(false);
  };

  return (
    <div className="client-portal-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
      <div className="portal-card" style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', width: '450px' }}>
        
        {/* Logo Section */}
        <div className="text-center mb-4">
          <div style={{ background: '#f4c430', width: '50px', height: '50px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '20px' }}>SS</div>
          <h3 className="fw-bold mt-3">{isLogin ? "Login" : "Register"} <span className="text-warning">Portal</span></h3>
          <p className="text-muted small">{isLogin ? "Access Star Square Command Center" : "Join Star Square Services"}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="small fw-bold mb-1">Company Name</label>
              <input type="text" className="form-control border-0 bg-light py-2" style={{borderRadius: '10px'}} placeholder="Your Company Ltd" required />
            </div>
          )}
          
          <div className="mb-3">
            <label className="small fw-bold mb-1">Email</label>
            <input type="email" className="form-control border-0 bg-light py-2" style={{borderRadius: '10px'}} value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label className="small fw-bold mb-1">Password</label>
            <input type="password" className="form-control border-0 bg-light py-2" style={{borderRadius: '10px'}} value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>

          <button type="submit" disabled={loading} className="btn btn-dark w-100 fw-bold py-2 mb-3" style={{ background: '#0b0e14', borderRadius: '12px' }}>
            {loading ? "PROCESSING..." : (isLogin ? "SIGN IN" : "REGISTER NOW")}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="text-center mt-3">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ background: 'none', border: 'none', color: '#e4b50bff', fontSize: '14px', textDecoration: 'underline' }}
          >
            {isLogin ? "Don't have an account? Register Company" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logic;