import React from "react";

import "./Events.css";

export default function Events() {
  return (
    <section className="event-soon-card">
      <div className="event-soon">
        <div className="event-soon__content-wrapper">
          <section className="profile-grid">
            <div className="profile-grid__column profile-grid__column_size_wide event-soon__description event-soon__description_size_big">
              <p className="tag tag_place_event">Выбор наставника</p>
              <div className="event-soon__caption">
                <div className="event-soon__title">
                  Сплав на байдарках в две строки
                </div>
                <div className="event-soon__subtitle">
                  усадьба Архангельское в две строки
                </div>
              </div>
              <img
                src="./images/event-soon.jpg"
                className="event-soon__img"
                alt="Локация"
              />
              <a href="#" target="_blank" className="event-soon__link">
                перейти на сайт
              </a>
            </div>

            <div className="profile-grid__column profile-grid__column_size_thin event-soon__about-wrapper event-soon__about-wrapper_size_big">
              <article className="event-article event-article_size_big">
                <div className="event-article__title event-article__title_size_big">
                  Девока, 10 лет. Активный отдых
                </div>
                <p className="event-article__paragraph event-article__paragraph_size_big">
                  Аннотация статьи в&nbsp;несколько абзацев. В&nbsp;тот момент,
                  как ребёнок научился говорить, и&nbsp;не&nbsp;одно слово,
                  а&nbsp;задавать бесконечное количество вопросов, жизнь
                  меняется. Вы&nbsp;будете не&nbsp;понимать друг друга, потом
                  понимать чуть лучше&nbsp;и, Аннотация статьи в&nbsp;несколько
                  абзацев. В&nbsp;тот момент, как ребёнок научился говорить,
                  и&nbsp;не&nbsp;одно слово, а&nbsp;задавать бесконечное
                  количество вопросов, жизнь меняется. Вы&nbsp;будете
                  не&nbsp;понимать друг друга, потом понимать чуть лучше&nbsp;и,
                </p>
                <p className="event-article__paragraph event-article__paragraph_size_big">
                  Аннотация статьи в&nbsp;несколько абзацев. В&nbsp;тот момент,
                  как ребёнок научился говорить, и&nbsp;не&nbsp;одно слово,
                  а&nbsp;задавать бесконечное количество вопросов, жизнь
                  меняется. Вы&nbsp;будете не&nbsp;по&nbsp;Аннотация статьи
                  в&nbsp;несколько абзацев. В&nbsp;тот момент, как ребёнок
                  научился говорить, и&nbsp;не&nbsp;одно слово, а&nbsp;задавать
                  бесконечное количество вопросов, жизнь меняется.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
