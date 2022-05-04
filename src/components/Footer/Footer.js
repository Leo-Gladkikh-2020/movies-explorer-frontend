import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; Леонид Гладких {(new Date().getFullYear())}</p>
        <nav>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a className="footer__link" href="https://practicum.yandex.ru/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__list-item">
              <a className="footer__link" href="https://github.com/Leo-Gladkikh-2020" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className="footer__list-item">
              <a className="footer__link" href="https://t.me/leogladkikh" target="_blank" rel="noreferrer">Telegram</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}