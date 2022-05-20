import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie }) {
  return (
    <li className="movie-card">
      <img className="movie-card__image" src={movie.poster} alt={movie.title} />
      <div className="movie-card__header">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{movie.title}</h2>
          <span className="movie-card__duration">{movie.duration}</span>
        </div>
        {
          !movie.isSaved
            ?
            <button className={movie.isLiked ? "movie-card__btn movie-card__btn_liked" : "movie-card__btn"} type="button"></button>
            :
            <button className="movie-card__btn movie-card__btn_saved" type="button"></button>
        }
      </div>
    </li>
  )
}