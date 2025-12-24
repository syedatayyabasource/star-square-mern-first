import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaArrowUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-premium" style={{ 
      backgroundColor: '#0d1b2a', 
      color: 'white', 
      paddingTop: '100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 1. Cinematic Animated Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        style={{ 
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '3px', background: 'linear-gradient(90deg, transparent, #f4c430, transparent)',
          boxShadow: '0px 0px 20px rgba(244, 196, 48, 0.8)',
          transformOrigin: 'center'
        }}
      ></motion.div>

      <div className="container">
        <div className="row g-5 text-start pb-5">
          
          {/* Brand & Vision Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-lg-5"
          >
            {/* Logo Replacement Text */}
            <div className="mb-4">
               <h2 className="fw-bold m-0" style={{ letterSpacing: '4px', color: '#f4c430' }}>
                 STAR OF THE SQUARE
               </h2>
               <small style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '6px' }}>SERVICES</small>
            </div>

            <p className="text-white-50 lh-lg mb-4" style={{ maxWidth: '420px', fontSize: '1rem' }}>
              Defining industrial excellence across Saudi Arabia. From elite hospitality to 
              precision logistics, we are architecting the future of corporate solutions 
              aligned with Vision 2030.
            </p>
            
            <div className="d-flex gap-3">
              {[
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaInstagram />, link: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ scale: 1.1, backgroundColor: '#f4c430', color: '#0d1b2a', boxShadow: '0 0 15px #f4c430' }}
                  href={social.link}
                  className="social-pill"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="col-lg-3 col-md-6 ps-lg-5"
          >
            <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#f4c430', letterSpacing: '2px' }}>Explore</h6>
            <ul className="list-unstyled">
              {[
                { name: 'Corporate Home', path: '/' },
                { name: 'Our Identity', path: '/about' },
                { name: 'Core Expertise', path: '/services' },
                { name: 'Connect', path: '/contact' }
              ].map((link, idx) => (
                <li className="mb-3" key={idx}>
                  <Link to={link.path} className="footer-link-custom">
                    <span className="link-dot"></span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- Updated Address Section --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-lg-4 col-md-6"
          >
            <div className="glass-card p-4 rounded-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#f4c430', letterSpacing: '1px' }}>Main Headquarters</h6>
              
              <div className="d-flex gap-3 mb-3">
                <FaMapMarkerAlt className="text-warning mt-1 flex-shrink-0" />
                <span className="small text-white-75">
                  King Abdulaziz Rd, Almadinah, <br />
                  Abqaiq 33241, Saudi Arabia
                </span>
              </div>

              <div className="d-flex gap-3 mb-3">
                <FaPhoneAlt className="text-warning mt-1 flex-shrink-0" />
                <span className="small text-white-75">(+966) 055 123 4567</span>
              </div>

              <div className="d-flex gap-3 mb-4">
                <FaEnvelope className="text-warning mt-1 flex-shrink-0" />
                <span className="small text-white-75">contactinfo@ssscont.com</span>
              </div>

              <Link to="/contact" className="btn-footer-gold w-100 fw-bold">
                SCHEDULE CONSULTATION
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-white-10 py-4 mt-2" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="small text-white-50 m-0">
                © {new Date().getFullYear()} <strong>STAR SQUARE SERVICES</strong>. Engineering Excellence.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
               <motion.button 
                 whileHover={{ y: -5 }}
                 onClick={scrollToTop}
                 className="back-to-top-btn"
               >
                 <FaArrowUp />
               </motion.button>
               <span className="small text-white-50 mx-2 hover-white">Privacy Policy</span>
               <span className="small text-white-50 mx-2 hover-white">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link-custom {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          align-items: center;
          font-size: 0.95rem;
        }
        .link-dot {
          width: 0px; height: 1px; background: #f4c430; margin-right: 0; transition: 0.4s;
        }
        .footer-link-custom:hover {
          color: #f4c430;
          padding-left: 5px;
        }
        .footer-link-custom:hover .link-dot {
          width: 15px; margin-right: 10px;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          transition: 0.4s;
        }
        .glass-card:hover {
          border-color: rgba(244, 196, 48, 0.3);
          background: rgba(255, 255, 255, 0.04);
        }
        .social-pill {
          width: 45px; height: 45px; borderRadius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; alignItems: center; justifyContent: center;
          color: white; textDecoration: none; transition: 0.4s;
        }
        .btn-footer-gold {
          background: #f4c430; color: #0d1b2a; border: none;
          padding: 12px; border-radius: 8px; font-size: 0.8rem;
          letter-spacing: 1px; transition: 0.3s; text-decoration: none;
          display: block; text-align: center;
        }
        .btn-footer-gold:hover {
          background: #fff; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .back-to-top-btn {
          width: 40px; height: 40px; border-radius: 50%; border: 1px solid #f4c430;
          background: transparent; color: #f4c430; transition: 0.4s;
        }
        .back-to-top-btn:hover {
          background: #f4c430; color: #0d1b2a;
        }
        .hover-white:hover { color: white; cursor: pointer; }
        .border-white-10 { border-color: rgba(255,255,255,0.1) !important; }
      `}</style>
    </footer>
  );
};

export default Footer;