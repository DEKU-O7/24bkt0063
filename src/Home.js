//functional component 
import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home from "./images/home.png";
function Home() {
  // useState,hooks
  const [message, setMessage] = useState("");
  // useEffect,hooks
  useEffect(() => {
    setMessage(
      "Find your perfect furry companion today. At PetConnect, we connect loving families with pets who are looking for a forever home. Browse through adorable animals, learn about them, and take the first step toward bringing home a loyal friend."
    );
  }, []);
  //styling
  const container = {
    textAlign: "center",
    padding: "50px 20px"
  };
  const Card1 = {
    background: "linear-gradient(135deg, #ffffff, #f0f4f8)",
    padding: "50px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    Width: "900px",
    margin: "auto"
  };
  const buttonStyle = {
    marginTop: "25px",
    padding: "12px 25px",
    backgroundColor: "#1f618d",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px"
  };
  return (
    <div style={container}>
      <div style={Card1}>
        <h1>Welcome to PetConnect </h1>
        <p><i>{message}</i></p>
        <img
          src={home}
          alt="pets"
          style={{ width: "200px", marginTop: "20px" }}
        />
        <br />
        {/* Link to Pets page */}
        <Link to="/pets">
          <button style={buttonStyle}>
            Explore Pets 
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;