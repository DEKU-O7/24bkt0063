//main component, routing
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Pets from "./Pets";
import Adoption from "./Adoption";
import Contact from "./Contact";
import Donation from "./Donation";
function App() {
  //styling
  const pageStyle = {
    fontFamily: "Arial",
    backgroundColor: "#eef2f3",
    minHeight: "100vh"
  };
  const navbarStyle = {
    backgroundColor: "#1f618d",
    padding: "15px",
    color: "white"
  };
  const linkStyle = {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  };
  //JSX,routing
  return (
    <BrowserRouter>
      <div style={pageStyle}>
        <div style={navbarStyle}>
          <h2>PetConnect</h2>
          <div>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/pets" style={linkStyle}>Pets</Link>
            <Link to="/adoption" style={linkStyle}>Adopt</Link>
            <Link to="/donation" style={linkStyle}>Donate</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/adoption" element={<Adoption pet="" />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;