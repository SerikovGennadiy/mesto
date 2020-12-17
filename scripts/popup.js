import { body, ESCAPE } from './constant.js';

const openPopup = (popup) => {
  popup.addEventListener('click', closingPopupByOverlay);
  body.addEventListener('keydown', closingPopupByEscape);
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.removeEventListener('click', closingPopupByOverlay);
  body.removeEventListener('keydown', closingPopupByEscape);
  popup.classList.remove('popup_opened');
}

const closingPopupByOverlay = (event) => {
  if(event.target.classList.contains('popup')){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const closingPopupByEscape = (keyEvent) => {
  if(keyEvent.key == ESCAPE){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export { openPopup, closePopup };
