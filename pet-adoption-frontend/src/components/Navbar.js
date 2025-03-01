import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🐾 Pet Adoption</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/adopt">Adopt</Link></li>
        <li><Link to="/my-adoptions">My Adoptions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
