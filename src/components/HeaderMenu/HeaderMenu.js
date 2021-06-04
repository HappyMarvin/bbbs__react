import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

import { PROJECT_LINKS } from "../../utils/links";

export default function HeaderMenu() {
  const headerLinks = Object.values(PROJECT_LINKS).filter(
    (item) => item.header
  );

  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        {headerLinks.map((item, index) => (
          <li key={index} className="header-menu__list-item calender-open">
            <Link to={item.link} className="header-menu__list-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
