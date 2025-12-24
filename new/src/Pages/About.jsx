import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-premium-wrap" style={{ backgroundColor: '#ffffff', overflow: 'hidden', padding: '100px 0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* --- Left Side: Architectural Video Display (Animated) --- */}
          <div className="col-lg-6">
            <motion.div 
              // Container ki entrance animation
              initial={{ opacity: 0, x: -80, scale: 0.9 }} 
              whileInView={{ opacity: 1, x: 0, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="position-relative"
            >
              <div className="video-mask-container shadow-2xl">
                <motion.video 
                  // Video ke andar ka zoom-out effect
                  initial={{ scale: 1.4, filter: "brightness(0) grayscale(100%)" }}
                  whileInView={{ scale: 1, filter: "brightness(0.9) grayscale(15%)" }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="hero-video-element"
                  poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                >
                  <source 
                    src="https://assets.mixkit.co/videos/preview/mixkit-business-people-shaking-hands-in-a-modern-office-4333-large.mp4" 
                    type="video/mp4" 
                  />
                </motion.video>
                
                {/* Glass overlay with fade-in */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="glass-overlay"
                ></motion.div>
              </div>

              {/* Floating Experience Card Animation */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 1, -1, 0] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="experience-float-card shadow-lg"
              >
                <h2 className="m-0 gold-text fw-bold">10+</h2>
                <p className="m-0 text-uppercase fw-bold small">Years of Legacy</p>
              </motion.div>

              <div className="gold-abstract-shape"></div>
            </motion.div>
          </div>

          {/* --- Right Side: High-End Content --- */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="ps-lg-5"
            >
            <h2 className="display-4 fw-bold mb-4" style={{ color: '#0d1b2a', fontFamily: 'Cinzel, serif', lineHeight: '1.2' }}>
  Where Strategy <br />
  Meets <span className="gold-text-stroke">Excellence</span> <br />
  <div style={{ fontSize: '1.2rem', color: '#010105ff', letterSpacing: '5px', marginTop: '15px' }}>
    A DECADE OF ELITE SERVICE
  </div>
</h2>
              <p className="lead text-muted mb-5" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                Star of the square Services isn't just a provider; we are your strategic partner in growth. 
                For a decade, we’ve redefined Saudi Arabia’s industrial landscape through 
                precision logistics and elite hospitality management.
              </p>
              
              <div className="row g-4 mb-5">
                <div className="col-sm-6">
                  <div className="info-box-luxury">
                    <div className="icon-wrap">🛡️</div>
                    <h5 className="fw-bold">500+ Clients</h5>
                    <p className="small text-muted mb-0">Trusted by the Kingdom’s largest corporate sectors.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-box-luxury">
                    <div className="icon-wrap">🌍</div>
                    <h5 className="fw-bold">Vision 2030</h5>
                    <p className="small text-muted mb-0">Perfectly aligned with national growth objectives.</p>
                  </div>
                </div>
              </div>

              <button className="btn-luxury-royal">
                <span>VIEW OUR CHARTER</span>
                <div className="btn-hover-bg"></div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* --- NEW SECTION: Our Corporate Story Tab --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-5 pt-5 border-top"
        >
          <div className="story-tab-card shadow-lg p-5 rounded-5" style={{ background: '#fcfcfc', border: '1px solid #f1f1f1' }}>
            <div className="row align-items-center">
              <div className="col-md-3 border-end text-center">
                <h3 className="gold-text fw-bold mb-0">OUR</h3>
                <h2 className="fw-bold" style={{ color: '#0d1b2a', letterSpacing: '2px' }}>STORY</h2>
              </div>
              <div className="col-md-9 ps-md-5">
                <p className="lead text-dark fw-bold mb-2">A Journey of Trust & Innovation</p>
                <p className="text-muted m-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                  From our humble beginnings in 2015, Star Square Services was built on the foundation of 
                  integrity and relentless pursuit of perfection. What started as a small logistical 
                  operation has now blossomed into a premier corporate solution provider, setting 
                  gold standards across Saudi Arabia's industrial corridors.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap');

        .about-premium-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }
        .gold-text { color: #d4af37; }
        .gold-text-stroke { color: transparent; -webkit-text-stroke: 1px #d4af37; }

        .video-mask-container {
          position: relative; z-index: 5; height: 550px;
          border-radius: 60px 5px 60px 5px; overflow: hidden; background: #0d1b2a;
        }
        .hero-video-element { width: 100%; height: 100%; object-fit: cover; }
        .glass-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to top, rgba(13, 27, 42, 0.4), transparent);
        }

        .experience-float-card {
          position: absolute; bottom: 40px; right: -30px; z-index: 10;
          background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(15px);
          padding: 30px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-left: 5px solid #d4af37; text-align: center;
        }

        .gold-abstract-shape {
          position: absolute; top: -30px; left: -30px; width: 150px; height: 150px;
          background: #fdf8e6; border-radius: 30px; z-index: 1;
        }

        .info-box-luxury {
          padding: 25px; border-radius: 20px; background: #f8f9fa;
          transition: 0.4s ease; border: 1px solid transparent;
        }
        .info-box-luxury:hover {
          background: #fff; border-color: #d4af37; transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .icon-wrap { font-size: 1.5rem; margin-bottom: 15px; }

        .btn-luxury-royal {
          position: relative; background: #0d1b2a; color: #fff; border: none;
          padding: 20px 50px; font-weight: 700; letter-spacing: 2px;
          font-size: 12px; border-radius: 5px; overflow: hidden; transition: 0.4s; z-index: 1;
        }
        .btn-luxury-royal span { position: relative; z-index: 3; }
        .btn-luxury-royal:hover { color: #0d1b2a; }
        .btn-hover-bg {
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: #d4af37; transition: 0.4s; z-index: 2;
        }
        .btn-luxury-royal:hover .btn-hover-bg { left: 0; }

        .story-tab-card { transition: 0.3s; }
        .story-tab-card:hover { transform: scale(1.02); background: #ffffff !important; }

        @media (max-width: 992px) {
          .video-mask-container { height: 400px; }
          .experience-float-card { right: 10px; bottom: 10px; padding: 15px; }
          .border-end { border-end: none !important; border-bottom: 1px solid #ddd; padding-bottom: 20px; margin-bottom: 20px; }
        }
      `}</style>
    </div>
  );
};

export default About;