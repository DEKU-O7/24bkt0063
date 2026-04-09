//functional component
import React, { useState } from "react";
function Donation() {
  //useState,hooks
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("Open");
  const max_amt = 500;
  const donate = (value) => {
    if (status === "Closed")
       return;
    const newAmount = amount + value;
    if (newAmount >= max_amt) {
      setAmount(max_amt);
      setStatus("Closed");
    } else {
      setAmount(newAmount);
    }
  };
  const toggleStatus = () => {
    setStatus(status === "Open" ? "Closed" : "Open");
  };
  //styling
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
  const statusStyle = {
    color: status === "Open" ? "green" : "red",
    fontWeight: "bold"
  };
  //JSX
  return (
    <div style={boxStyle}>
      <h2>Support Our Pets</h2>
      <p>Your donations help us care for animals in need.</p>
      <h3>$ {amount}</h3>
      <p>
        Status: <span style={statusStyle}>{status}</span>
      </p>
      {/* event handling */}
      <button onClick={() => donate(10)} style={buttonStyle} disabled={status === "Closed"}>
        Donate $10
      </button>
      <button onClick={() => donate(50)} style={buttonStyle} disabled={status === "Closed"}>
        Donate $50
      </button>
      <button onClick={() => donate(100)} style={buttonStyle} disabled={status === "Closed"}>
        Donate $100
      </button>
      <br />
      <button style={resetButtonStyle} onClick={() => { setAmount(0); setStatus("Open"); }}>
        Reset
      </button>
      <button style={resetButtonStyle} onClick={toggleStatus}>
        Change Status
      </button>
    </div>
  );
}
export default Donation;