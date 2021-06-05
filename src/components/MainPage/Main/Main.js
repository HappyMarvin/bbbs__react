import React from "react";

import Bbbs from "../../Bbbs/Bbbs";
import Events from "../Events/Events";
import Story from "../Story/Story";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import MoviesPreviewList from "../MoviesPreviewList/MoviesPreviewList";
import GraduateVideo from "../GraduateVideo/GraduateVideo";
import WidgetQuestions from "../WidgetQuestions/WidgetQuestions";

/* import {moviePic} from "../../../images/" */

import "./Main.css";

export default function Main(/* { isLoggedin, event } */ { mix }) {
  return (
    <main className={`main`}>
      <section className="mainpage content main__section">
        <section className="mainpage__intro">
          {/*
          пока нет merge и protected route напишу так. Логика по заданию - если user
          авторизован, то ближайшее событие из календаря, если нет - то описание проекта
          isLoggedIn ? <Calendar event={event}/> : <Bbbs/> */}
          <Bbbs />
          <Story />
        </section>

        <section className="mainpage__blocks">
          {/* Этот блок Иван делает, его не трогаю */}
          <Events />
        </section>

        <section className="mainpage__block">
          <ArticlePreview />
        </section>

        <section className="mainpage__block">
          <MoviesPreviewList />
        </section>

        <section className="video-bigcard">
          <GraduateVideo />
        </section>

        <section className="mainpage__blocks-col">
          <WidgetQuestions />
          {/* <iframe
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
          </ul> */}
        </section>

        <section className="mainpage__block">
          <ArticlePreview isGreen={true} />
        </section>
      </section>
    </main>
  );
}
