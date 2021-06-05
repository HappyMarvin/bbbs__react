import React from "react";
// import PropTypes from "prop-types";
import "./PopupLogin.css";

const PopupLogin = ({ mix }) => {
  return (
    <div className={`popup-login ${mix}`}>
      <p>Вход</p>
    </div>
  );
};

// Guide.propTypes = {
//   mix: PropTypes.string,
// };

export default PopupLogin;
