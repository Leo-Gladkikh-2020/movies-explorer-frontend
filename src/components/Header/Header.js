import React from 'react';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';

export default function Header() {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header header__color">
          <div className="header__container">
            <Link to="/" className="header__logo" />
            <div className="header__navigation">
              <Link className="header__registration hover-link" to="/signup">Регистрация</Link>
              <Link className="header__login hover-link" to="/signin">Войти</Link>
            </div>
          </div>
        </header>
      </Route>
      <Route path="/(movies|saved-movies|profile)">
        <header className="header">
          <div className="header__container">
            <Link to="/" className="header__logo" />
            <div className="header__navigation-movies">
              <Link to="/movies" className="header__movies hover-link">Фильмы</Link>
              <Link to="/saved-movies" className="header__saved-movies hover-link">Сохранённые фильмы</Link>
            </div>
            <div className="header__navigation-profile">
              <Link to="/profile" className="header__profile hover-link">Аккаунт<span className="header__profile-icon"></span></Link>
            </div>
          </div>
        </header>
      </Route>
    </Switch>
  );
}