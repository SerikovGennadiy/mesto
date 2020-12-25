import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(submit, popupFormSelector){
    super(popupFormSelector);
    this._submitHandler = submit;
    this._form = super._container.querySelector('.popup_form');
  }

  _getInputValues = () => {
    this._fields = super._container.querySelectorAll('input');
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  removeEventListener = () => {
    this._form.removeEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }
}
