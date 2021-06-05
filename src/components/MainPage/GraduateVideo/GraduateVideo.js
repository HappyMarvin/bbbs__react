import React from "react";
import { Link } from "react-router-dom";

import "./GraduateVideo.css";

export default function GraduateVideo() {
  return (
    <>
      <iframe
        className="video-bigcard__item"
        src="https://www.youtube.com/embed/tGZUSEtsy7E?controls=0&iv_load_policy=3&modestbranding=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-bigcard__description">
        <h2 className="video-bigcard-title video-bigcard__title">
          Эфир с выпускником нашей программы
        </h2>
        <p className="video-bigcard__caption caption">
          Иван Рустаев, выпускник программы
        </p>
        <Link
          to="/read-and-watch"
          className="video-bigcard__link clickable-element"
        >
          смотреть видео
        </Link>
      </div>
    </>
  );
}
