class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
              .then(result => {
                  return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`)
              });
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
              .then(result => {
                  return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`)
              });
  }
  // другие методы работы с API
}

export default Api;
