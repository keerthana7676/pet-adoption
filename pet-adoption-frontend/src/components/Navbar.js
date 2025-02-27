import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Styling for the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🐾 Pet Adoption</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/adopt">Adopt</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
