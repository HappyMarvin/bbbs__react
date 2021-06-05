import React from "react";
import PropTypes from "prop-types";
import "./ChildrenRights.css";

const ChildrenRights = ({ mix }) => {
  return (
    <main className={`children-rights ${mix}`}>
      <h1>Children Rights</h1>
    </main>
  );
};

ChildrenRights.propTypes = {
  mix: PropTypes.string,
};

export default ChildrenRights;
