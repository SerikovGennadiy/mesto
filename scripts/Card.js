import { openPopup } from './popup.js';
import { preview, previewImage, previewTitle } from './constant.js';

class Card {
  constructor(initialCard, templateSelector) {
    this._name = initialCard.name;
    this._link = initialCard.link;
    this._templateSelector = templateSelector;
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

  _initialize = (card) => {
    const cardPicture = card.querySelector('.element__picture');
          cardPicture.setAttribute('src', this._link);
          cardPicture.setAttribute('alt', `Изображение ${this._name}`);

    const cardTitle = card.querySelector('.element__title');
          cardTitle.textContent = this._name;
  }

  _setEventListeners = (card) => {
    const cardPicture = card.querySelector('.element__picture');
          cardPicture.addEventListener('click', () => {
            previewImage.setAttribute('src', initialCard.link);
            previewImage.setAttribute('alt',`Изображение ${initialCard.name}`)
            previewTitle.textContent = initialCard.name;
            openPopup(preview);
          });

    const likeButton = card.querySelector('.element__like-button');
          likeButton.addEventListener('click', this._likeCard);

    const trashButton = card.querySelector('.element__trash-button');
          trashButton.addEventListener('click', this._deleteCard);
  }

  create = () => {
    const card = this._getDOMTemplate();
      this._initialize(card);
      this._setEventListeners(card);
    return card;
  }
}

export default Card;
