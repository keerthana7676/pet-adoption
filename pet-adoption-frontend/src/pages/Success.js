import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

function Success() {
  return (
    <div className="success-container">
      <h2>🎉 Adoption Request Submitted! 🎉</h2>
      <p>We have received your request. Our team will contact you soon to proceed with the adoption process.</p>
      <Link to="/" className="home-btn">Back to Home</Link>
    </div>
  );
}

export default Success;
