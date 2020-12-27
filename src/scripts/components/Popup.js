import { body, ESCAPE } from '../utils/constant.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this.close = this.close.bind(this);
  }

 _handleEscClose = (keyEvent) => {
    if(keyEvent.key == ESCAPE){
      this.close();
    }
  }

  _handleOverlayClickClose = (event) => {
    if(event.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleOverlayClickClose );
    body.addEventListener('keydown', this._handleEscClose);
    this._closeButton.addEventListener('click', this.close);
  }

  unsetEventListeners() {
    this._popup.removeEventListener('mousedown', this._handleOverlayClickClose );
    body.removeEventListener('keydown', this._handleEscClose);
    this._closeButton.removeEventListener('click', this.close);
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
  }

  close() {
    this.unsetEventListeners();
    this._popup.classList.remove('popup_opened');
  }
}
