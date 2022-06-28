import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';
import './Register.css';

export default function Register({ onRegister, isSuccess, errorStatus: { message, type } }) {
  const { resetForm, values, handleChange, errors, isValid } = useFormValidation();
  const isDisabled = !isValid || isSuccess;

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
            minLength="3"
            maxLength="30"
            required
            value={values.name || ''}
            onChange={handleChange}
          />
          <span id="name-error" className={`register__form_error ${errors.name && 'register__form_error_visible'}`}>
            {errors.name ? 'Имя должно содержать от трёх до тридцати символов' : ''}
          </span>
        </label>

        <label className="register__form_label">
          <span className="register__form_label-text">E-mail</span>
          <input
            className="register__form_input register__form_input-email"
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="E-mail"
            minLength="1"
            maxLength="30"
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span id="email-error" className={`register__form_error ${errors.email && 'register__form_error_visible'}`}>
            {errors.email ? 'Не корректный e-mail адрес' : ''}
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
            minLength="6"
            maxLength="20"
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span id="password-error" className={`register__form_error ${errors.password && 'register__form_error_visible'}`}>
            {errors.password ? 'Пароль должен содержать от шести до двадцати символов' : ''}
          </span>
        </label>

        <span className={`form__error form__error_type_${type}`}>{message}</span>

        <button className={`register__form_btn ${!isValid && 'register__form_btn_disabled'}`} disabled={isDisabled} type="submit">
          Зарегистрироваться
        </button>
        <p className="register__form_signin">Уже зарегистрированы?
          <Link to="signin" className="register__form_link"> Войти</Link>
        </p>
      </form>
    </section>
  );
}