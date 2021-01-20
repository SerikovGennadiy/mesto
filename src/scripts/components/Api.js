class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCards() {
      return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
                .then(result => {
                    return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`);
                });
  }

  addCard({name, link}) {
     return fetch(`${this._baseUrl}/cards`,
              {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                  'name': name,
                  'link': link
                })
              })
              .then(result => {
                  return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`);
              });
  }

  deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`,
                {
                  method: 'DELETE',
                  headers: this._headers
                })
                .then(result => {
                    return result.ok;
                })
                .catch(console.log.bind(console))
  }

  setCardLike(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`,
                {
                  method: 'PUT',
                  headers: this._headers
                })
                .then(result => {
                    return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`);
                });
  }

  removeCardLike(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`,
                {
                  method: 'DELETE',
                  headers: this._headers
                })
                .then(result => {
                    return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`);
                });
  }

  getProfile() {
      return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
                .then(result => {
                    return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`);
                });
  }

  updateProfile(name, about) {
      return fetch(`${this._baseUrl}/users/me`,
                {
                  method: 'PATCH',
                  headers: this._headers,
                  body: JSON.stringify({
                    'name': name,
                    'about': about
                  })
                })
                .then(result => {
                  return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`);
                });
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
              method: 'PATCH',
              headers: this._headers,
              body: JSON.stringify({
                'avatar': avatar
              })
           })
           .then(result => {
               return result.ok ? result.json() : Promise.reject(`Ошибка ${result.status} (${result.statusText})`);
          });
    }
}

export default Api;
