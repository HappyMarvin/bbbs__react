import React from "react";

import "./MoviesCard.css";

export default function MoviesCard({ movie }) {
  return (
    <li class="video-card">
      <img class="video-card__image" src={movie.imageLink} alt={movie.title} />
      <div class="video-card__description">
        <div class="video-card__containter">
          <span class="video-card__category">Рубрика</span>
          <span class="video-card__category">Рубрика</span>
        </div>
        <h2 class="video__title video-card__title">{movie.title}</h2>
        <p class="video-card__caption caption">{movie.description}</p>
        <a
          class="clickable-element"
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
