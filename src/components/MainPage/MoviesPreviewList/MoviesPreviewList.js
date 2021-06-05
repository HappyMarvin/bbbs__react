import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesPreviewList.css";
import movieImage from "../../../images/movie.png";

export default function MoviesPreviewList() {
  const movieList = [
    {
      id: "1",
      description: "Василий Сигарев, Борисов-Мусотов (Россия), 2009 год",
      title: "Жутко громко и запредельно близко",
      trailerLink: "https://www.kinopoisk.ru/film/195432/video/58904/",
      imageLink: movieImage,
    },
    {
      id: "2",
      description: "Клод Баррас, мультфильм, Швейцария, Франция, 2016",
      title: "Жизнь кабачка",
      trailerLink: "https://www.kinopoisk.ru/film/195432/video/58904/",
      imageLink: movieImage,
    },
    {
      id: "3",
      description: "Василий Сигарев, Россия, 2009 год",
      title: "Волчок",
      trailerLink: "https://www.kinopoisk.ru/film/195432/video/58904/",
      imageLink: movieImage,
    },
    {
      id: "4",
      description: "Василий Сигарев, Россия, 2009 год",
      title: "Жутко громко и запредельно близко",
      trailerLink: "https://www.kinopoisk.ru/film/195432/video/58904/",
      imageLink: movieImage,
    },
  ];

  return (
    <ul className="videos-block">
      {movieList.map((movie) => {
        const movieKey = movie.id;
        return <MoviesCard key={movieKey} movie={movie} />;
      })}
      {/* <li className="movie">
        <a className="mainlink" href="#"></a>
        <div className="movie__img">
          <img
          className="movie__poster"
            src="../../../images/movie.png"
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
            src="../../../images/movie.png"
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
            src="../../../images/movie.png"
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
            src="../../../images/movie.png"
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
    </template> */}
    </ul>
  );
}
