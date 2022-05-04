import React from 'react';
import './Portfolio.css';

export default function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/Leo-Gladkikh-2020/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/Leo-Gladkikh-2020/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/Leo-Gladkikh-2020/react-mesto-api-full/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}