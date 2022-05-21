import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

export default function Movies() {

  const movies = [
    {
      _id: 1,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isLiked: true,
    },
    {
      _id: 2,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isLiked: false,
    },
    {
      _id: 3,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isLiked: true,
    },
    {
      _id: 4,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isLiked: false,
    },
    {
      _id: 5,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isLiked: true,
    },
    {
      _id: 6,
      poster: 'https://a-a-ah-ru.s3.amazonaws.com/uploads/items/94462/123032/large_57fea587ab572368559604.jpg',
      title: 'Бег это свобода',
      duration: '1ч 44м',
      isLiked: false,
    },
  ]

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <button className="movies__more-btn">Ещё</button>
    </section>
  )
}