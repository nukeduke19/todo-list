import React from "react";
import "../css/list.css";

function List({ title, onClick }) {
  return (
    <div className="list">
      <p className="list__name">{title}</p>
      <i className="fas fa-trash-alt fa-2x" onClick={onClick} />
    </div>
  );
}

export default List;
