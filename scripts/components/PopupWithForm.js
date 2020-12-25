import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(submit, popupFormSelector){
    super(popupFormSelector);
    this._submitHandler = submit;
    this._form = this._popup.querySelector('.popup_form');
  }

  _getInputValues = () => {
    this._fields = this._popup.querySelectorAll('input');
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  unsetEventListener = () => {
    this._form.removeEventListener('submit', this._submitHandler);
    super.unsetEventListener();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
