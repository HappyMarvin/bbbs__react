import React from "react";
import PropTypes from "prop-types";
import "./NotFound.css";

const NotFound = ({ mix }) => {
  return (
    <main className={`not-found ${mix}`}>
      <h1>Not Found</h1>
    </main>
  );
};

NotFound.propTypes = {
  mix: PropTypes.string,
};

export default NotFound;
