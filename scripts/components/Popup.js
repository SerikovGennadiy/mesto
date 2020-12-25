import { body, ESCAPE } from './constant.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
  }

 _handleEscClose = (keyEvent) => {
    if(keyEvent.key == ESCAPE){
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

  _closingPopupByEscape = (keyEvent) => {
    if(keyEvent.key == ESCAPE){
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

  setEventListeners = () => {
    this._popup.addEventListener('click', this._closingPopupByEscape);
    this._closeButton.addEventListener('click', this.close);
    body.addEventListener('keydown', this._handleEscClose);
  }

  removeEventListeners = () => {
    this._popup.removeEventListener('click', this._closingPopupByEscape);
    this._closeButton.removeEventListener('click', this.close);
    body.removeEventListener('keydown', this._handleEscClose);
  }

  open = () => {
    this._setEventListeners();
    this._popup.classList.add('popup_opened');
  }

  close = () => {
    this._removeEventListeners();
    this._popup.classList.remove('popup_opened');
  }
}
