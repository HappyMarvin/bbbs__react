import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

export default function HeaderMenu() {
  return (
    <nav className="header__menu">
      <ul className="header__list">
        <li className="header__list-item calender-open">
          <Link to="/" className="header__list-link">
            Календарь
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/" className="header__list-link">
            Куда пойти
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/" className="header__list-link">
            Вопросы
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/" className="header__list-link">
            Читать и смотреть
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/" className="header__list-link">
            Права детей
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/" className="header__list-link">
            Истории
          </Link>
        </li>
      </ul>
    </nav>
  );
}
