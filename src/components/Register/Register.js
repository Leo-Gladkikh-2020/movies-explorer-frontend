import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  return (
    <section className="register">
      <form className="form" name="register" noValidate>
        <Link to="/" className="header__logo" />
        <h1 className="form__title">Добро пожаловать!</h1>

        <label className="form__label">
          <span className="form__label-text">Имя</span>
          <input
            className="form__input form__input_type_name"
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="form__error" id="name-error"></span>
        </label>

        <label className="form__label">
          <span className="form__label-text">E-mail</span>
          <input
            className="form__input form__input_type_email"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="form__error" id="email-error"></span>
        </label>

        <label className="form__label">
          <span className="form__label-text">Пароль</span>
          <input
            className="form__input form__input_type_password"
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            minLength="5"
            maxLength="15"
            required
          />
          <span className="form__error" id="password-error">Что-то пошло не так...</span>
        </label>

        <button className="form__btn" type="submit">Зарегистрироваться</button>
        <p className="form__signin">Уже зарегистрированы?
          <Link to="signin" className="form__link"> Войти</Link>
        </p>
      </form>
    </section>
  );
}