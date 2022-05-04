import React from 'react';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logoHeader from '../../images/logo.svg';

export default function Header({ isLoggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header header_colored">
          <div className="header__container">
            <Link to="/">
              <img src={logoHeader} alt="Логотип сайта" />
            </Link>
            <Navigation isLoggedIn={isLoggedIn} isHeaderColored={true} />
          </div>
        </header>
      </Route>
    </Switch>
  );
}