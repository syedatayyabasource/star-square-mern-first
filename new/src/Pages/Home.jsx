import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  return (
    <div className="home-main-wrapper" style={{ width: '100%', margin: '0', padding: '0', overflowX: 'hidden', backgroundColor: '#fdfdfd' }}>
      
      {/* --- 1. PREMIUM HERO SECTION --- */}
      <section className="hero-banner d-flex align-items-center" style={{
        backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.85), rgba(5, 7, 10, 0.75)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100vw',
        color: 'white',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <div className="container text-center text-md-start">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            
            <motion.h1 variants={fadeInUp} className="display-1 fw-bold mb-3">
              <span style={{ 
                display: 'block', 
                fontSize: '0.4em', 
                color: '#d4af37', // Platinum Gold
                textTransform: 'uppercase',
                letterSpacing: '6px',
                marginBottom: '5px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Welcome To
              </span>
              <span style={{ 
                color: '#FFFFFF', 
                textShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', 
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: 'Cinzel, serif'
              }}>
                STAR OF THE SQUARE
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="lead mb-5 col-md-7 fs-4 opacity-75" style={{ fontWeight: '300' }}>
              Redefining premium corporate infrastructure and elite logistics 
              management across the <span style={{ color: '#d4af37', fontWeight: '600' }}>Kingdom of Saudi Arabia</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="d-flex gap-3 justify-content-center justify-content-md-start">
              <Link to="/services" className="btn btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg" style={{ backgroundColor: '#d4af37', border: 'none', color: '#000' }}>
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                Contact With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4 opacity-50"
        >
          <div style={{ width: '2px', height: '50px', background: '#d4af37' }}></div>
        </motion.div>
      </section>

      {/* --- 2. UNIQUE STATS SECTION (10+ Years Experience Updated) --- */}
      <section className="py-5" style={{ marginTop: '-100px', position: 'relative', zIndex: '10' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="row g-4 justify-content-center"
          >
            {[
              { label: "Years Experience", value: "10+", icon: "🏆" }, // UPDATED TO 10+
              { label: "Corporate Clients", value: "500+", icon: "💼" },
              { label: "Expert Support", value: "24/7", icon: "🛡️" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="col-md-4">
                <div className="glass-card p-5 text-center h-100 transition-all shadow-lg" 
                     style={{ 
                       background: 'rgba(255, 255, 255, 0.98)', 
                       backdropFilter: 'blur(15px)',
                       borderRadius: '30px',
                       borderBottom: '6px solid #d4af37'
                     }}>
                  <div className="fs-1 mb-3">{stat.icon}</div>
                  <h2 style={{ color: '#05070a' }} className="fw-bold display-4 mb-1">{stat.value}</h2>
                  <p className="text-muted fw-bold m-0 text-uppercase small" style={{ letterSpacing: '2px' }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. VISION 2030 SECTION --- */}
      <section className="py-5 my-5 container">
        <div className="row align-items-center g-5">
          <motion.div 
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6 text-start"
          >
            <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Vision 2030 <br/><span style={{ color: '#d4af37' }}>Aligned</span>
            </h2>
            <p className="text-muted fs-5 lh-lg">
              We take pride in contributing to the Kingdom's growth by providing scalable 
              and innovative solutions for the industrial and corporate sectors. Our commitment 
              to excellence ensures that every partner achieves their maximum potential.
            </p>
            <div className="mt-4">
              {['Premium Logistics', 'Corporate Hospitality', 'Infrastructure Development'].map((item, i) => (
                <div key={i} className="d-flex align-items-center mb-3">
                  <div style={{ width: '25px', height: '2px', background: '#d4af37', marginRight: '15px' }}></div>
                  <span className="fs-5 fw-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="col-lg-6"
          >
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', width: '100%', height: '100%', 
                border: '2px solid #d4af37', top: '20px', left: '20px', 
                borderRadius: '40px', zIndex: '-1' 
              }}></div>
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070" 
                alt="Corporate Excellence" 
                className="img-fluid rounded-5 shadow-2xl" 
                style={{ borderRadius: '40px' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .transition-all { transition: all 0.4s ease; }
        .glass-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15) !important; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
      `}</style>
    </div>
  );
};

export default Home;