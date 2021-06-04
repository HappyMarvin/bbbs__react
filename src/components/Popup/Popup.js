import React from "react";
import PropTypes from "prop-types";
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

Popup.propTypes = {
  component: PropTypes.elementType.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
