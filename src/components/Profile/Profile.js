import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
export default function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Леонид!</h1>
      <form className="profile__form">

        <label className="profile__label">
          <span className="profile__label-text">Имя</span>
          <input
            className="profile__input profile__input_type_name"
            type="text"
            id="name"
            name="name"
            placeholder="Леонид"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="profile__error" id="name-error"></span>
        </label>

        <label className="profile__label">
          <span className="profile__label-text">E-mail</span>
          <input
            className="profile__input profile__input_type_email"
            type="email"
            id="email"
            name="email"
            placeholder="leogladkikh@yandex.ru"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="profile__error" id="email-error"></span>
        </label>

        <button className="profile__form_edit-btn" type="submit">Редактировать</button>
      </form>
      <Link className="profile__btn-logout" to="/">Выйти из аккаунта</Link>
    </section >
  );
}