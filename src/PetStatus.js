//functional component
import React from "react";
//props
function PetStatus(props) {
  //props validation
  const validStatuses = ["Available", "Adopted"];
  const isValidStatus = validStatuses.includes(props.status);
  //styling
  const cardStyle = {
    border: "2px solid #1f618d",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "20px",
    width: "300px",
    backgroundColor: "#f8f9f9",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial"
  };
  const headingStyle = {
    color: "#1f618d",
    marginBottom: "12px"
  };
  const statusStyle = {
    color: props.status === "Available" ? "green" : "orange",
    fontWeight: "bold"
  };
  const errorStyle = {
    color: "white",
    backgroundColor: "#c0392b",
    padding: "10px",
    borderRadius: "6px",
    fontWeight: "bold",
    marginTop: "10px"
  };
  //JSX
  return (
    <div style={cardStyle}>
      <h3 style={headingStyle}>{props.name}</h3>
      {isValidStatus ? (
        <p>
          <b>Status: </b>
          <span style={statusStyle}>{props.status}</span>
        </p>
      ) : (
        <div style={errorStyle}>Invalid status received</div>
      )}
    </div>
  );
}
export default PetStatus;