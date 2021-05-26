import React from "react";

import Bbbs from "../Bbbs/Bbbs";

import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <section className="mainpage content main__section">
        <section className="mainpage__intro">
          <Bbbs />
          <div className="story">
            <a className="mainlink" href="#"></a>
            <h3 className="story__title">История Марины и Алины</h3>
          </div>
        </section>

        <section className="mainpage__blocks">
          <section className="event-soon-card">
            <div className="event-soon">
              <div className="event-soon__content-wrapper">
                <section className="profile-grid">
                  <div className="profile-grid__column profile-grid__column_size_wide event-soon__description event-soon__description_size_big">
                    <p className="tag tag_place_event">Выбор наставника</p>
                    <div className="event-soon__caption">
                      <div className="event-soon__title">
                        Сплав на байдарках в две строки
                      </div>
                      <div className="event-soon__subtitle">
                        усадьба Архангельское в две строки
                      </div>
                    </div>
                    <img
                      src="./images/event-soon.jpg"
                      className="event-soon__img"
                      alt="Локация"
                    />
                    <a href="#" target="_blank" className="event-soon__link">
                      перейти на сайт
                    </a>
                  </div>

                  <div className="profile-grid__column profile-grid__column_size_thin event-soon__about-wrapper event-soon__about-wrapper_size_big">
                    <article className="event-article event-article_size_big">
                      <div className="event-article__title event-article__title_size_big">
                        Девока, 10 лет. Активный отдых
                      </div>
                      <p className="event-article__paragraph event-article__paragraph_size_big">
                        Аннотация статьи в&nbsp;несколько абзацев. В&nbsp;тот
                        момент, как ребёнок научился говорить,
                        и&nbsp;не&nbsp;одно слово, а&nbsp;задавать бесконечное
                        количество вопросов, жизнь меняется. Вы&nbsp;будете
                        не&nbsp;понимать друг друга, потом понимать чуть
                        лучше&nbsp;и, Аннотация статьи в&nbsp;несколько абзацев.
                        В&nbsp;тот момент, как ребёнок научился говорить,
                        и&nbsp;не&nbsp;одно слово, а&nbsp;задавать бесконечное
                        количество вопросов, жизнь меняется. Вы&nbsp;будете
                        не&nbsp;понимать друг друга, потом понимать чуть
                        лучше&nbsp;и,
                      </p>
                      <p className="event-article__paragraph event-article__paragraph_size_big">
                        Аннотация статьи в&nbsp;несколько абзацев. В&nbsp;тот
                        момент, как ребёнок научился говорить,
                        и&nbsp;не&nbsp;одно слово, а&nbsp;задавать бесконечное
                        количество вопросов, жизнь меняется. Вы&nbsp;будете
                        не&nbsp;по&nbsp;Аннотация статьи в&nbsp;несколько
                        абзацев. В&nbsp;тот момент, как ребёнок научился
                        говорить, и&nbsp;не&nbsp;одно слово, а&nbsp;задавать
                        бесконечное количество вопросов, жизнь меняется.
                      </p>
                    </article>
                  </div>
                </section>
              </div>
            </div>
          </section>
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
