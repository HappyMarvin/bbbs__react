import React from "react";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ mix }) => {
  return (
    <main className={`main ${mix}`}>
      <h1>main</h1>
    </main>
  );
};

Main.propTypes = {
  mix: PropTypes.string,
};

export default Main;
