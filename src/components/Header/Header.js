import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header({ loggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header header__color">
          <div className="header__container">
            <Link to="/" className="header__logo" />
            <Navigation loggedIn={loggedIn} headerColor={true} />
          </div>
        </header>
      </Route>
      <Route path="/(movies|saved-movies|profile)">
        <header className="header">
          <div className="header__container">
            <Link to="/" className="header__logo" />
            <Navigation loggedIn={loggedIn} headerColor={false} />
          </div>
        </header>
      </Route>
    </Switch>
  );
}