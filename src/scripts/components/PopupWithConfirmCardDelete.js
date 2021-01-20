import Popup from './Popup.js';

export default class PopupWithConfirmCardDelete extends Popup {
  constructor({ submit }, popupFormSelector){
    super(popupFormSelector);
    this._submitHandler = submit;

    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  unsetEventListener = () => {
    this._form.removeEventListener('submit', this._submitHandler);
    super.unsetEventListener();
  }

  getCard = () => this._card;

  open(card) {
    this._card = card;
    super.open();
  }
}
