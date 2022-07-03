import React, { useState, useEffect } from 'react';
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const [savedMoviesUser, setsavedMoviesUser] = useState([]);

  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  const [isErrorRegister, setIsErrorRegister] = useState({});
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState({});
  const [isSuccessProfile, setIsSuccessProfile] = useState(false);
  const [isErrorProfile, setIsErrorProfile] = useState({});

  // регистрация
  function handleRegister(data) {
    setIsSuccessRegister(true);
    auth.register(data)
      .then(() => {
        handleLogin({
          email: data.email,
          password: data.password
        });
        history.push('/movies');
      })
      .catch(err => {
        if (err.statusCode === 400) {
          setIsErrorRegister({
            message: 'Переданы некорректные данные пользователя',
            type: 'error'
          });
        } else if (err === 409) {
          setIsErrorRegister({
            message: 'Пользователь с таким e-mail уже существует',
            type: 'error'
          });
        } else {
          setIsErrorRegister({
            message: 'При регистрации произошла ошибка',
            type: 'error'
          });
        }
      })
      .finally(() => {
        setIsSuccessRegister(false);
      })
  }

  // вход
  function handleLogin(data) {
    setIsSuccessLogin(true);
    auth.authorize(data)
      .then(res => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem('token', res.token);
          history.push('/movies');
        }
      })
      .catch(err => {
        if (err.statusCode === 400) {
          setIsErrorLogin({
            message: 'Переданы некорректные данные пользователя',
            type: 'error'
          });
        } else if (err.statusCode === 401) {
          setIsErrorLogin({
            message: 'Неправильные почта или пароль',
            type: 'error'
          });
        } else {
          setIsErrorLogin({
            message: 'При авторизации произошла ошибка',
            type: 'error'
          });
        }
      })
      .finally(() => {
        setIsSuccessLogin(false);
      })
  }

  // выход
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.clear();
    localStorage.removeItem('token');
    history.push('/');
  }

  // проверка токена
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getUserInfo(token)
        .then(data => {
          if (data) {
            setLoggedIn(true);
          }
        })
        .catch(err => console.log(err))
    }
  }, []);

  // получаем данные пользователя
  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then(user => {
          setCurrentUser(user);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn]);

  // редактируем профиль
  function handleProfileEdit(data) {
    setIsSuccessProfile(true);
    setIsErrorProfile({});
    mainApi.changeUserInfo(data)
      .then(data => {
        setCurrentUser(data);
        setIsErrorProfile({
          message: 'Профиль успешно обновлён',
          type: 'success'
        });
      })
      .catch(err => {
        if (err.statusCode === 400) {
          setIsErrorLogin({
            message: 'Переданы некорректные данные пользователя',
            type: 'error'
          });
        } else if (err.statusCode === 404) {
          setIsErrorLogin({
            message: 'Пользователь с указанным id не найден',
            type: 'error'
          });
        } else {
          setIsErrorLogin({
            message: 'При обновлении профиля произошла ошибка',
            type: 'error'
          });
        }
      })
      .finally(() => {
        setIsSuccessProfile(false);
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getSavedMovies(token)
        .then((data) => {
          setsavedMoviesUser(data.filter((i) => i.owner === currentUser._id));
        })
        .catch(err => console.log(err))
    }
  }, [currentUser]);

  function handleMovieSave(movie) {
    const token = localStorage.getItem('token');
    mainApi.saveMovie({ movie, token })
      .then((newSavedMovie) => {
        setsavedMoviesUser((movies) => [
          newSavedMovie,
          ...movies
        ]);
      })
      .catch(err => console.log(err))
  }

  function handleMovieDelete(movie) {
    const token = localStorage.getItem('token');
    mainApi.deleteMovie({ movie, token })
      .then(() => {
        setsavedMoviesUser((movies) => movies.filter((m) => m._id !== movie._id));
      })
      .catch(err => console.log(err))
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
              savedMoviesUser={savedMoviesUser}
              onMovieSave={handleMovieSave}
              onMovieDelete={handleMovieDelete}
            />
          </Route>

          <Route path="/saved-movies">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={SavedMovies}
              savedMoviesUser={savedMoviesUser}
              onMovieDelete={handleMovieDelete}
            />
          </Route>

          <Route path="/profile">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Profile}
              onProfileEdit={handleProfileEdit}
              onSignOut={handleSignOut}
              isSuccess={isSuccessProfile}
              errorStatus={isErrorProfile}
            />
          </Route>

          <Route path="/signup">
            {loggedIn
              ? <Redirect to="/" />
              : <Main><Register
                onRegister={handleRegister}
                isSuccess={isSuccessRegister}
                errorStatus={isErrorRegister}
              /></Main>
            }
          </Route>

          <Route path="/signin">
            {loggedIn
              ? <Redirect to="/" />
              : <Main><Login
                onLogin={handleLogin}
                isSuccess={isSuccessLogin}
                errorStatus={isErrorLogin}
              /></Main>
            }
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
  )
}