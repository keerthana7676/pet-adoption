import React from "react";
import "./Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Find Your Perfect Pet Companion 🐶🐱</h1>
        <p>Adopt a pet and give them a forever home!</p>
        <a href="/adopt" className="btn">Browse Pets</a>
      </div>
    </div>
  );
}

export default Home;
