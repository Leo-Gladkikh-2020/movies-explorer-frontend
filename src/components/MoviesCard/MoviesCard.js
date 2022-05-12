import React from 'react';
import { Route, Switch } from 'react-router-dom';
import moviesCard from '../../images/movies-card.png';
import './MoviesCard.css';

export default function MoviesCard() {
  return (
    <li className="movie-card">
      <Switch>
        <Route path="/movies">
          <img className="movie-card__image" src={moviesCard} alt="Обложка фильма" />
          <div className="movie-card__header">
            <div className="movie-card__info">
              <h2 className="movie-card__title">Бег это свобода</h2>
              <span className="movie-card__duration">1ч&nbsp;44м</span>
            </div>
            <button className="movie-card__btn movie-card__btn_type_like" type="button"></button>
          </div>
        </Route>
        <Route path="/saved-movies">
          <img className="movie-card__image" src={moviesCard} alt="Обложка фильма" />
          <div className="movie-card__header">
            <div className="movie-card__info">
              <h2 className="movie-card__title">Бег это свобода</h2>
              <span className="movie-card__duration">1ч&nbsp;44м</span>
            </div>
            <button className="movie-card__btn movie-card__btn_type_delete" type="button"></button>
          </div>
        </Route>
      </Switch>
    </li>
  );
}