import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export default function SavedMovies({ savedMoviesUser, onMovieDelete }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isSearchDone, setIsSearchDone] = React.useState(false);

  const [search, setSearch] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  function handleSearch(search, checkboxStatus) {
    setSearch(search);
    setCheckboxStatus(checkboxStatus);
    const searchResult = filterMovies(savedMoviesUser, search, checkboxStatus);
    setFilteredMovies(searchResult);
    setIsSearchDone(true);
  }

  useEffect(() => {
    if (filteredMovies.length > 0) {
      const searchResult = filterMovies(savedMoviesUser, search, checkboxStatus);
      setFilteredMovies(searchResult);
    }
  }, [checkboxStatus, filteredMovies.length, search, savedMoviesUser]);

  function filterMovies(movies, search, checkboxStatus) {
    let moviesToFilter = movies;
    let result;
    if (checkboxStatus) {
      moviesToFilter = moviesToFilter.filter((movie) => movie.duration <= 40);
    }
    result = moviesToFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    return result;
  }

  return (
    <section className="saved-movies">
      <SearchForm
        onSearch={handleSearch}
      />
      {isSearchDone
        ? filteredMovies.length > 0
          ? <MoviesCardList
            movies={filteredMovies}
            onMovieDelete={onMovieDelete}
          />
          : (
            <span className="saved-movies__nothing-found">
              Ничего не найдено
            </span>
          )
        : <MoviesCardList
          movies={savedMoviesUser}
          onMovieDelete={onMovieDelete}
        />
      }
    </section>
  )
}