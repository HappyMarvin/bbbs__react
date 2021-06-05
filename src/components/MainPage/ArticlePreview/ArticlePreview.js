import React from "react";
import { Link } from "react-router-dom";

import "./ArticlePreview.css";

export default function ArticlePreview({ isGreen }) {
  // для корректной работы неразрывного пробела
  const xspace = String.fromCharCode(160);
  return (
    <article
      className={` ${
        isGreen
          ? `preview-article preview-article_color_green`
          : `preview-article`
      } `}
    >
      <Link className="mainlink" to="/read-and-watch"></Link>
      <h2 className="preview-article__title">
        {isGreen
          ? `У${xspace}таких детей возникает ощущение отверженности. Оно приводит
        к${xspace}напряженности и${xspace}недоверию к${xspace}людям${xspace}и, как
        итог, к${xspace}реальному неприятию себя и${xspace}окружающих.`
          : `Развитие детей-сирот отличается от${xspace}развития детей, живущих
        в${xspace}семьях. Все этапы развития у${xspace}детей-сирот проходят
        с${xspace}искажениями и${xspace}имеют ряд негативных особенностей.`}
      </h2>
      <Link className="preview-article__link" to="/read-and-watch">
        читать статью
      </Link>
    </article>
  );
}
