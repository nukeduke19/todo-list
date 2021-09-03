import React from "react";
import "../css/modal.css";

function Modal({ visible = false, onClick }) {
  if (!visible) return null;
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__headerConatiner">
          <p className="modal__header">Alert</p>
          <i class="fas fa-times fa-2x" onClick={onClick}></i>
        </div>
        <p className="modal__body">Please enter something....!</p>
        <p className="modal__footer">
          <button className="modal__button" onClick={onClick}>
            Close
          </button>
        </p>
      </div>
    </div>
  );
}

export default Modal;
