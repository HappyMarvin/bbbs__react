import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import HeaderMenu from "../HeaderMenu/HeaderMenu";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo" />
        <button type="button" className="header__burger-btn"></button>
        <HeaderMenu />
        <nav className="header__action">
          <a
            className="header__button-search"
            href="./pages-html/search.html"
          ></a>
          <a
            href="#"
            className="header__button-login header__button-login_unauthorized"
          ></a>
        </nav>
      </div>
      <div className="header__burger header__burger_hidden">
        <div className="header__burger-wrapper">
          <nav className="header__menu-burger">
            <ul className="header__burger-list">
              <li className="header__burger-item">
                <a
                  href="./pages-html/about.html"
                  className="header__burger-link"
                >
                  О проекте
                </a>
              </li>
              <li className="header__burger-item">
                <a href="#" className="header__burger-link calender-open">
                  Календарь
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="./pages-html/where_to_go.html"
                  className="header__burger-link"
                >
                  Куда пойти
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="./pages-html/questions.html"
                  className="header__burger-link"
                >
                  Вопросы
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="./pages-html/read_watch.html"
                  className="header__burger-link"
                >
                  Читать и смотреть
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="./pages-html/questions.html"
                  className="header__burger-link"
                >
                  Права детей
                </a>
              </li>
              <li className="header__burger-item">
                <a href="#" className="header__burger-link">
                  Истории
                </a>
              </li>
            </ul>
          </nav>
          <nav className="header__menu-burger">
            <ul className="header__burger-list">
              <li className="header__burger-item">
                <a
                  href="#"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener"
                >
                  facebook
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="#"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener"
                >
                  vkontakte
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="#"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener"
                >
                  instagram
                </a>
              </li>
              <li className="header__burger-item">
                <a
                  href="#"
                  className="header__burger-link"
                  target="_blank"
                  rel="noopener"
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
