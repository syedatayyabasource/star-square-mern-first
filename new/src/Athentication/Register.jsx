import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 card shadow-lg p-4 rounded-4 border-0 text-start">
          <h3 className="fw-bold mb-2">Create Account</h3>
          <p className="text-muted small mb-4">Join Star Square for premium corporate access.</p>
          <form>
            <input type="text" className="form-control mb-3" placeholder="Company Name" />
            <input type="email" className="form-control mb-3" placeholder="Work Email" />
            <input type="password" className="form-control mb-3" placeholder="Password" />
            <button className="btn btn-dark w-100 py-2 fw-bold mb-3">Register Now</button>
          </form>
          <p className="text-center small">Already have an account? <Link to="/login" className="text-warning fw-bold">Login</Link></p>
        </div>
      </div>
    </div>
  );
};
export default Register;