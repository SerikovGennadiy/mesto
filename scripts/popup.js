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
});

