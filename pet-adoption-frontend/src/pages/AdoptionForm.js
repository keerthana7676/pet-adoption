import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AdoptionForm.css";

function AdoptionForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption Request Submitted:", formData);
    
    // Redirect to success page after submission
    navigate("/success");
  };

  return (
    <div className="adoption-form">
      <form onSubmit={handleSubmit}>
        <h2>Adopt a Pet</h2>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required />

        <label>Reason for Adoption</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default AdoptionForm;
