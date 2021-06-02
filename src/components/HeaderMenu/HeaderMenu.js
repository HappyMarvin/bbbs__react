import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

export default function HeaderMenu() {
  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__list-item calender-open">
          <Link to="/calendar" className="header-menu__list-link">
            Календарь
          </Link>
        </li>
        <li className="header-menu__list-item">
          <Link to="/" className="header-menu__list-link">
            Куда пойти
          </Link>
        </li>
        <li className="header-menu__list-item">
          <Link to="/" className="header-menu__list-link">
            Вопросы
          </Link>
        </li>
        <li className="header-menu__list-item">
          <Link to="/" className="header-menu__list-link">
            Читать и смотреть
          </Link>
        </li>
        <li className="header-menu__list-item">
          <Link to="/" className="header-menu__list-link">
            Права детей
          </Link>
        </li>
        <li className="header-menu__list-item">
          <Link to="/" className="header-menu__list-link">
            Истории
          </Link>
        </li>
      </ul>
    </nav>
  );
}
