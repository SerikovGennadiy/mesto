class Api {
  constructor({url, headers}) {
    this._url = url;
    this._header = headers;
  }

  getInitialCards() {
    // ...
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: '1b6428dc-fc4d-44c7-bd79-7066a6565839',
    'Content-Type': 'application/json'
  }
});
