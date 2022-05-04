import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ isLoggedIn }) {
  return (
    <nav className="navigation">
      <NavLink className="navigation__registration" to="/signup">Регистрация</NavLink>
      <NavLink className="navigation__login" to="/signin">Войти</NavLink>
    </nav >
  );
}