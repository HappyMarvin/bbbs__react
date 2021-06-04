import React from "react";
import Logo from "../Logo/Logo";
import "./About.css";

import logoBlue from "../../images/logoSBSS-blue.svg";
import {
  HELP_MONEY_LINK,
  MENTORING_LINK,
  PARTHERSHIP_LINK,
} from "../../utils/links";

const About = ({ mix }) => {
  return (
    <main className={`about ${mix}`}>
      <section className="about__intro" aria-label="Кратко о проекте">
        <p className="about__intro-text">
          Наставники.про&nbsp;&ndash; цифоровая информационная платформа
          огрганизации &laquo;Старшие Братья Старшие Сестры&raquo;. Созданная
          для поддержки наставников программы.
        </p>
      </section>

      <section className="about__logo" aria-label="Логотип">
        <Logo place="about" image={logoBlue} />
      </section>

      <section className="about__organization">
        <div className="about__organization-circle">
          <h2 className="about__organization-title">Об организации</h2>
        </div>
        <div className="about__organization-text">
          <p className="about__organization-paragraph">
            &laquo;Старшие Братья Старшие Сестры&raquo; &ndash; межрегиональная
            общественная организация содействия воспитанию подрастающего
            поколения. Мы&nbsp;поддерживаем детей, которым требуется внимание:
            оставшихся без попечения родителей, приемных, детей
            из&nbsp;неполных, многодетных или неблагополучных семей, детей
            с&nbsp;ограниченными возможностями.
          </p>
          <p className="about__organization-paragraph">
            Любому человеку, тем более ребенку, необходимо общение. Без него
            дети растут неуверенными и&nbsp;замкнутыми. Одиночество токсично,
            а&nbsp;самое надежное противоядие &mdash; дружба.
          </p>
          <p className="about__organization-paragraph">
            Мы&nbsp;помогаем детям, которым не&nbsp;хватает поддержки взрослого
            друга, &laquo;Младшим&raquo;. Таким другом становится наш волонтер,
            &laquo;Старший&raquo;. Он&nbsp;принимает ребенка, какой
            он&nbsp;есть, поддерживает, помогает раскрыть потенциал,
            почувствовать уверенность в&nbsp;своих силах, узнать элементарные
            вещи о&nbsp;жизни, адаптироваться и&nbsp;полноценно участвовать
            в&nbsp;жизни общества.
          </p>
        </div>
      </section>

      <section className="about__target" aria-label="Цель организации">
        <p className="about__target-text">
          Мы хотим, чтобы наставник был у каждого ребенка, который в&nbsp;нем
          нуждается
        </p>
      </section>

      <section className="about__actions" aria-label="Действия">
        <ul className="about__actions-list">
          <li className="about__actions-item">
            <article className="about__actions-article">
              <h3 className="about__actions-title about__actions-title_theme_blue">
                Пожертвования
              </h3>
              <div className="about__actions-description">
                <p className="about__actions-text">
                  Деньги пойдут на&nbsp;оплату работы кураторов программы
                  (профессиональные психологи/социальные работники), которые
                  поддерживают дружбу между ребенком и наставником.
                </p>
                <a
                  className="about__actions-more"
                  href={HELP_MONEY_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  сделать пожертвование
                </a>
              </div>
            </article>
          </li>

          <li className="about__actions-item">
            <article className="about__actions-article">
              <h3 className="about__actions-title about__actions-title_theme_red">
                Наставничество
              </h3>
              <div className="about__actions-description">
                <p className="about__actions-text">
                  Наставник &laquo;Старшие Братья Старшие
                  Сестры&raquo;&nbsp;&mdash; значимый взрослый, который
                  становится для ребенка старшим другом, ролевой моделью,
                  принимает своего &laquo;Младшего&raquo; таким, какой
                  он&nbsp;есть. &laquo;Старший&raquo; открывает для ребенка
                  дверь в&nbsp;большой мир и&nbsp;дарит ему надежду
                  на&nbsp;более счастливое и&nbsp;успешное будущее.
                </p>
                <a
                  className="about__actions-more"
                  href={MENTORING_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  подробнее
                </a>
              </div>
            </article>
          </li>

          <li className="about__actions-item">
            <article className="about__actions-article">
              <h3 className="about__actions-title about__actions-title_theme_green">
                Партнерство
              </h3>
              <div className="about__actions-description">
                <p className="about__actions-text">
                  Компании поддерживают нас не&nbsp;только деньгами,
                  но&nbsp;и&nbsp;делами. Мы&nbsp;собрали все возможные способы
                  поддержки и&nbsp;сотрудничества: профессиональная помощь Pro
                  Bono, организационная помощь, корпоративное волонтерство,
                  мастер-классы, лекции, учебные программы
                </p>
                <a
                  className="about__actions-more"
                  href={PARTHERSHIP_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  подробнее
                </a>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
