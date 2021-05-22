import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import HeaderMenu from "../HeaderMenu/HeaderMenu";

export default function Header(props) {
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
              <li className="header__burger-item">
                <Link to="/" className="header__burger-link">
                  О проекте
                </Link>
              </li>
              <li className="header__burger-item">
                <Link to="/" className="header__burger-link calender-open">
                  Календарь
                </Link>
              </li>
              <li className="header__burger-item">
                <Link to="/" className="header__burger-link">
                  Куда пойти
                </Link>
              </li>
              <li className="header__burger-item">
                <Link to="/" className="header__burger-link">
                  Вопросы
                </Link>
              </li>
              <li className="header__burger-item">
                <Link to="/" className="header__burger-link">
                  Читать и смотреть
                </Link>
              </li>
              <li className="header__burger-item">
                <Link to="/" className="header__burger-link">
                  Права детей
                </Link>
              </li>
              <li className="header__burger-item">
                <Link to="/" className="header__burger-link">
                  Истории
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="header__menu-burger">
            <ul className="header__burger-list">
              <li className="header__burger-item">
                <a
                  href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="https://vk.com/big.brothers.big.sisters"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vkontakte
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="https://www.instagram.com/nastavniki_org/"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="https://www.youtube.com/user/Nastavniki"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  youtube
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
