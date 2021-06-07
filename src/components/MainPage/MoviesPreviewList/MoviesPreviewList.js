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
    </ul>
  );
}
