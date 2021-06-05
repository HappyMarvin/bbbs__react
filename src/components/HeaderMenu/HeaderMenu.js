import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

import { PROJECT_LINKS, SOCIAL_LINKS } from "../../utils/links";
import UserContext from "../../contexts/UserContext";

const HeaderMenu = ({ isOpen }) => {
  const user = React.useContext(UserContext);
  const navLinks = Object.values(PROJECT_LINKS).filter((item) => item.nav);

  return (
    <div className={`header-menu ${isOpen && "header-menu_open"}`}>
      <div className="header-menu__top">
        <div className="header-menu__actions">
          <button
            type="button"
            className="header-menu__action header-menu__button header-menu__button-search"
          />
          <button
            type="button"
            className={`header-menu__action header-menu__button header-menu__button-account ${
              user.login && "header-menu__button-account_login"
            }`}
          />
        </div>
        <Link to={PROJECT_LINKS.main.link} className="header-menu__logo">
          наставники.про
        </Link>
        <button
          type="button"
          className="header-menu__button header-menu__button-close"
        />
      </div>
      <nav className="header-menu__nav">
        <ul className="header-menu__nav-list">
          {navLinks.map((item, index) => (
            <li key={index} className="header-menu__nav-item">
              <Link to={item.link} className="header-menu__nav-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="header-menu__nav-list">
          {SOCIAL_LINKS.map((item, index) => (
            <li key={index} className="header-menu__nav-item">
              <a href={item.link} className="header-menu__nav-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="header__wrapper">
        <Link to="/" className="header__logo-bad" />
        <button type="button" className="header__burger-btn"></button>
        <HeaderMenu />
        <nav className="header__action">
          <Link to="/" className="header__button-search"></Link>
          <button
            onClick={props.handleButtonClick}
            className="header__button-login header__button-login_unauthorized"
          ></button>
        </nav>
      </div> */}
      {/* <div className="header__burger header__burger_hidden">
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
      </div> */}
    </div>
  );
};

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool,
};

export default HeaderMenu;
