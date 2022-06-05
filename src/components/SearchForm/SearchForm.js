import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormValidation } from '../../hooks/useFormValidation';
import './SearchForm.css';

export default function SearchForm({ onSubmitInput, short, handleShort }) {
  const { values, handleChange } = useFormValidation();

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={onSubmitInput}>
        <fieldset className="search-form__form">
          <input
            className="search-form__input"
            type="search"
            id="movie"
            name="movie"
            placeholder="Фильм"
            minLength="3"
            maxLength="100"
            required
            value={values.movie || ''}
            onChange={handleChange}
          />
          <span className="search-form__error" id="movie-error"></span>
          <button className="search-form__btn" type="submit"></button>
        </fieldset>
        <fieldset className="search-form__checkbox">
          <span className="search-form__span">Короткометражки</span>
          <FilterCheckbox onShort={short} handleShort={handleShort} />
        </fieldset>
      </form>
    </section>
  );
}