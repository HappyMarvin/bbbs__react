import React from "react";

function Header() {
  return (
    <header class="header">
      <div class="header__wrapper">
        <a class="header__logo" href="./index.html"></a>
        <button type="button" class="header__burger-btn"></button>
        <nav class="header__menu">
          <ul class="header__list">
            <li class="header__list-item calender-open">
              <a href="#" class="header__list-link">
                Календарь
              </a>
            </li>
            <li class="header__list-item">
              <a href="./pages-html/where_to_go.html" class="header__list-link">
                Куда пойти
              </a>
            </li>
            <li class="header__list-item">
              <a href="./pages-html/questions.html" class="header__list-link">
                Вопросы
              </a>
            </li>
            <li class="header__list-item">
              <a href="./pages-html/read_watch.html" class="header__list-link">
                Читать и смотреть
              </a>
            </li>
            <li class="header__list-item">
              <a href="./pages-html/rights.html" class="header__list-link">
                Права детей
              </a>
            </li>
            <li class="header__list-item">
              <a href="#" class="header__list-link">
                Истории
              </a>
            </li>
          </ul>
        </nav>

        <nav class="header__action">
          <a class="header__button-search" href="./pages-html/search.html"></a>
          <a href="#" class="header__button-login header__button-login_unauthorized"></a>
        </nav>
      </div>
      <div class="header__burger header__burger_hidden">
        <div class="header__burger-wrapper">
          <nav class="header__menu-burger">
            <ul class="header__burger-list">
              <li class="header__burger-item"><a href="./pages-html/about.html" class="header__burger-link">О проекте</a></li>
              <li class="header__burger-item"><a href="#" class="header__burger-link calender-open">Календарь</a></li>
              <li class="header__burger-item"><a href="./pages-html/where_to_go.html" class="header__burger-link">Куда пойти</a></li>
              <li class="header__burger-item"><a href="./pages-html/questions.html" class="header__burger-link">Вопросы</a></li>
              <li class="header__burger-item"><a href="./pages-html/read_watch.html" class="header__burger-link">Читать и смотреть</a></li>
              <li class="header__burger-item"><a href="./pages-html/questions.html" class="header__burger-link">Права детей</a></li>
              <li class="header__burger-item"><a href="#" class="header__burger-link">Истории</a></li>
            </ul>
          </nav>
          <nav class="header__menu-burger">
            <ul class="header__burger-list">
              <li class="header__burger-item"><a href="#" class="header__burger-link" target="_blank" rel="noopener">facebook</a></li>
              <li class="header__burger-item"><a href="#" class="header__burger-link" target="_blank" rel="noopener">vkontakte</a></li>
              <li class="header__burger-item"><a href="#" class="header__burger-link" target="_blank" rel="noopener">instagram</a></li>
              <li class="header__burger-item"><a href="#" class="header__burger-link" target="_blank" rel="noopener">youtube</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}