import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header path="/" />
          <Main>
            <LandingPage />
          </Main>
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Main>
            <Movies />
          </Main>
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <Main>
            <SavedMovies />
          </Main>
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Main>
            <Profile />
          </Main>
        </Route>
        <Route path="/signin">
          <Main>
            <Login />
          </Main>
        </Route>
        <Route path="/signup">
          <Main>
            <Register />
          </Main>
        </Route>
        <Route path="*">
          <Main>
            <NotFound />
          </Main>
        </Route>
      </Switch>
    </div>
  );
}