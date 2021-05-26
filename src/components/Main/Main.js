import React from "react";

import Bbbs from "../Bbbs/Bbbs";
import Events from "../Events/Events";
import Story from "../Story/Story";

import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <section className="mainpage content main__section">
        <section className="mainpage__intro">
          <Bbbs />
          <Story />
        </section>

        <section className="mainpage__blocks">
          <Events />
        </section>

        <section className="mainpage__block">
          <article className="preview-article">
            <a className="mainlink" href="#"></a>
            <h2 className="preview-article__title">
              Развитие детей-сирот отличается от&nbsp;развития детей, живущих
              в&nbsp;семьях. Все этапы развития у&nbsp;детей-сирот проходят
              с&nbsp;искажениями и&nbsp;имеют ряд негативных особенностей.
            </h2>
            <a className="preview-article__link" href="#">
              читать статью
            </a>
          </article>
        </section>

        <section className="mainpage__block">
          <ul className="movies">
            <li className="movie">
              <a className="mainlink" href="#"></a>
              <div className="movie__img">
                <img
                  className="movie__poster"
                  src="./images/movie.png"
                  alt=""
                />
                <div className="movie__tags">
                  <p className="tag">рубрика</p>
                  <p className="tag">рубрика</p>
                </div>
              </div>
              <div className="movie__descriprion">
                <div className="movie__name">
                  <h3 className="movie__title">
                    Жутко громко и запредельно близко
                  </h3>
                  <p className="movie__caption">
                    Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                  </p>
                </div>
                <a
                  className="movie__link"
                  href="#"
                  target="_blank"
                  rel="noopener"
                >
                  смотреть трейлер
                </a>
              </div>
            </li>
            <li className="movie">
              <a className="mainlink" href="#"></a>
              <div className="movie__img">
                <img
                  className="movie__poster"
                  src="./images/movie.png"
                  alt=""
                />
                <div className="movie__tags">
                  <p className="tag">рубрика</p>
                  <p className="tag">рубрика</p>
                </div>
              </div>
              <div className="movie__descriprion">
                <div className="movie__name">
                  <h3 className="movie__title">Жизнь кабачка</h3>
                  <p className="movie__caption">
                    Клод Баррас, мультфильм, Швейцария, Франция, 2016
                  </p>
                </div>
                <a
                  className="movie__link"
                  href="#"
                  target="_blank"
                  rel="noopener"
                >
                  смотреть трейлер
                </a>
              </div>
            </li>
            <li className="movie">
              <a className="mainlink" href="#"></a>
              <div className="movie__img">
                <img
                  className="movie__poster"
                  src="./images/movie.png"
                  alt=""
                />
                <div className="movie__tags">
                  <p className="tag">рубрика</p>
                  <p className="tag">рубрика</p>
                </div>
              </div>
              <div className="movie__descriprion">
                <div className="movie__name">
                  <h3 className="movie__title">Волчок</h3>
                  <p className="movie__caption">
                    Василий Сигарев, Россия, 2009 год
                  </p>
                </div>
                <a
                  className="movie__link"
                  href="#"
                  target="_blank"
                  rel="noopener"
                >
                  смотреть трейлер
                </a>
              </div>
            </li>
            <li className="movie">
              <a className="mainlink" href="#"></a>
              <div className="movie__img">
                <img
                  className="movie__poster"
                  src="./images/movie.png"
                  alt=""
                />
                <div className="movie__tags">
                  <p className="tag">рубрика</p>
                  <p className="tag">рубрика</p>
                </div>
              </div>
              <div className="movie__descriprion">
                <div className="movie__name">
                  <h3 className="movie__title">
                    Жутко громко и запредельно близко
                  </h3>
                  <p className="movie__caption">
                    Василий Сигарев, Борисов-Мусотов (Россия), 2009 год
                  </p>
                </div>
                <a
                  className="movie__link"
                  href="#"
                  target="_blank"
                  rel="noopener"
                >
                  смотреть трейлер
                </a>
              </div>
            </li>

            <template id="template-movie">
              <li className="movie">
                <div className="movie__img">
                  <img className="movie__poster" src="" alt="" />
                  <div className="movie__tags">
                    <p className="tag"></p>
                    <p className="tag"></p>
                  </div>
                </div>
                <div className="movie__descriprion">
                  <div className="movie__name">
                    <h3 className="movie__title"></h3>
                    <p className="movie__caption"></p>
                  </div>
                  <a
                    className="movie__link"
                    href="#"
                    target="_blank"
                    rel="noopener"
                  >
                    смотреть трейлер
                  </a>
                </div>
              </li>
            </template>
          </ul>
        </section>

        <section className="mainpage__blocks">
          <div className="mainvideo">
            <div className="mainvideo__description">
              <a className="mainlink" href="#"></a>
              <div className="mainvideo__name">
                <h3 className="mainvideo__title">
                  Эфир с выпускником нашей программы
                </h3>
                <p className="mainvideo__caption">
                  Иван Рустаев, выпускник программы
                </p>
              </div>
              <a className="mainvideo__link" href="#">
                смотреть видео
              </a>
            </div>
            <img
              src="./images/mainvideo.png"
              alt=""
              className="mainvideo__video"
            />
          </div>
        </section>

        <section className="mainpage__blocks-col">
          <iframe
            className="facebook"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBigBrothers.BigSisters.Russia&tabs=timeline&width=420&height=627&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <ul className="questions questions_place_maipage">
            <li className="question">
              <a className="mainlink" href="#"></a>
              <h3 className="question__title">
                Я&nbsp;боюсь, что ребёнок ко&nbsp;мне слишком сильно привяжется.
                Что делать?
              </h3>
              <div className="question__tags">
                <p className="tag tag_theme_white">рубрика</p>
              </div>
            </li>
            <li className="question">
              <a className="mainlink" href="#"></a>
              <h3 className="question__title">
                Возможно&nbsp;ли продлить срок участия в&nbsp;программе, если
                и&nbsp;я&nbsp;и&nbsp;мой &laquo;младший&raquo; хотим остаться
                в&nbsp;программе?
              </h3>
              <div className="question__tags">
                <p className="tag tag_theme_white">рубрика</p>
              </div>
            </li>
            <li className="question">
              <a className="mainlink" href="#"></a>
              <h3 className="question__title">
                Что делать если Ваш младший решил закрыть пару, т.к. слишком
                занят с&nbsp;учебой и&nbsp;друзьями?
              </h3>
              <div className="question__tags">
                <p className="tag tag_theme_white">рубрика</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mainpage__block">
          <article className="preview-article preview-article_color_green">
            <a className="mainlink" href="#"></a>
            <h2 className="preview-article__title">
              У&nbsp;таких детей возникает ощущение отверженности. Оно приводит
              к&nbsp;напряженности и&nbsp;недоверию к&nbsp;людям&nbsp;и, как
              итог, к&nbsp;реальному неприятию себя и&nbsp;окружающих.
            </h2>
            <a className="preview-article__link" href="#">
              читать статью
            </a>
          </article>
        </section>
      </section>
    </main>
  );
}
