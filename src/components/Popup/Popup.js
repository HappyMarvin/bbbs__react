import React from "react";
import "./Popup.css";

const Popup = ({ component: Component, onClose, ...props }) => {
  const closePopup = (evt) => {
    if (evt.target.classList.contains("popup")) {
      onClose();
    }
  };

  return (
    <div className="popup" onClick={closePopup}>
      <Component {...props} onClose={onClose} />
    </div>
  );
};

export default Popup;
