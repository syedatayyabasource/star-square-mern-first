import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="card shadow-sm border-0 p-4 text-center">
      <h5 className="fw-bold mb-3">Service Feedback</h5>
      <p className="text-muted small">How was your experience with Star Square?</p>
      <form>
        <div className="mb-3 fs-3">
          ⭐⭐⭐⭐⭐
        </div>
        <textarea className="form-control mb-3 shadow-sm" rows="3" placeholder="Share your thoughts..."></textarea>
        <button className="btn btn-gold w-100 fw-bold shadow-sm">Submit Review</button>
      </form>
    </div>
  );
};

export default FeedbackForm;