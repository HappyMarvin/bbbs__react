import React from "react";
import PropTypes from "prop-types";
import "./Logo.css";
import defaultImage from "../../images/logoSBSS.svg";

import { LOGO_LINK } from "../../utils/links";

const Logo = ({ place, image = defaultImage }) => {
  return (
    <a
      className={`logo logo_place_${place}`}
      href={LOGO_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="logo__img"
        src={image}
        alt="Логотип Старшие Братья Старшие Сестры"
      />
    </a>
  );
};

Logo.propTypes = {
  place: PropTypes.oneOf(["footer", "mainpage", "about"]).isRequired,
  defaultImage: PropTypes.string,
};

export default Logo;
