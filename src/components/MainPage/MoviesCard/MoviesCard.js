import React from "react";
import { Link } from "react-router-dom";

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
        <Link
          className="clickable-element"
          to={movie.trailerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          смотреть трейлер
        </Link>
      </div>
    </li>
  );
}
