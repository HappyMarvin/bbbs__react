import React from "react";

import Bbbs from "../../Bbbs/Bbbs";
import EventCard from "../EventCard/EventCard";
import Story from "../Story/Story";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import MoviesPreviewList from "../MoviesPreviewList/MoviesPreviewList";
import GraduateVideo from "../GraduateVideo/GraduateVideo";
import WidgetQuestions from "../WidgetQuestions/WidgetQuestions";
import CardPlace from "../../CardPlace/CardPlace.jsx";
import CONST_CARD_PLACE from "../../CardPlace/constCardPlace";

import "./Main.css";

export default function Main({ isLoggedIn, event, mix, handleOpenPopup }) {
  return (
    <main className={`main`}>
      <section className="mainpage content main__section">
        <section className="mainpage__intro">
          {isLoggedIn ? <EventCard /> : <Bbbs />}
          <Story />
        </section>

        <section className="mainpage__blocks">
          <CardPlace {...CONST_CARD_PLACE} />
        </section>

        <section className="mainpage__block">
          <ArticlePreview />
        </section>

        <section className="mainpage__block">
          <MoviesPreviewList />
        </section>

        <section className="video-bigcard" onClick={() => handleOpenPopup()}>
          <GraduateVideo />
        </section>

        <section className="mainpage__blocks-col">
          <WidgetQuestions />
        </section>

        <section className="mainpage__block">
          <ArticlePreview isGreen={true} />
        </section>
      </section>
    </main>
  );
}
