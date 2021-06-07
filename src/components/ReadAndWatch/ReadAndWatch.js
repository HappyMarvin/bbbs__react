import React from "react";
import PropTypes from "prop-types";
import "./ReadAndWatch.css";

const ReadAndWatch = ({ mix }) => {
  return (
    <main className={`read-and-watch ${mix}`}>
      <h1>Read And Watch</h1>
    </main>
  );
};

ReadAndWatch.propTypes = {
  mix: PropTypes.string,
};

export default ReadAndWatch;
