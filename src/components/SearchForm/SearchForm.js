import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm({ onSearch }) {
  const location = useLocation();
  const [error, setError] = useState('');
  const [search, setSearch] = useState(location.pathname === '/movies' ? localStorage.getItem('search') || '' : '');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  function handleSearchChange(event) {
    setError('');
    setSearch(event.target.value);
  }

  function handleCheckboxChange(checkboxStatus) {
    setCheckboxStatus(checkboxStatus);
    onSearch(search, checkboxStatus);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (search === '') {
      setError('Нужно ввести ключевое слово')
    } else {
      onSearch(search, checkboxStatus);
      setError('');
    }
    location.pathname === '/movies' && localStorage.setItem('search', search);
  }

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit} noValidate>
        <fieldset className="search-form__form">
          <input
            className="search-form__input"
            type="text"
            id="searchInput"
            name="movie"
            placeholder="Фильм"
            maxLength="100"
            required
            value={search || ''}
            onChange={handleSearchChange}
          />
          <span id="movie-error" className='search-form__error search-form__error_visible'>{error}</span>
          <button className="search-form__btn" type="submit"></button>
        </fieldset>
        <fieldset className="search-form__checkbox">
          <span className="search-form__span">Короткометражки</span>
          <FilterCheckbox
            checkboxStatus={checkboxStatus}
            onCheckboxChange={handleCheckboxChange} />
        </fieldset>
      </form>
    </section>
  )
}