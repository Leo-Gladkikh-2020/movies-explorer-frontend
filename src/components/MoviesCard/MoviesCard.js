import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';
import conversionDuration from '../../utils/constants';

export default function MoviesCard({ movie, savedMoviesUser, onMovieSave, onMovieDelete }) {

  const isSaved = movie.id && savedMoviesUser.some((m) => m.movieId === movie.id);

  function handleSaveMovie() {
    if (isSaved) {
      onMovieDelete(savedMoviesUser.filter((m) => m.movieId === movie.id)[0]);
    } else if (!isSaved) {
      onMovieSave(movie);
    }
  }

  function handleDeleteMovie() {
    onMovieDelete(movie);
  }

  return (
    <li className="movie-card">
      <a
        href={movie.trailerLink}
        rel="noreferrer"
        target="_blank"
      >
        <Switch>
          <Route path="/movies">
            <img
              className="movie-card__image"
              src={`https://api.nomoreparties.co${movie.image.url}`}
              alt={movie.nameRU}
            />
          </Route>
          <Route path="/saved-movies">
            <img
              className="movie-card__image"
              src={movie.image}
              alt={movie.nameRU}
            />
          </Route>
        </Switch>
      </a>
      <div className="movie-card__header">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <span className="movie-card__duration">{conversionDuration(movie.duration)}</span>
        </div>
        <Switch>
          <Route path="/movies">
            <button
              className={`movie-card__btn ${isSaved && "movie-card__btn_liked"}`}
              onClick={handleSaveMovie}
              type="button"
            ></button>
          </Route>
          <Route path="/saved-movies">
            <button
              className="movie-card__btn_saved"
              onClick={handleDeleteMovie}
              type="button"
            ></button>
          </Route>
        </Switch>
      </div>
    </li>
  )
}