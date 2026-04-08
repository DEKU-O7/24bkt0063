import React, { useState } from "react";
function Donation() {
  // useState,hooks
  const [amount, setAmount] = useState(0);
  const boxStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "30px auto"
  };
  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#e67e22",
    color: "white",
    border: "none",
    borderRadius: "5px"
  };
  const resetButtonStyle = {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px"
  };
  return (
    <div style={boxStyle}>
      <h2>Support Our Pets</h2>
      <p>Your donations help us care for animals in need.</p>
      <h3>₹ {amount}</h3>
      <button style={buttonStyle} onClick={() => setAmount(amount + 100)}>
        Donate ₹100
      </button>
      <button style={buttonStyle} onClick={() => setAmount(amount + 500)}>
        Donate ₹500
      </button>
      <button style={buttonStyle} onClick={() => setAmount(amount + 1000)}>
        Donate ₹1000
      </button>
      <br />
      <button
        style={resetButtonStyle}
        onClick={() => setAmount(0)}
      >
        Reset
      </button>
    </div>
  );
}
export default Donation;