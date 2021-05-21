import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  const navLinks = [
    { title: "О проекте", link: "about" },
    { title: "Календарь", link: "calendar" },
    { title: "Куда пойти", link: "where_to_go" },
    { title: "Вопросы", link: "questions" },
    { title: "Читать и смотреть", link: "read_watch" },
    { title: "Права детей", link: "rights" },
    { title: "Истории", link: "stories" },
  ];
  const navSocial = [
    { title: "facebook", link: "http://facebook.com" },
    { title: "vkontakte", link: "http://vk.com" },
    { title: "instagram", link: "http://instagram.com" },
    { title: "youtube", link: "http://youtube.com" },
  ];

  return (
    <footer className="footer">
      <Logo place="footer" />
      {/* <a class="footer__money" href="https://www.nastavniki.org/campaign/pomoch-dengami/" target="_blank" rel="noopener">Помочь деньгами</a> */}
      <div className="footer__navigation">
        <nav className="footer__menu">
          <ul className="footer__list footer__list_type_nav">
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
          <ul className="footer__list footer__list_type_social">
            {navSocial.map((item, index) => (
              <li key={index} className="footer__list-item">
                <Link to={item.link} className="footer__list-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div class="footer__about">
        {/* <p class="footer__copyright">&#169; Старшие Братья Старшие Сестры</p> */}
        <div class="footer__develop">
          <p class="footer__develop-text">
            Разработка &mdash; студенты
            {/* <a class="footer__develop-accent"
                    href="https://praktikum.yandex.ru/" target="_blank" rel="noopener">Яндекс.Практикум</a> */}
          </p>
          <p class="footer__develop-text">
            Концепия и дизайн &mdash;
            {/* <a class="footer__develop-accent"
                    href="https://krkr.design/" target="_blank" rel="noopener">krkr.design</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
