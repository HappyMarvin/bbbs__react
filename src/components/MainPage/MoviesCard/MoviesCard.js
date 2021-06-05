import React from "react";

import "./MoviesCard.css";

export default function MoviesCard({ movie }) {
  return (
    <li className="video-card">
      <img
        className="video-card__image"
        src={movie.imageLink}
        alt={movie.title}
      />
      <div className="video-card__description">
        <div className="video-card__containter">
          <span className="video-card__category">Рубрика</span>
          <span className="video-card__category">Рубрика</span>
        </div>
        <h2 className="video__title video-card__title">{movie.title}</h2>
        <p className="video-card__caption caption">{movie.description}</p>
        <a
          className="clickable-element"
          href={movie.trailerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          смотреть трейлер
        </a>
      </div>
    </li>
  );
}
