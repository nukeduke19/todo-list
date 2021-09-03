import React from "react";
import "../css/header.css";

function Header(props) {
  return (
    <figure>
      <img
        src="https://cdn2.iconfinder.com/data/icons/flat-productivity-at-work/256/To-Do_List-512.png"
        alt="todo image"
        className="todo__image"
      />
      <figcaption>ADD YOUR LIST HERE ✌️ </figcaption>
    </figure>
  );
}

export default Header;
