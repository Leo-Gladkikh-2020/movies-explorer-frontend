import { React, useState } from 'react';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  function handleLogin(data) {
    mainApi.authorize(data)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('token', res.token);
        setCurrentUser({ email: data.email });
        history.push('/movies');
      })
      .catch(err => console.log(err))
  }

  function handleRegister(data) {
    mainApi.register(data)
      .then(() => {
        handleLogin({ email: data.email, password: data.password });
      })
      .catch(err => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header path="/" loggedIn={loggedIn} />
            <Main>
              <LandingPage />
            </Main>
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
          />
          <Route path="/signin">
            <Main>
              <Login handleLogin={handleLogin} />
            </Main>
          </Route>
          <Route path="/signup">
            <Main>
              <Register handleRegister={handleRegister} />
            </Main>
          </Route>
          <Route path="*">
            <Main>
              <NotFound />
            </Main>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}