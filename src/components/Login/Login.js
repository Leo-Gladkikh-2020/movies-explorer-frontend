import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';
import './Login.css';

export default function Login({ onLogin, isSuccess, errorStatus: { message, type } }) {
  const { resetForm, values, handleChange, errors, isValid } = useFormValidation();
  const isDisabled = !isValid || isSuccess;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    onLogin({
      email: values.email,
      password: values.password
    });
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="E-mail"
            minLength="1"
            maxLength="30"
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span id="email-error" className={`login__form_error ${errors.email && 'login__form_error_visible'}`}>
            {errors.email ? 'Не корректный e-mail адрес' : ''}
          </span>
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
            value={values.password || ''}
            onChange={handleChange}
          />
          <span id="password-error" className={`login__form_error ${errors.password && 'login__form_error_visible'}`}>
            {errors.password ? 'Пароль должен содержать от шести до двадцати символов' : ''}
          </span>
        </label>

        <span className={`form__error form__error_type_${type}`}>{message}</span>

        <button className={`login__form_btn ${!isValid && 'login__form_btn_disabled'}`} disabled={isDisabled} type="submit">
          Войти
        </button>
        <p className="login__form_signup">Ещё не зарегистрированы?
          <Link to="signup" className="login__form_link"> Регистрация</Link>
        </p>
      </form>
    </section>
  );
}