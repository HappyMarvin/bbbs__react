import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

export default function HeaderMenu() {
  return (
    <nav className="header__menu">
      <ul className="header__list">
        <li className="header__list-item calender-open">
          <a href="#" className="header__list-link">
            Календарь
          </a>
        </li>
        <li className="header__list-item">
          <a href="./pages-html/where_to_go.html" className="header__list-link">
            Куда пойти
          </a>
        </li>
        <li className="header__list-item">
          <a href="./pages-html/questions.html" className="header__list-link">
            Вопросы
          </a>
        </li>
        <li className="header__list-item">
          <a href="./pages-html/read_watch.html" className="header__list-link">
            Читать и смотреть
          </a>
        </li>
        <li className="header__list-item">
          <a href="./pages-html/rights.html" className="header__list-link">
            Права детей
          </a>
        </li>
        <li className="header__list-item">
          <a href="#" className="header__list-link">
            Истории
          </a>
        </li>
      </ul>
    </nav>
  );
}
