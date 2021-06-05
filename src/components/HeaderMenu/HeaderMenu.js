import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

import { PROJECT_LINKS, SOCIAL_LINKS } from "../../utils/links";
import UserContext from "../../contexts/UserContext";
import UserData from "../UserData/UserData";

const HeaderMenu = ({ isOpen, onClose }) => {
  const user = React.useContext(UserContext);
  const navLinks = Object.values(PROJECT_LINKS).filter((item) => item.nav);

  React.useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
        <Link
          to={PROJECT_LINKS.main.link}
          className="header-menu__logo"
          onClick={onClose}
        >
          наставники.про
        </Link>
        <button
          type="button"
          className="header-menu__button header-menu__button-close"
          onClick={onClose}
        />
      </div>
      <nav className="header-menu__nav">
        <ul className="header-menu__nav-list">
          {navLinks.map((item, index) => (
            <li key={index} className="header-menu__nav-item">
              <Link
                to={item.link}
                className="header-menu__nav-link"
                onClick={onClose}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="header-menu__nav-list">
          {SOCIAL_LINKS.map((item, index) => (
            <li key={index} className="header-menu__nav-item">
              <a
                href={item.link}
                className="header-menu__nav-link"
                onClick={onClose}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-menu__user-data">
        <UserData />
      </div>
    </div>
  );
};

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default HeaderMenu;
