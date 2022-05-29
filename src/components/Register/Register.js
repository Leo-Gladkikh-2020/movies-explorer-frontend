import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleRegister(name, email, password);
  }

  return (
    <section className="register">
      <form className="register__form" name="register" onSubmit={handleSubmit}>
        <Link to="/" className="register__form_logo" />
        <h1 className="register__form_title">Добро пожаловать!</h1>

        <label className="register__form_label">
          <span className="register__form_label-text">Имя</span>
          <input
            className="register__form_input register__form_input-name"
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            minLength="1"
            maxLength="30"
            required
            value={name || ''}
            onChange={handleChangeName}
          />
          <span className="register__form_error" id="name-error"></span>
        </label>

        <label className="register__form_label">
          <span className="register__form_label-text">E-mail</span>
          <input
            className="register__form_input register__form_input-email"
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
          <span className="register__form_error" id="email-error"></span>
        </label>

        <label className="register__form_label">
          <span className="register__form_label-text">Пароль</span>
          <input
            className="register__form_input register__form_input-password"
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
          <span className="register__form_error" id="password-error"></span>
        </label>

        <button className="register__form_btn" type="submit">Зарегистрироваться</button>
        <p className="register__form_signin">Уже зарегистрированы?
          <Link to="signin" className="register__form_link"> Войти</Link>
        </p>
      </form>
    </section>
  );
}