import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList(props) {
  const location = useLocation();

  return (
    <ul className="movies-card-list">
      {props.movies.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          saved={false}
        />
      ))}
    </ul>
  )
}