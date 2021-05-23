import React from "react";
import "./About.css";

const About = ({ mix }) => {
  return (
    <main className={`about ${mix}`}>
      <section className="about__intro" aria-label="Кратко о проекте">
        <div className="about__intro-text">
          Наставники.про&nbsp;&mdash; цифоровая информационная платформа
          огрганизации &laquo;Старшие Братья Старшие Сестры&raquo;. Созданная
          для поддержки наставников программы.
        </div>
      </section>
    </main>
  );
};

export default About;
