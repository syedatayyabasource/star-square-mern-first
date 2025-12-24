import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
// Aap apne logo image ka path yahan dein (e.g., import logoImg from '../assets/logo.png')
// Abhi ke liye main aapki image ka description use kar raha hoon.

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`navbar navbar-expand-lg sticky-top transition-all ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`} 
      style={{ 
        backgroundColor: scrolled ? 'rgba(13, 27, 42, 0.95)' : '#0d1b2a',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '2px solid #f4c430' : '1px solid rgba(255,255,255,0.1)',
        transition: '0.4s all ease-in-out'
      }}
    >
      <div className="container">
        {/* --- Logo + Brand Section --- */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link className="navbar-brand d-flex align-items-center" to="/" style={{ color: '#f4c430', textDecoration: 'none' }}>
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAk1BMVEVHcEz////z+vn////////////////Z7uv8/Pz8/f3///////////////////8oqJgYHIzuwBglKJDvwiY4rZ756LXl5/Hy+Pnxyk3xyEH++u301HP34aD88tTFxd9rba/I4eGk1s9Ks6WVlsRqvrOAgbk0N5eW0Mg/QpuEyL+ztNWmp81fuq1KTZ9RU6IFopGy3Na5R5vVAAAAGHRSTlMAjc5nJhRT/eLZcTtGVf////////////4TdbVbAAABq0lEQVQokV1T23ajMAw0aU6ApitfsQFzJxBCku7+/9et5NCmzbzA8XhGIyEY+8JHlFpEGn2wV7wn67QoIdR9WpP3X9Q+uS4iQCkxg0v3T+6P/cTjdu2sHZVo4HZzhy/u0M1KTRYQblEtdJybeGP3MKIMAkYhLAwGWftwThuYhBiJs/TsuekMH1Li3las0ipxRbJVi3MGTWPOz28kXMQEd6UagEbgPYiRhfNwThg7NkLZazgNaRAko3BHFk2ihRnFWxo6xqr9ZThFbPepplEpu6X59zdGjcG83OxYonAo6k5pxOzgxk/4euLDyfCYWTXPM9XCNCvQADqsinKOJLwAReHpiHRVVWVPUNQ+zIPIXS61fKKCCzcOyB8DRZXW+QMFocQJXZC8cGzlWEtdf1csS+qSx9gN74+MJbn2vzMN2E5Prjj4TMosqIJBXVE7vXkMnqVeB+NM5t7nWtbYDt8+GduXhdaoxTsYF+NhO8bE2xodkJW+LrSnnnVop3suUelRoXUJdZ2hTenib45WMysk+nnylUWd/FjNsNSZr4Bu+OxlqbffAWdQ/vwd/gPSFDHUfDpazgAAAABJRU5ErkJggg==" // Yahan apni image ka path lagayein
              alt="Star Square Logo"
              style={{ 
                height: '45px', 
                width: 'auto', 
                marginRight: '12px',
                filter: 'drop-shadow(0px 0px 5px rgba(244, 196, 48, 0.3))' 
              }} 
            />
            <div className="d-flex flex-column" style={{ lineHeight: '1.2' }}>
              <span className="fw-bold fs-4" style={{ letterSpacing: '2px' }}>STAR OF THE SQUARE</span>
              <small style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '3px' }}>SERVICES</small>
            </div>
          </Link>
        </motion.div>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {navLinks.map((link) => (
              <li className="nav-item position-relative px-2" key={link.path}>
                <Link 
                  className={`nav-link transition-all ${isActive(link.path) ? 'text-warning fw-bold' : 'text-white-50'}`} 
                  to={link.path}
                  style={{ fontSize: '0.95rem' }}
                >
                  {link.name}
                </Link>
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeNav"
                    className="position-absolute bottom-0 start-50 translate-middle-x"
                    style={{ width: '20px', height: '2px', backgroundColor: '#f4c430' }}
                  />
                )}
              </li>
            ))}
            
            <li className="nav-item ms-lg-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  className="btn btn-warning px-4 fw-bold rounded-pill shadow-sm" 
                  to="/login"
                  style={{ 
                    boxShadow: '0 4px 15px rgba(244, 196, 48, 0.3)',
                    fontSize: '0.85rem'
                  }}
                >
                  CLIENT PORTAL
                </Link>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          color: #f4c430 !important;
          transform: translateY(-1px);
        }
        .transition-all {
          transition: 0.3s all ease;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;