import React from "react";
import { useParams, Link } from "react-router-dom";
import "./PetDetails.css";

const petData = {
  1: { name: "Buddy", type: "Dog", age: "2 years", breed: "Labrador", image: "/images/dog1.jpg", description: "Friendly and energetic, loves to play!" },
  2: { name: "Whiskers", type: "Cat", age: "1 year", breed: "Siamese", image: "/images/cat1.jpg", description: "Curious and affectionate, loves cuddles!" },
  3: { name: "Max", type: "Dog", age: "3 years", breed: "Golden Retriever", image: "/images/dog2.jpg", description: "Gentle and intelligent, great with kids!" },
  4: { name: "Luna", type: "Cat", age: "6 months", breed: "Persian", image: "/images/cat2.jpg", description: "Playful and loving, enjoys attention!" },
};

function PetDetails() {
  const { id } = useParams();
  const pet = petData[id];

  if (!pet) {
    return <h2>Pet not found!</h2>;
  }

  return (
    <div className="pet-details">
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p><strong>Type:</strong> {pet.type}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p>{pet.description}</p>
      <Link to={`/adopt/${id}`} className="adopt-btn">Adopt {pet.name}</Link>
    </div>
  );
}

export default PetDetails;
