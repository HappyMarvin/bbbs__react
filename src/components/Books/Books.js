import React from "react";
import PropTypes from "prop-types";
import "./Books.css";

const Books = ({ mix }) => {
  return (
    <main className={`books ${mix}`}>
      <h1>Read And Watch - Books</h1>
    </main>
  );
};

Books.propTypes = {
  mix: PropTypes.string,
};

export default Books;
