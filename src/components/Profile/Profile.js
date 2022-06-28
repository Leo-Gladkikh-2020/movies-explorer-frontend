import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import './Profile.css';

export default function Profile({ onProfileEdit, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, setValues, resetForm } = useFormValidation();
  const [isActived, setIsActived] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email
      })
    }
  }, [currentUser, setValues])

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, false);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    setIsActived(false);
    onProfileEdit({
      name: values.name,
      email: values.email
    });
  }

  function handleChangeUser(event) {
    event.preventDefault();
    resetForm(currentUser, {}, false);
    setIsActived(true);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>

        <label className="profile__label">
          <span className="profile__label-text">Имя</span>
          <input
            className="profile__input profile__input_type_name"
            type="text"
            id="name"
            name="name"
            minLength="3"
            maxLength="30"
            required
            value={values.name || ''}
            onChange={handleChange}
            disabled={!isActived}
          />
        </label>

        <span id="name-error" className={`profile__error ${errors.name && 'profile__error_visible'}`}>
          {errors.name ? 'Имя должно содержать от трёх до тридцати символов' : ''}
        </span>

        <label className="profile__label">
          <span className="profile__label-text">E-mail</span>
          <input
            className="profile__input profile__input_type_email"
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            minLength="1"
            maxLength="30"
            required
            value={values.email || ''}
            onChange={handleChange}
            disabled={!isActived}
          />
        </label>
        <span id="email-error" className={`profile__error ${errors.email && 'profile__error_visible'}`}>
          {errors.email ? 'Не корректный e-mail адрес' : ''}
        </span>

        {!isActived
          ? <button className="profile__form_edit-btn" type="button" onClick={handleChangeUser}>Редактировать</button>
          : <button className="profile__form_edit-btn" type="submit" disabled={!isValid}>Сохранить</button>
        }

      </form>
      <Link className="profile__btn-logout" to="/" onClick={onSignOut}>Выйти из аккаунта</Link>
    </section >
  );
}