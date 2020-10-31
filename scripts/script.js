let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupInputName = document.querySelector('.popup__field_text_name');
let popupInputStatus = document.querySelector('.popup__field_text_status');
let popupCloseButton = document.querySelector('.popup__close-button');

let profileName   = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let profileEditButton = document.querySelector('.profile__edit-button');

function OpenPopup() {
  popupInputName.value   = profileName.textContent;
  popupInputStatus.value = profileStatus.textContent;

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

document.addEventListener("DOMContentLoaded", function() {
   profileEditButton.addEventListener('click', OpenPopup);
   popupCloseButton.addEventListener('click', ClosePopup);
   popupForm.addEventListener('submit', PopupFormSubmit);
});
