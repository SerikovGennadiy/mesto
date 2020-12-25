class Card {
  constructor(initialCard, templateSelector, previewer) {
    this._initialCard = initialCard;
    this._name = this._initialCard.name;
    this._link = this._initialCard.link;
    this._templateSelector = templateSelector;
    this._previewer = previewer;
  }

  _deleteCard = (button) => {
    const card = button.target.closest('.element');
    card.remove();
  }

  _likeCard = (button) => {
    const card = button.target.closest('.element');
    const likeButton = card.querySelector('.element__like-button');
          likeButton.classList.toggle('element__like-icon_liked');
  }

  _getDOMTemplate = () => {
    return document
            .querySelector(this._templateSelector)
            .cloneNode(true)
            .content
            .querySelector('.element');
  }

 _initialize = () => {
    const cardPicture = this._card.querySelector('.element__picture');
          cardPicture.setAttribute('src', this._link);
          cardPicture.setAttribute('alt', `Изображение ${this._name}`);

    const cardTitle = this._card.querySelector('.element__title');
          cardTitle.textContent = this._name;
  }

  _setEventListeners = () => {
    const cardPicture = this._card.querySelector('.element__picture');
          cardPicture.addEventListener('click', () => { this._previewer(this._initialCard); });

    const likeButton =  this._card.querySelector('.element__like-button');
          likeButton.addEventListener('click', this._likeCard);

    const trashButton =  this._card.querySelector('.element__trash-button');
          trashButton.addEventListener('click', this._deleteCard);
  }

  create = () => {
    this._card = this._getDOMTemplate();
      this._initialize();
      this._setEventListeners();
    return this._card;
  }
}

export default Card;
