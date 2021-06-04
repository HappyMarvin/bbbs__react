import React from "react";
import PropTypes from "prop-types";
import "./Guide.css";

const Guide = ({ mix }) => {
  return (
    <main className={`guide ${mix}`}>
      <h1>Read And Watch - Guide</h1>
    </main>
  );
};

Guide.propTypes = {
  mix: PropTypes.string,
};

export default Guide;
