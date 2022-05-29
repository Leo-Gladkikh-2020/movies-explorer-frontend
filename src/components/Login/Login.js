import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleLogin(email, password);
  }

  return (
    <section className="login">
      <form className="login__form" name="login" onSubmit={handleSubmit}>
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
            value={email || ''}
            onChange={handleChangeEmail}
          />
          <span className="login__form_error" id="email-error"></span>
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
            value={password || ''}
            onChange={handleChangePassword}
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