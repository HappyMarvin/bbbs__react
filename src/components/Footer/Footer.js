import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import Logo from "../Logo/Logo";

import {
  PROJECT_LINKS,
  SOCIAL_LINKS,
  HELP_MONEY_LINK,
  YANDEX_PRAKTIKUM_LINK,
  DESIGN_LINK,
} from "../../utils/links";

const Footer = () => {
  const navLinks = Object.values(PROJECT_LINKS).filter((item) => item.nav);

  return (
    <footer className="footer">
      <Logo place="footer" />
      <a
        className="footer__money"
        href={HELP_MONEY_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Помочь деньгами
      </a>
      <div className="footer__navigation">
        <nav className="footer__menu">
          <ul className="footer__list">
            {navLinks.map((item, index) => (
              <li key={index} className="footer__list-item">
                <Link to={item.link} className="footer__list-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="footer__menu">
          <ul className="footer__list">
            {SOCIAL_LINKS.map((item, index) => (
              <li key={index} className="footer__list-item">
                <a
                  className="footer__list-link"
                  href={item.link}
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
      <div className="footer__about">
        <p className="footer__copyright">
          &#169; Старшие Братья Старшие Сестры
        </p>
        <div className="footer__develop">
          <p className="footer__develop-text">
            Разработка &mdash; студенты &nbsp;
            <a
              className="footer__develop-accent"
              href={YANDEX_PRAKTIKUM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </p>
          <p className="footer__develop-text">
            Концепия и дизайн &mdash; &nbsp;
            <a
              className="footer__develop-accent"
              href={DESIGN_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              krkr.design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
