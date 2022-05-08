import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies() {
  return (
    <section className="save-movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}