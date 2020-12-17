//========profileForm======

import { cardForm, profileForm } from "./constant.js";

const openEditProfilePopup = () =>{
  profileNameInput.value   = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;
  openPopup(profile);
}

const initProfileForm = () => {
  profileForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileStatus.textContent = profileStatusInput.value;
    closePopup(profile);
  });
  profileCloseButton.addEventListener('click', ()=> {
    closePopup(profile)
    profileForm.reset();
  });
}

//=========cardForm==========

const openAddCardPopup = () =>  {
  cardNameInput.value = '';
  cardLinkInput.value = '';
  openPopup(card);
}

const initCardForm = () => {
  cardForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const initialCard = {
      name : cardNameInput.value,
      link : cardLinkInput.value
    };

    renderCard(initialCard);
    closePopup(card);
  });
  cardCloseButton.addEventListener('click', ()=> {
    closePopup(card);
    cardForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", function() {
   renderCards();
   initProfileForm();
   initCardForm();
   profileEditButton.addEventListener('click', openEditProfilePopup);
   cardAddButton.addEventListener('click', openAddCardPopup);
   enableValidation({
      formSelectorClass: '.popup__form',
      inputSelectorClass: '.popup__field',
      inputErrorClass: 'popup__field_error',
      errorClass: 'popup__field-error_active',
      submitButtonSelectorClass: '.popup__submit-button',
      inactiveButtonClass: 'popup__submit-button_inactive'
    });
});
