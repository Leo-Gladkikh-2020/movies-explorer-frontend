import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({
  movies,
  savedMoviesUser,
  onMovieSave,
  onMovieDelete,
  isMoreButtonVisible = false,
  onMoreButtonClick
}) {
  const moreButtonClassName = `movies__more-btn ${isMoreButtonVisible && "movies__more-btn_visible"}`;

  return (
    <section className="movies-card-content">
      <ul className="movies-card-list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id || movie.movieId}
            movie={movie}
            savedMoviesUser={savedMoviesUser}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
        ))}
      </ul>
      <button
        className={moreButtonClassName}
        onClick={onMoreButtonClick}
        type="button">
        Ещё
      </button>
    </section>
  )
}