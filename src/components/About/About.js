import React from "react";
import Logo from "../Logo/Logo";
import "./About.css";

import logoBlue from "../../images/logoSBSS-blue.svg";

const About = ({ mix }) => {
  return (
    <main className={`about ${mix}`}>
      <section className="about__intro" aria-label="Кратко о проекте">
        <p className="about__intro-text">
          Наставники.про&nbsp;&mdash; цифоровая информационная платформа
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
        <article className="about__organization-text">
          <p className="about__organization-paragraph">
            &laquo;Старшие Братья Старшие Сестры&raquo; &nbsp; межрегиональная
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
        </article>
      </section>

      <section className="about__target" aria-label="Цель организации">
        <p className="about__target-text">
          Мы хотим, чтобы наставник был у каждого ребенка, который в&nbsp;нем
          нуждается
        </p>
      </section>
    </main>
  );
};

export default About;
