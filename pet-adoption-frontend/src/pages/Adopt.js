import React, { useState, useEffect } from "react";
import "./Adopt.css";

const petsData = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    age: "2 years",
    image: "https://source.unsplash.com/300x200/?dog",
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat",
    age: "1 year",
    image: "https://source.unsplash.com/300x200/?cat",
  },
  {
    id: 3,
    name: "Coco",
    type: "Rabbit",
    age: "6 months",
    image: "https://source.unsplash.com/300x200/?rabbit",
  },
];

function Adopt() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Simulating fetching from an API
    setPets(petsData);
  }, []);

  return (
    <div className="adopt-container">
      <h1>Meet Our Adorable Pets 🐾</h1>
      <div className="pets-list">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age}</p>
            <button className="btn">Adopt Me</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adopt;
