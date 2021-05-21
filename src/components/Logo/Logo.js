import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import defaulImage from "../../images/logoSBSS.svg";

// place = footer || mainpage || about
const Logo = ({ place, image = defaulImage }) => {
  return (
    <Link
      class={`logo logo_place_${place}`}
      href="https://www.nastavniki.org/o-nas/ob-organizaczii/"
      target="_blank"
      rel="noopener"
    >
      <img
        class="logo__img"
        src={image}
        alt="Логотип Старшие Братья Старшие Сестры"
      />
    </Link>
  );
};

export default Logo;
