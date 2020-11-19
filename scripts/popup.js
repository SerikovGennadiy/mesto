const popup  = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container')
const popupContent = popup.querySelector('.popup__content');
const popupCloseButton = popup.querySelector('.popup__close-button');


function OpenPopup() {
  if(!popup.classList.contains('popup_opened')) {
      popup.classList.add('popup_opened');
  }
}

function ClosePopup() {
  if(popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  }
}

function PopupFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = popupInputName.value;
    profileStatus.textContent = popupInputStatus.value;
    ClosePopup();
}

let InitPopupContent = new Function();

function InitPopup(blockSelector, blockInitFunction, popupStyleClass){
  InitPopupContent = blockInitFunction;

  popupContainer.className = `popup__container`;
  if(popupStyleClass != undefined) {
     popupContainer.classList.add(popupStyleClass);
  }

  popupContent.innerHTML='';
  content = document.querySelector(blockSelector).cloneNode(true).content;
  popupContent.append(content);
}

document.addEventListener("DOMContentLoaded", function() {
  popupContent.addEventListener('DOMSubtreeModified', event => {
    if(event.target.children.length != 0){
      OpenPopup();
      InitPopupContent(ClosePopup);
    };
  });
  popupCloseButton.addEventListener('click', ClosePopup);
});

