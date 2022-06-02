import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';
import './Register.css';

export default function Register({ onRegister }) {
  const { resetForm, values, handleChange, errors, isValid } = useFormValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password
    });
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
            value={values.name || ''}
            onChange={handleChange}
          />
          <span id="name-error" className={`register__form_error ${errors.name && 'register__form_error_visible'}`}>
            {errors.name}
          </span>
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
            value={values.email || ''}
            onChange={handleChange}
          />
          <span id="email-error" className={`register__form_error ${errors.email && 'register__form_error_visible'}`}>
            {errors.email}
          </span>
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
            value={values.password || ''}
            onChange={handleChange}
          />
          <span id="password-error" className={`register__form_error ${errors.password && 'register__form_error_visible'}`}>
            {errors.password}
          </span>
        </label>

        <button className={`register__form_btn ${!isValid && 'register__form_btn_disabled'}`} disabled={!isValid} type="submit">
          Зарегистрироваться
        </button>
        <p className="register__form_signin">Уже зарегистрированы?
          <Link to="signin" className="register__form_link"> Войти</Link>
        </p>
      </form>
    </section>
  );
}