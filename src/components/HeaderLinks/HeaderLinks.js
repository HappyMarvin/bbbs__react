import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLinks.css";

import { PROJECT_LINKS } from "../../utils/links";

export default function HeaderLinks() {
  const headerLinks = Object.values(PROJECT_LINKS).filter(
    (item) => item.header
  );

  return (
    <nav className="header-links">
      <ul className="header-links__list">
        {headerLinks.map((item, index) => (
          <li key={index} className="header-links__list-item">
            <Link to={item.link} className="header-links__list-link">
              {item.title}
            </Link>
            {item.children && (
              <ul className="header-links__subgroup">
                {Object.values(item.children).map((element, i) => (
                  <li key={i} className="header-links__subitem">
                    <Link
                      to={`${item.link}${element.link}`}
                      className="header-links__sublink"
                    >
                      {element.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
