import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

export default function SavedMovies(props) {

  const movies = [
    {
      _id: 1,
      image: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      nameRU: 'Бег это свобода',
      duration: true,
      isSaved: true, // false
    },
  ]

  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </section>
  )
}