import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import defaultImage from "../../images/logoSBSS.svg";

// place = footer || mainpage || about
const Logo = ({ place, image = defaultImage }) => {
  return (
    <Link
      className={`logo logo_place_${place}`}
      to="https://www.nastavniki.org/o-nas/ob-organizaczii/"
      target="_blank"
      rel="noopener"
    >
      <img
        className="logo__img"
        src={image}
        alt="Логотип Старшие Братья Старшие Сестры"
      />
    </Link>
  );
};

export default Logo;
