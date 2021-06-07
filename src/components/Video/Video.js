import React from "react";
import PropTypes from "prop-types";
import "./Video.css";

const Video = ({ mix }) => {
  return (
    <main className={`video ${mix}`}>
      <h1>Read And Watch - Video</h1>
    </main>
  );
};

Video.propTypes = {
  mix: PropTypes.string,
};

export default Video;
