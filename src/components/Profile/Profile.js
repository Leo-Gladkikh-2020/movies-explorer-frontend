import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import './Profile.css';

export default function Profile({ onUpdateProfile, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { resetForm, values, setValues, handleChange, errors, isValid } = useFormValidation();
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues({
        name: currentUser.name,
        email: currentUser.email
      });
    }
  }, [resetForm, currentUser, setValues]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateProfile({
      name: values.name,
      email: values.email
    });
  }

  function handleChangeUser(event) {
    event.preventDefault();
    setDisabled(false);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>

        <label className="profile__label">
          <span className="profile__label-text">Имя</span>
          <input
            className="profile__input profile__input_type_name"
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            minLength="1"
            maxLength="30"
            required
            value={values.name || ''}
            disabled={disabled ? true : false}
            onChange={handleChange}
          />
          <span id="name-error" className={`profile__error ${errors.name && 'profile__error_visible'}`}>
            {errors.name}
          </span>
        </label>

        <label className="profile__label">
          <span className="profile__label-text">E-mail</span>
          <input
            className="profile__input profile__input_type_email"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            minLength="1"
            maxLength="30"
            required
            value={values.email || ''}
            disabled={disabled ? true : false}
            onChange={handleChange}
          />
          <span id="email-error" className={`profile__error ${errors.email && 'profile__error_visible'}`}>
            {errors.email}
          </span>
        </label>

        {
          disabled ?
            <button className="profile__form_edit-btn" type="submit" onClick={handleChangeUser}>Редактировать</button>
            :
            <button className="profile__form_edit-btn" disabled={!isValid} onClick={handleSubmit}>Сохранить</button>
        }

      </form>
      <Link className="profile__btn-logout" to="/" onClick={onSignOut}>Выйти из аккаунта</Link>
    </section >
  );
}