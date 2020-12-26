import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ init, submit }, popupFormSelector){
    super(popupFormSelector);
    this._submitHandler = submit;
    this._init = init;
    console.log(this._popup);
    this._form = this._popup
      .querySelector('.popup__form');
  }

  getInputValues = () => {
     const inputs = Array.from(this._form.querySelectorAll('input'));
     return inputs.reduce((accumulator, current) => {
       accumulator[current.name] = current.value;
       return accumulator;
     }, {});
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  unsetEventListener = () => {
    this._form.removeEventListener('submit', this._submitHandler);
    super.unsetEventListener();
  }

  open() {
    if(typeof this._init === 'function'){
      this._init();
    }
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
