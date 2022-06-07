import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import './Movies.css';

export default function Movies(props) {

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={props.movies} />
      <button className="movies__more-btn">Ещё</button>
    </section>
  )
}