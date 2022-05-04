
import React from 'react';
import './NavTab.css';

export default function NavTab() {
  return (
    <nav className="nav-tab">
      <a className="nav-tab__link" href="#about-project">О проекте</a>
      <a className="nav-tab__link" href="#techs">Технологии</a>
      <a className="nav-tab__link" href="#about-me">Студент</a>
    </nav>
  );
}