import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 service-card">
        <div style={{ overflow: 'hidden' }}>
          <img 
            src={image} 
            className="card-img-top" 
            alt={title} 
            style={{ height: '220px', objectFit: 'cover', transition: '0.5s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        <div className="card-body p-4">
          <h5 className="fw-bold" style={{ color: '#0d1b2a' }}>{title}</h5>
          <p className="text-muted small">{description}</p>
          <button className="btn btn-gold btn-sm px-4">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;