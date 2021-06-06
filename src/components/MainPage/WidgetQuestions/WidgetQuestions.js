import React from "react";
import { Link } from "react-router-dom";

import "./WidgetQuestions.css";

export default function WidgetQuestions() {
  const iframeUrl = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBigBrothers.BigSisters.Russia&tabs=timeline&width=420px&height=627px&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId`;
  return (
    <>
      <div className="facebook">
        <iframe
          title="facebook-widget"
          className="facebook__widget"
          src={iframeUrl}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <ul className="questions questions_place_maipage">
        <li className="question">
          <Link className="mainlink" to="/questions"></Link>
          <h3 className="question__title">
            Я&nbsp;боюсь, что ребёнок ко&nbsp;мне слишком сильно привяжется. Что
            делать?
          </h3>
          <div className="question__tags">
            <p className="tag tag_theme_white">рубрика</p>
          </div>
        </li>
        <li className="question">
          <Link className="mainlink" to="/questions"></Link>
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
          <Link className="mainlink" to="/questions"></Link>
          <h3 className="question__title">
            Что делать если Ваш младший решил закрыть пару, т.к. слишком занят
            с&nbsp;учебой и&nbsp;друзьями?
          </h3>
          <div className="question__tags">
            <p className="tag tag_theme_white">рубрика</p>
          </div>
        </li>
      </ul>
    </>
  );
}
