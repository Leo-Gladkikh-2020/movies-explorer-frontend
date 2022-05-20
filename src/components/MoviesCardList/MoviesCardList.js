import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ movies }) {
  return (
    <ul className="movies-card-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          saved={false}
        />
      ))}
    </ul>
  )
}