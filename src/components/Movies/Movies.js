import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import './Movies.css';

export default function Movies({
  savedMoviesUser,
  onMovieSave,
  onMovieDelete
}) {
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [initialValue, setInitialValue] = useState(0);
  const [moreBtnClick, setMoreBtnClick] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(false);
  const currentViewport = document.documentElement.clientWidth;

  const [setSearch, setsetSearch] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  function handleSearch(setSearch, checkboxStatus) {
    setMoviesToRender([]);
    setsetSearch(setSearch);
    setCheckboxStatus(checkboxStatus);

    const initialMoviesInLocalStorage = JSON.parse(localStorage.getItem('initialMovies'));

    if (!initialMoviesInLocalStorage) {
      setIsSearching(true);
      moviesApi.getMovies()
        .then((data) => {
          setInitialMovies(data);
          localStorage.setItem('initialMovies', JSON.stringify(data));
        })
        .catch(err => console.log(err))
        .finally(() => {
          setIsSearching(false);
        })
    } else {
      setInitialMovies(initialMoviesInLocalStorage);
    }
  }

  function filterMovies(movies, setSearch, checkboxStatus) {
    let moviesToFilter = movies;
    let result;

    if (checkboxStatus) {
      moviesToFilter = moviesToFilter.filter((movie) => movie.duration <= 40);
    }

    result = moviesToFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(setSearch.toLowerCase()) !== -1;
    })
    return result;
  }

  useEffect(() => {
    if (initialMovies.length > 0) {
      const searchResults = filterMovies(initialMovies, setSearch, checkboxStatus);
      setFilteredMovies(searchResults);
      setIsSearchDone(true);
    }
  }, [initialMovies, setSearch, checkboxStatus]);

  useEffect(() => {
    if (currentViewport > 320 && currentViewport <= 480) {
      setInitialValue(12);
      setMoreBtnClick(3);
    } else if (currentViewport > 481 && currentViewport <= 768) {
      setInitialValue(8);
      setMoreBtnClick(2);
    } else if (currentViewport > 768) {
      setInitialValue(5);
      setMoreBtnClick(1);
    }
  }, [currentViewport]);

  useEffect(() => {
    if (filteredMovies.length > 0) {
      if (filteredMovies.length > initialValue) {
        setMoviesToRender(filteredMovies.slice(0, initialValue));
        setIsMoreButtonVisible(true);
      } else {
        setMoviesToRender(filteredMovies);
      }
    }
  }, [filteredMovies, initialValue]);

  function handleMoreButtonClick() {
    setMoviesToRender((state) => filteredMovies.slice(0, state.length + moreBtnClick));
  }

  useEffect(() => {
    if (moviesToRender.length === filteredMovies.length) {
      setIsMoreButtonVisible(false);
    }
  }, [moviesToRender, filteredMovies]);

  return (
    <section className="movies">
      <SearchForm
        onSearch={handleSearch}
      />
      {isSearching
        ? <Preloader />
        : isSearchDone
          ? moviesToRender.length > 0
            ? <MoviesCardList
              movies={moviesToRender}
              savedMoviesUser={savedMoviesUser}
              onMovieSave={onMovieSave}
              onMovieDelete={onMovieDelete}
              isMoreButtonVisible={isMoreButtonVisible}
              onMoreButtonClick={handleMoreButtonClick}
            />
            : (
              <span className="movies__nothing-found">
                Ничего не найдено
              </span>
            )
          : ("")
      }
    </section>
  )
}