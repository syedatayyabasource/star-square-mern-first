import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const services = [
    { 
        id: 1, 
        title: "VIP Accommodation", 
        category: "Hospitality",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", 
        desc: "Luxury housing solutions and premium stay management for corporate executives.",
        icon: "🏨"
    },
    { 
        id: 2, 
        title: "Transport Management", 
        category: "Logistics",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800", 
        desc: "End-to-end fleet management and executive transport services across Saudi Arabia.",
        icon: "🚍"
    },
    { 
        id: 3, 
        title: "Office Employee Car", 
        category: "Logistics",
        img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800", 
        desc: "Reliable daily staff commute with professional drivers and high safety standards.",
        icon: "🚗"
    },
    { 
        id: 4, 
        title: "Premium Arabic Foods", 
        category: "Catering",
        img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600", 
        desc: "Offering a diverse range of authentic Middle Eastern cuisines and international dishes for corporate gatherings.",
        icon: "🥘"
    },
    { 
        id: 5,
        title: "Arabic Food: Kabsa", 
        category: "Catering",
        img: "https://thumbs.dreamstime.com/b/delicious-saudi-arabian-kabsa-rice-dish-grilled-chicken-nuts-raisins-served-communal-platter-arabic-coffee-large-367661293.jpg", 
        desc: "Traditional Saudi Kabsa, the heart of Arabian hospitality for corporate events.",
        icon: "🍛"
    },
    { 
        id: 6, 
        title: "Dessert: Kunafa", 
        category: "Catering",
        img: "https://assets.epicurious.com/photos/6238988852ef580c24629734/master/pass/Kunafa.jpg", 
        desc: "Golden-brown Kunafa with cheese and rose syrup, a perfect end to corporate meals.",
        icon: "🥮"
    },
    { 
        id: 7, 
        title: "Filipino Food", 
        category: "Catering",
        img: "https://www.shutterstock.com/image-photo/variety-filipino-food-dishes-600w-2108970746.jpg", 
        desc: "Traditional Filipino dishes like Adobo and Sinigang for a diverse workforce.",
        icon: "🍲"
    },
    { 
        id: 8, 
        title: "Industrial Logistics", 
        category: "Logistics",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", 
        desc: "Heavy machinery and equipment transport for large industrial projects.",
        icon: "🏗️"
    },
    { 
        id: 9, 
        title: "Event Hospitality", 
        category: "Hospitality",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800", 
        desc: "Specialized event management and VIP hosting services for corporate summits.",
        icon: "✨"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-vh-100" style={{ paddingTop: '110px' }}>
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge bg-warning-subtle text-warning px-3 py-2 mb-2 rounded-pill fw-bold border border-warning">
            STAR OF THE SQUARE PORTAL
          </motion.div>
          <h2 className="display-5 fw-bold" style={{ color: '#0d1b2a' }}>Corporate Service Solutions</h2>
          <div className="mx-auto mt-2" style={{ width: '40px', height: '3px', background: '#f4c430' }}></div>
        </div>

        {/* --- Expert Search & Filter UI --- */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="p-3 bg-light rounded-4 shadow-sm d-flex flex-column flex-md-row gap-3 align-items-center border">
              <div className="position-relative flex-grow-1 w-100">
                <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                <input 
                  type="text" 
                  className="form-control border-0 ps-5 py-2 shadow-none rounded-3" 
                  placeholder="Search Mandi, Kunafa, Car or Filipino food..." 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="d-flex gap-2 flex-wrap justify-content-center">
                {["All", "Hospitality", "Logistics", "Catering"].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`btn btn-sm px-4 rounded-pill fw-bold transition-all ${activeCategory === cat ? 'btn-warning shadow' : 'bg-white text-muted border'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Reusable Card Components Grid --- */}
        <motion.div layout className="row g-4 pb-5">
          <AnimatePresence mode='popLayout'>
            {filteredServices.map((s) => (
              <motion.div 
                layout
                key={s.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="col-lg-4 col-md-6"
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden service-card bg-white border">
                  <div className="position-relative" style={{ height: '210px' }}>
                    <img src={s.img} className="w-100 h-100" style={{ objectFit: 'cover' }} alt={s.title} />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-bold" style={{ fontSize: '10px' }}>
                        {s.icon} {s.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-4 text-start">
                    <h6 className="fw-bold mb-2" style={{ color: '#0d1b2a' }}>{s.title}</h6>
                    <p className="text-muted mb-4 small" style={{ minHeight: '40px' }}>{s.desc}</p>
                    <Link to="/contact" className="text-warning fw-bold text-decoration-none d-flex align-items-center gap-2 small">
                     <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-5 w-100">
              <h5 className="text-muted">No services found matching your search.</h5>
            </div>
          )}
        </motion.div>
      </div>

      <style>{`
        .service-card { transition: all 0.3s ease; }
        .service-card:hover { 
          transform: translateY(-8px); 
          box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
          border-color: #f4c430 !important;
        }
      `}</style>
    </div>
  );
};

export default Services;