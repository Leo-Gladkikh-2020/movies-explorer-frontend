import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard({
  movie,
  savedMoviesUser,
  onMovieSave,
  onMovieDelete
}) {

  const location = useLocation();
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

  function handleDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  return (
    <li className="movie-card">
      <a href={movie.trailerLink} rel="noreferrer" target="_blank">
        <img
          className="movie-card__image"
          src={location.pathname === '/movies'
            ? `https://api.nomoreparties.co${movie.image.url}`
            : movie.image}
          alt={movie.nameRU} />
      </a>
      <div className="movie-card__header">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <span className="movie-card__duration">{handleDuration(movie.duration)}</span>
        </div>
        {
          location.pathname === '/movies'
            ? (
              <button
                className={movie.isSaved ? "movie-card__btn movie-card__btn_liked" : "movie-card__btn"}
                type="button"
                onClick={isSaved ? handleDeleteMovie : handleSaveMovie}>
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