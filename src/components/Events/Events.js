import React from "react";
import PropTypes from "prop-types";
import "./Events.css";

const Events = ({ mix }) => {
  return (
    <main className={`events ${mix}`}>
      <h1>events</h1>
    </main>
  );
};

Events.propTypes = {
  mix: PropTypes.string,
};

export default Events;
