import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title" id="about-project">О&nbsp;проекте</h2>
      <div className="about-project__description">
        <article className="about-project__feature">
          <h3 className="about-project__subtitle">Дипломный проект включал 5&nbsp;этапов</h3>
          <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </article>
        <article className="about-project__feature">
          <h3 className="about-project__subtitle">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
          <p className="about-project__paragraph">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timeline timeline">
        <div className="timeline__content">
          <div className="timeline__content_backend timeline__content_backend-text">1&nbsp;неделя</div>
          <div className="timeline__content_frontend timeline__content_frontend-text">4&nbsp;недели</div>
        </div>
        <div className="timeline__description">
          <div className="timeline__description_backend">Back-end</div>
          <div className="timeline__description_frontend">Front-end</div>
        </div>
      </div>
    </section>
  );
}