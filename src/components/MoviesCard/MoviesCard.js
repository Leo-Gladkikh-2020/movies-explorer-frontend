import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard(props) {
  const location = useLocation();

  function handleDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  function handleSaveMovie() {

  }

  function handleDeleteMovie() {
    props.deleteMovie(props.movie)
  }

  return (
    <li className="movie-card">
      <a href={props.movie.trailerLink} rel="noreferrer" target="_blank">
        <img
          className="movie-card__image"
          src={location.pathname === '/movies'
            ? `https://api.nomoreparties.co${props.movie.image.url}`
            : props.movie.image}
          alt={props.movie.nameRU} />
      </a>
      <div className="movie-card__header">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{props.movie.nameRU}</h2>
          <span className="movie-card__duration">{handleDuration(props.movie.duration)}</span>
        </div>
        {
          location.pathname === '/movies'
            ? (
              <button
                className={props.movie.isSaved ? "movie-card__btn movie-card__btn_liked" : "movie-card__btn"}
                type="button"
                onClick={props.isSavedMovies ? handleDeleteMovie : handleSaveMovie}>
              </button>
            )
            : (
              <button
                className="movie-card__btn movie-card__btn_saved"
                type="button"
                onClick={handleDeleteMovie}>
              </button>
            )
        }
      </div>
    </li>
  )
}