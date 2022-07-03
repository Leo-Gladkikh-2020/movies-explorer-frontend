// export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
export const BASE_URL = 'https://api.leonid-movies.nomoredomains.work' || 'http://localhost:3000';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkStatus)
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ email, password })
  })
    .then(checkStatus)
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(checkStatus)
};