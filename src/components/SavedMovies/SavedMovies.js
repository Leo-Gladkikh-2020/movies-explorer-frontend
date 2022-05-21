import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies() {

  const movies = [
    {
      _id: 1,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isSaved: true,
    },
    {
      _id: 2,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isSaved: true,
    },
    {
      _id: 3,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isSaved: true,
    },
  ]

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </section>
  )
}