import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

import HeaderLinks from "../HeaderLinks/HeaderLinks";

import { PROJECT_LINKS } from "../../utils/links";
import UserContext from "../../contexts/UserContext";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function Header({ mix }) {
  const { login, handleAccountButtonClick } = React.useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <header className={`header ${mix}`}>
      <button
        type="button"
        className="header__button header__button-menu"
        onClick={openMenu}
      />
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
              login && "header__button-account_login"
            }`}
            onClick={handleAccountButtonClick}
          />
        </div>
      </div>
      <HeaderMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}

Header.propTypes = {
  mix: PropTypes.string,
};

export default Header;
