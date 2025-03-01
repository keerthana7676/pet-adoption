import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import PetDetails from "./pages/PetDetails";
import AdoptionForm from "./pages/AdoptionForm";
import Success from "./pages/Success";
import MyAdoptions from "./pages/MyAdoptions";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/adopt/:id" element={<AdoptionForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/my-adoptions" element={<MyAdoptions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
