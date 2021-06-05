import React from "react";
import PropTypes from "prop-types";
import "./Questions.css";

const Questions = ({ mix }) => {
  return (
    <main className={`questions ${mix}`}>
      <h1>questions</h1>
    </main>
  );
};

Questions.propTypes = {
  mix: PropTypes.string,
};

export default Questions;
