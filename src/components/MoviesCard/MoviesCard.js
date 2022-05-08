import React from 'react';
import { Route, Switch } from 'react-router-dom';
import moviesCard from '../../images/movies-card.png';
import './MoviesCard.css';

export default function MoviesCard() {
  return (
    <li className="movies-card">
      <img className="movies-card__image" src={moviesCard} alt="Обложка фильма" />
      <div className="movies-card__header">
        <div className="movies-card__info">
          <h2 className="movies-card__title">Бег это свобода</h2>
          <span className="movies-card__duration">1ч&nbsp;44м</span>
        </div>
        <Switch>
          <Route path="/movies">
            <button className="movies-card__btn movies-card__btn_type_like" type="button"></button>
          </Route>
          <Route path="/saved-movies">
            <button className="movies-card__btn movies-card__btn_type_delete" type="button"></button>
          </Route>
        </Switch>
      </div>
    </li>
  );
}