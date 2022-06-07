import React from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormValidation } from '../../hooks/useFormValidation';

import './SearchForm.css';

export default function SearchForm(props) {
  const { errors, values, handleChange } = useFormValidation();

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={props.onSubmitInput}>
        <fieldset className="search-form__form">
          <input
            className="search-form__input"
            type="text"
            id="movie"
            name="movie"
            placeholder="Фильм"
            maxLength="100"
            required
            value={values.movie || ''}
            onChange={handleChange}
          />
          <span id="movie-error" className={`search-form__error ${errors.movie && 'search-form__error_visible'}`}>
            Нужно ввести ключевое слово
          </span>
          <button className="search-form__btn" type="submit"></button>
        </fieldset>
        <fieldset className="search-form__checkbox">
          <span className="search-form__span">Короткометражки</span>
          <FilterCheckbox
            short={props.short}
            handleShort={props.handleShort}
          />
        </fieldset>
      </form>
    </section>
  );
}