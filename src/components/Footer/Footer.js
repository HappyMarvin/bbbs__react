import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo place="footer" />
      {/* <a class="footer__money" href="https://www.nastavniki.org/campaign/pomoch-dengami/" target="_blank" rel="noopener">Помочь деньгами</a> */}
      <div class="footer__navigation">
        <nav class="footer__menu">
          {/* <ul class="footer__list footer__list_type_nav">
            <li class="footer__list-item"><a href="./pages-html/about.html" class="footer__list-link">О проекте</a></li>
            <li class="footer__list-item"><a href="#" class="footer__list-link calender-open">Календарь</a></li>
            <li class="footer__list-item"><a href="./pages-html/where_to_go.html" class="footer__list-link">Куда пойти</a></li>
            <li class="footer__list-item"><a href="./pages-html/questions.html" class="footer__list-link">Вопросы</a></li>
            <li class="footer__list-item"><a href="./pages-html/read_watch.html" class="footer__list-link">Читать и смотреть</a></li>
            <li class="footer__list-item"><a href="./pages-html/rights.html" class="footer__list-link">Права детей</a></li>
            <li class="footer__list-item"><a href="#" class="footer__list-link">Истории</a></li>
          </ul> */}
        </nav>
        <nav class="footer__menu">
          <ul class="footer__list footer__list_type_social">
            {/* <li class="footer__list-item"><a href="#" class="footer__list-link" target="_blank" rel="noopener">facebook</a></li>
            <li class="footer__list-item"><a href="#" class="footer__list-link" target="_blank" rel="noopener">vkontakte</a></li>
            <li class="footer__list-item"><a href="#" class="footer__list-link" target="_blank" rel="noopener">instagram</a></li>
            <li class="footer__list-item"><a href="#" class="footer__list-link" target="_blank" rel="noopener">youtube</a></li> */}
          </ul>
        </nav>
      </div>
      <div class="footer__about">
        <p class="footer__copyright">&#169; Старшие Братья Старшие Сестры</p>
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
