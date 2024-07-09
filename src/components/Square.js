import React from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  return (
    <button
      className={`square ${value === "X" ? "x" : value === "O" ? "o" : ""}`}
      onClick={onClick}
    >
      {value === "O" ? "✔️" : value}
    </button>
  );
};

export default Square;
