import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import defaultImage from "../../images/logoSBSS.svg";

// place = footer || mainpage || about
const Logo = ({ place, image = defaultImage }) => {
  return (
    <a
      className={`logo logo_place_${place}`}
      href="https://www.nastavniki.org/o-nas/ob-organizaczii/"
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

export default Logo;
