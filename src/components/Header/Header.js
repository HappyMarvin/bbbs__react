import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

import HeaderLinks from "../HeaderLinks/HeaderLinks";

import { PROJECT_LINKS } from "../../utils/links";
import UserContext from "../../contexts/UserContext";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function Header({ mix }) {
  const user = React.useContext(UserContext);

  return (
    <header className={`header ${mix}`}>
      <button type="button" className="header__button header__button-menu" />
      <Link to={PROJECT_LINKS.main.link} className="header__logo">
        наставники.про
      </Link>
      <HeaderLinks />
      <div className="header__actions">
        <div className="header__action">
          <button
            type="button"
            className=" header__button header__button-search"
          />
        </div>
        <div className="header__action">
          <button
            type="button"
            className={`header__button header__button-account ${
              user.login && "header__button-account_login"
            }`}
          />
        </div>
      </div>
      <HeaderMenu isOpen={true} />
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
    </header>
  );
}

Header.propTypes = {
  mix: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

export default Header;
