import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormValidation } from '../../hooks/useFormValidation';
import './SearchForm.css';


export default function SearchForm({ onSearch }) {
  const { errors } = useFormValidation();
  const [search, setSearch] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  function handleSearchChange(event) {
    const input = document.getElementById('searchInput');
    input.setCustomValidity('');
    setSearch(event.target.value);
  }

  function handleCheckboxChange(checkboxStatus) {
    setCheckboxStatus(checkboxStatus);
    onSearch(search, checkboxStatus);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(search, checkboxStatus);
  }

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
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
          <span id="movie-error" className={`search-form__error ${errors.movie && 'search-form__error_visible'}`}>
            Нужно ввести ключевое слово
          </span>
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