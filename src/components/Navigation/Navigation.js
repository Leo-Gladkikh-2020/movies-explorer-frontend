import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ loggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  return (
    <nav className="navigation">
      {!loggedIn ? (
        <div className="navigation__authorization navigation-desctop">
          <Link className="navigation__registration hover-link" to="/signup">Регистрация</Link>
          <Link className="navigation__login hover-link" to="/signin">Войти</Link>
        </div>
      ) : (
        <>
          <div className="navigation__movies navigation-desctop">
            <Link className="navigation__movies-link hover-link" to="/movies">Фильмы</Link>
            <Link className="navigation__saved-movies-link hover-link" to="/saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__profile navigation-desctop">
            <Link className="navigation__profile-link hover-link">Аккаунт<span className="navigation__profile-icon" to="/profile"></span></Link>
          </div>
          <button className="navigation__menu-icon" onClick={handleMenuOpen} type="button"></button>
        </>
      )}

    </nav>
  );
}