import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then(userData => {
          setCurrentUser(userData);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn]);

  function handleUpdateUser(data) {
    setIsLoading(true);
    mainApi.changeUserInfo(data)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then(data => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem('token', data.token);
          history.push('/movies');
        }
      })
      .catch(err => console.log(err))
  }

  function handleRegister(data) {
    auth.register(data)
      .then(() => {
        handleLogin({ email: data.email, password: data.password });
        history.push('/movies');
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth.checkToken(token)
        .then(res => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch(err => console.log(err))
    }
  }, []);

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} />

        <Switch>

          <Route exact path="/">
            <Main>
              <LandingPage />
            </Main>
          </Route>

          <Route path="/movies">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Movies}
            />
          </Route>

          <Route path="/saved-movies">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={SavedMovies}
            />
          </Route>

          <Route path="/profile">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Profile}
              onUpdateUser={handleUpdateUser}
              onSignOut={signOut}
            />
          </Route>

          <Route path="/signin">
            <Main>
              <Login onLogin={handleLogin} />
            </Main>
          </Route>

          <Route path="/signup">
            <Main>
              <Register onRegister={handleRegister} />
            </Main>
          </Route>

          <Route path="*">
            <Main>
              <NotFound />
            </Main>
          </Route>

        </Switch>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}