import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return <h1>Welcome to Pet Adoption</h1>;
}

function Adopt() {
  return <h1>Available Pets for Adoption</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
