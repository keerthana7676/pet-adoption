import React, { useEffect, useState } from "react";
import "./MyAdoptions.css";

function MyAdoptions() {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    // Get adoption requests from localStorage
    const storedRequests = JSON.parse(localStorage.getItem("adoptionRequests")) || [];
    setAdoptions(storedRequests);
  }, []);

  return (
    <div className="my-adoptions">
      <h2>My Adoption Requests</h2>
      {adoptions.length === 0 ? (
        <p>No adoption requests found.</p>
      ) : (
        <ul>
          {adoptions.map((request, index) => (
            <li key={index}>
              <strong>Pet ID:</strong> {request.petId} <br />
              <strong>Name:</strong> {request.name} <br />
              <strong>Email:</strong> {request.email} <br />
              <strong>Address:</strong> {request.address} <br />
              <strong>Reason:</strong> {request.reason}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyAdoptions;
