import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navigation">
      {!loggedIn ? (
        <div className="navigation__authorization">
          <Link className="navigation__registration hover-link">Регистрация</Link>
          <Link className="navigation__login hover-link" to="/signin">Войти</Link>
        </div>
      ) : (
        <>
          <div className="navigation__movies navigation-desctop">
            <Link className="navigation__movies-link hover-link" to="/movies">Фильмы</Link>
            <Link className="navigation__saved-movies-link hover-link" to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__profile navigation-desctop">
            <Link to="/profile" className="navigation__profile-link hover-link">Аккаунт<span className="navigation__profile-icon"></span></Link>
          </div>
          <button className="navigation__menu-icon" onClick={handleMenuOpen} type="button"></button>
        </>
      )}

      <nav className={`navigation__mobile-menu ${isMenuOpen ? "navigation__mobile-menu_opened" : ""}`}>
        <div className="navigation__mobile-container">
          <div className="navigation__mobile-link">
            <NavLink exact to="/" className="menu_link hover-link" onClick={handleMenuClose}>Главная</NavLink>
            <NavLink to="/movies" className="menu_link hover-link" activeClassName="menu_link-active" onClick={handleMenuClose}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className="menu_link hover-link" activeClassName="menu_link-active" onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          </div>
          <Link to="/profile" className="navigation__profile-link hover-link" onClick={handleMenuClose}>
            <p className="navigation__profile-text">Аккаунт</p>
            <span className="navigation__profile-icon"></span>
          </Link>
        </div>
        <button className="navigation__menu-close hover-link" onClick={handleMenuClose}></button>
      </nav>
    </nav>
  );
}