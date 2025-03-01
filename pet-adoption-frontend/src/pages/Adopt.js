import React from "react";
import { Link } from "react-router-dom";
import "./Adopt.css";

const pets = [
  { id: 1, name: "Buddy", type: "Dog", image: "/images/dog1.jpg" },
  { id: 2, name: "Whiskers", type: "Cat", image: "/images/cat1.jpeg" },
  { id: 3, name: "Max", type: "Dog", image: "/images/dog2.jpg" },
  { id: 4, name: "Luna", type: "Cat", image: "/images/cat2.jpg" },
];

function Adopt() {
  return (
    <div className="adopt-container">
      <h2>Find Your Perfect Pet</h2>
      <div className="pet-grid">
        {pets.map((pet) => (
          <Link key={pet.id} to={`/pet/${pet.id}`} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <button>View Details</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Adopt;
