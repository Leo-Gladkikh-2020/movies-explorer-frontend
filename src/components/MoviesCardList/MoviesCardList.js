import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <Switch>
          <Route path="/movies">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </Route>
          <Route path="/saved-movies">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </Route>
        </Switch>
      </ul>
      <button className="movies-card-list__more-btn">Ещё</button>
    </section>
  );
}