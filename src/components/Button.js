import React from "react";
import "../css/button.css";

function Button({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      <span className="btn__checkList">CHECK LIST</span>
      <span className="btn__removeAll">REMOVE ALL</span>
    </button>
  );
}

export default Button;
