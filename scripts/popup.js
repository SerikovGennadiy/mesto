function OpenPopup(popup) {
  if(!popup.classList.contains('popup_opened')) {
      popup.classList.add('popup_opened');
  }
}

function ClosePopup(popup) {
  if(popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  }
}

function InitPopup(popup, popupStyleClass){
  if(popup){
    const popupContainer = popup.querySelector('.popup__container');
          popupContainer.className = 'popup__container';
    if(popupStyleClass != undefined) {
      popupContainer.classList.add(popupStyleClass);
    }
    OpenPopup(popup);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const closeButtons = document.querySelectorAll('.popup__close-button');
  closeButtons.forEach(button=> {
    button.addEventListener('click', event => {
      const popup = event.target.closest('.popup');
      ClosePopup(popup);
    });
  });
  const body = document.querySelector('body');
  body.addEventListener('click', event => {
    if(event.target.classList.contains('popup_opened')){
      const popup = event.target;
      ClosePopup(popup);
    }
  });
  body.addEventListener('keydown', event => {
    if(event.key == 'Escape'){
      const popup = document.querySelector('.popup_opened');
      if(popup){
        ClosePopup(popup);
      }
    }
  });
});

