import React from 'react';

const ServiceCard = ({ title, description, imagePath }) => {
  return (
    <div className="card glass-card border-0 h-100 text-start">
      <div className="overflow-hidden rounded-top-4">
        <img 
          src={imagePath} 
          className="card-img-top service-img" 
          alt={title} 
          style={{ height: '200px', objectFit: 'cover', transition: '0.5s' }}
        />
      </div>
      <div className="card-body p-4">
        <h5 className="fw-bold text-navy">{title}</h5>
        <p className="text-muted small">{description}</p>
        <button className="btn btn-outline-warning btn-sm fw-bold">Learn More</button>
      </div>
    </div>
  );
};

export default ServiceCard;