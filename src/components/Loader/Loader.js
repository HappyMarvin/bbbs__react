import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({ isAbsolute }) => {
  return (
    <div className={`loader ${isAbsolute && "loader_absolute"}`}>
      <div className="loader__circle">
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
        <div className="loader__point"></div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  mix: PropTypes.bool,
};

export default Loader;
