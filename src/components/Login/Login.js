import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <section className="login">
      <form className="login__form" name="login">
        <Link to="/" className="login__form_logo" />
        <h1 className="login__form_title">Рады видеть!</h1>

        <label className="login__form_label">
          <span className="login__form_label-text">E-mail</span>
          <input
            className="login__form_input login__form_input-email"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="login__form_error" id="email-error">Неверный формат email</span>
        </label>

        <label className="login__form_label">
          <span className="login__form_label-text">Пароль</span>
          <input
            className="login__form_input login__form_input-password"
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            minLength="5"
            maxLength="15"
            required
          />
          <span className="login__form_error" id="password-error"></span>
        </label>

        <button className="login__form_btn" type="submit">Войти</button>
        <p className="login__form_signup">Ещё не зарегистрированы?
          <Link to="signup" className="login__form_link"> Регистрация</Link>
        </p>
      </form>
    </section>
  );
}