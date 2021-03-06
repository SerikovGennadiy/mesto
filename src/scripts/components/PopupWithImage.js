import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupImageSelector){
    super(popupImageSelector)
    this._previewImage = this._popup.querySelector('.preview__image');
    this._previewTitle = this._popup.querySelector('.preview__title');
  }

  open({name, link}){
    this._name = name;
    this._link = link;
    this._previewImage.setAttribute('src', this._link);
    this._previewImage.setAttribute('alt',`Изображение ${this._name}`);
    this._previewTitle.textContent = this._name;
    super.open();
  }
}
