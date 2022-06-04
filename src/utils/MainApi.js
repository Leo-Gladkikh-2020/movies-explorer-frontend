class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(this._checkStatus)
  }

  changeUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ name: data.name, email: data.email })
    })
      .then(this._checkStatus)
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.leonid-movies.nomoredomains.work',
});

export default mainApi;