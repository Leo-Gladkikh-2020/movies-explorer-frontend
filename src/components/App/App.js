import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import getMovies from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [shortOn, setShortOn] = useState(false);
  const [searchInput, setSearchInput] = useState(localStorage.getItem('input') || '');

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
    localStorage.removeItem('movies');
    localStorage.removeItem('short');
    localStorage.removeItem('input');
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
    setMovies([]);
    setSearchInput('');
  }

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')) || movies);
    setShortOn(JSON.parse(localStorage.getItem('short')) || false)
  }, [movies]);

  function findMovie(movies, name) {
    return [...movies].filter(movie => (movie.nameRU.toLowerCase().includes(name.toLowerCase())));
  }

  function handleGetMovies(name) {
    setIsLoading(true);
    setIsError(false);
    getMovies()
      .then(movies => {
        const findMovies = findMovie(movies, name);
        setMovies(findMovies);
        findMovies.length === 0 && setIsError(true);
        localStorage.setItem('movies', JSON.stringify(findMovies));
        localStorage.setItem('input', name);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies()
        .then(savedMovies => {
          const currentMovies = savedMovies.filter(movie => movie.owner === currentUser._id);
          localStorage.setItem('savedMovies', JSON.stringify(currentMovies));
          setSavedMovies(currentMovies)
        })
        .catch(err => console.log(err))
    }
  }, [currentUser._id, loggedIn]);

  function handleSaveMovie(movie) {
    mainApi.createMovie({
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
    })
      .then(movie => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch(err => console.log(err))
  }

  function handleDeleteMovie(deletedMovie) {
    mainApi.deleteMovie(deletedMovie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((movie) => movie._id !== deletedMovie._id));
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
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              isLoading={isLoading}
              onGetMovies={handleGetMovies}
              shortOn={shortOn}
              setShortOn={setShortOn}
              isError={isError}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              savedMovies={savedMovies}
              movies={movies}
            />
          </Route>

          <Route path="/saved-movies">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={SavedMovies}
              isLoading={isLoading}
              ondeleteMovie={handleDeleteMovie}
              shortOn={shortOn}
              setShortOn={setShortOn}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
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