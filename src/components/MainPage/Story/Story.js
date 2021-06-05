import React from "react";
import { Link } from "react-router-dom";

import "./Story.css";

export default function Story() {
  return (
    <div className="story">
      <Link to="/" className="mainlink" />
      <h3 className="story__title">История Марины и Алины</h3>
    </div>
  );
}
