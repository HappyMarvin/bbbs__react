import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

const Movies = ({ mix }) => {
  return (
    <main className={`movies ${mix}`}>
      <h1>Read And Watch - Movies</h1>
    </main>
  );
};

Movies.propTypes = {
  mix: PropTypes.string,
};

export default Movies;
