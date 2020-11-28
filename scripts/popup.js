const body = document.querySelector('body');

function openPopup(popup) {
  popup.addEventListener('click', closingPopupByOverlay);
  body.addEventListener('keydown', closingPopupByEscape);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.removeEventListener('click', closingPopupByOverlay);
  body.removeEventListener('keydown', closingPopupByEscape);
  popup.classList.remove('popup_opened');
}

function closingPopupByOverlay(event) 
{
  if(event.target.classList.contains('popup')){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closingPopupByEscape(keyEvent){ 
  if(keyEvent.key == 'Escape'){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
