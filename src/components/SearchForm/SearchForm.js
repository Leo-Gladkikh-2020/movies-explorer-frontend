import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__input-wrap">
          <input className="search-form__input" type="text" name="movie" placeholder="Фильм"></input>
          <button className="search-form__submit" type="submit">Найти</button>
        </div>
        <div className="search-form__filter">
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
}