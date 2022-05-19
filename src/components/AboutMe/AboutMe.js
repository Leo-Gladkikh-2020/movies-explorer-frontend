import React from 'react';
import './AboutMe.css';
import aboutMe from '../../images/about-me.jpeg';

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title" id="about-me">Студент</h2>
      <div className="about-me__container">
        <img className="about-me__photo" src={aboutMe} alt="Фото студента" />
        <div className="about-me__info">
          <h3 className="about-me__name">Леонид</h3>
          <p className="about-me__profile">Фронтенд-разработчик, 35&nbsp;лет</p>
          <p className="about-me__description">Я&nbsp;начинающий фронтенд-разработчик, который долгое время работал интернет-маркетологом. Занимаясь продвижением сайтов, я&nbsp;постоянно сталкивался с&nbsp;тем, что функционал ресурсов оставляет желать лучшего. Так мой интерес к&nbsp;программированию перерос из&nbsp;хобби в&nbsp;настоящую профессию. Я&nbsp;хочу создавать современные, удобные сайты и&nbsp;приложения, которые не&nbsp;будут терять своей актуальности и&nbsp;которыми будут пользоваться большое количество людей.</p>
          <ul className="about-me__list">
            <li className="about-me__list-item">
              <a className="about-me__link" href="https://t.me/leogladkikh" target="_blank" rel="noreferrer">Telegram</a>
            </li>
            <li className="about-me__list-item">
              <a className="about-me__link" href="https://github.com/Leo-Gladkikh-2020" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}