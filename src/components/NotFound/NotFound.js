import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const history = useHistory();

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не&nbsp;найдена</p>
      <button className="not-found__back" onClick={() => history.goBack()}>Назад</button>
    </section>
  );
}