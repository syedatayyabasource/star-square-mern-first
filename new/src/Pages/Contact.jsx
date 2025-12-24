import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import toast from 'react-hot-toast'; // Toast notifications ke liye

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Industrial Logistics',
    details: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Route Fixed: Match with backend 'app.post('/api/contact')'
      const response = await axios.post('http://localhost:5000/api/contact', {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.details
      });
      
      if (response.status === 200 || response.status === 201) {
        toast.success("✅ Inquiry Saved to MongoDB Atlas!");
        setFormData({ name: '', email: '', service: 'Industrial Logistics', details: '' });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("❌ Failed! Is your Backend Server running?");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { visible: { transition: { staggerChildren: 0.2 } } };

  return (
    <div className="contact-premium-wrapper" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', overflow: 'hidden' }}>
      {/* --- HERO SECTION --- */}
      <section className="contact-hero py-5 text-center" style={{ 
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)',
        color: 'white', borderRadius: '0 0 80px 80px', paddingTop: '80px', paddingBottom: '100px'
      }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="container">
          <span className="badge rounded-pill bg-warning text-dark px-3 py-2 mb-3 fw-bold">CONNECT WITH US</span>
          <h1 className="display-4 fw-bold mb-3">Get in Touch with <span style={{ color: '#f4c430' }}>Star Square</span></h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '650px' }}>
            Experience world-class hospitality and industrial management.
          </p>
        </motion.div>
      </section>

      {/* --- FORM SECTION --- */}
      <div className="container" style={{ marginTop: '-70px', paddingBottom: '80px' }}>
        <div className="row g-0 rounded-5 shadow-lg overflow-hidden border-0 mx-auto" style={{ background: 'white', maxWidth: '950px' }}>
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="col-lg-4 p-4 text-white d-flex flex-column justify-content-between" 
            style={{ background: '#0d1b2a' }}
          >
            <div>
              <h4 className="fw-bold mb-4">Headquarters</h4>
              <div className="d-flex align-items-start gap-3 mb-4">
                <FaMapMarkerAlt className="text-warning mt-1" />
                <span className="small opacity-75">King Abdulaziz Rd, Almadinah, Saudi Arabia</span>
              </div>
              <div className="d-flex align-items-start gap-3 mb-4">
                <FaPhoneAlt className="text-warning mt-1" />
                <span className="small opacity-75">(+966) 055 123 4567</span>
              </div>
            </div>
            <div className="social-links pt-4 border-top border-secondary d-flex gap-3">
               <FaLinkedin className="text-warning" /> <FaInstagram className="text-warning" />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <div className="col-lg-8 p-4 bg-white">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="fw-bold mb-3" style={{ color: '#0d1b2a' }}>Send a Message</h3>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6 text-start">
                  <label className="small fw-bold text-muted mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Tayyaba Zahra" required />
                </div>
                <div className="col-md-6 text-start">
                  <label className="small fw-bold text-muted mb-1">Work Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="tayyaba@starsquare.com" required />
                </div>
                <div className="col-12 text-start">
                   <label className="small fw-bold text-muted mb-1">Service</label>
                   <select name="service" value={formData.service} onChange={handleChange} className="form-select">
                      <option>Industrial Logistics</option>
                      <option>VIP Accommodation</option>
                      <option>Hospitality Management</option>
                   </select>
                </div>
                <div className="col-12 text-start">
                    <label className="small fw-bold text-muted mb-1">Details</label>
                    <textarea name="details" value={formData.details} onChange={handleChange} className="form-control" rows="3" required></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" disabled={loading} className="btn btn-dark px-5 py-2 rounded-pill fw-bold" style={{ background: '#0d1b2a' }}>
                    {loading ? "SENDING..." : "SEND INQUIRY"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;