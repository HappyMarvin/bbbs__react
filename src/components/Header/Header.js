import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { PROJECT_LINKS, SOCIAL_LINKS } from "../../utils/links";

function Header(props) {
  const navLinks = Object.values(PROJECT_LINKS).filter((item) => item.nav);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo" />
        <button type="button" className="header__burger-btn"></button>
        <HeaderMenu />
        <nav className="header__action">
          <Link to="/" className="header__button-search"></Link>
          <button
            onClick={props.handleButtonClick}
            className="header__button-login header__button-login_unauthorized"
          ></button>
        </nav>
      </div>
      <div className="header__burger header__burger_hidden">
        <div className="header__burger-wrapper">
          <nav className="header__menu-burger">
            <ul className="header__burger-list">
              {navLinks.map((item, index) => (
                <li key={index} className="header__burger-item">
                  <Link to={item.link} className="header__burger-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="header__menu-burger">
            <ul className="header__burger-list">
              {SOCIAL_LINKS.map((item, index) => (
                <li key={index} className="header__burger-item">
                  <a
                    href={item.link}
                    className="header__burger-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  handleButtonClick: PropTypes.func,
};

export default Header;
