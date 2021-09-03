import React from "react";
import "../css/input.css";

function Input({ onClick, ...otherProps }) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="✍️ Add items ..."
        className="input__field"
        {...otherProps}
      />
      <i className="fas fa-plus fa-lg" onClick={onClick} />
    </div>
  );
}

export default Input;
