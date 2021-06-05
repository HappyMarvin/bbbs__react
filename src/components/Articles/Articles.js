import React from "react";
import PropTypes from "prop-types";
import "./Articles.css";

const Articles = ({ mix }) => {
  return (
    <main className={`articles ${mix}`}>
      <h1>Read And Watch - Articles</h1>
    </main>
  );
};

Articles.propTypes = {
  mix: PropTypes.string,
};

export default Articles;
