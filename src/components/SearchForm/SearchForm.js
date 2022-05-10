import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <fieldset className="search-form__form">
          <input
            className="search-form__input"
            type="text"
            id="movie"
            name="movie"
            placeholder="Фильм"
            minLength="3"
            maxLength="100"
            required
          />
          <span className="search-form__error" id="movie-error"></span>
          <button className="search-form__btn" type="submit"></button>
        </fieldset>
        <fieldset className="search-form__checkbox">
          <span className="search-form__span">Короткометражки</span>
          <FilterCheckbox />
        </fieldset>
      </form>
    </section>
  );
}