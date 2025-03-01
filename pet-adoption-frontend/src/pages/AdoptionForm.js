import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./AdoptionForm.css";

function AdoptionForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption Request Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="adoption-form">
      {submitted ? (
        <h2>Thank you for your adoption request! We will contact you soon. 🐾</h2>
      ) : (
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
      )}
    </div>
  );
}

export default AdoptionForm;
