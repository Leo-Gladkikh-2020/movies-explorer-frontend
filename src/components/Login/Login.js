import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <section className="login">
      <form className="form" name="login" noValidate>
        <Link to="/" className="header__logo" />
        <h1 className="form__title">Рады видеть!</h1>

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
          <span className="form__error" id="email-error">Неверный формат email</span>
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
          <span className="form__error" id="password-error"></span>
        </label>

        <button className="form__btn" type="submit">Войти</button>
        <p className="form__signin">Ещё не зарегистрированы?
          <Link to="signup" className="form__link"> Регистрация</Link>
        </p>
      </form>
    </section>
  );
}