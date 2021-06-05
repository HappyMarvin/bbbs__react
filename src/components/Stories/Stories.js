import React from "react";
import PropTypes from "prop-types";
import "./Stories.css";

const Stories = ({ mix }) => {
  return (
    <main className={`stories ${mix}`}>
      <h1>stories</h1>
    </main>
  );
};

Stories.propTypes = {
  mix: PropTypes.string,
};

export default Stories;
