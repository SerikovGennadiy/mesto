import { initialCards, validSettings } from './constant.js';
import { openPopup, closePopup } from "./popup.js";
import { preview, previewCloseButton } from './constant.js';
import { profile, profileName, profileStatus, profileEditButton, profileCloseButton, profileForm, profileNameInput, profileStatusInput } from './constant.js';
import { card, cardCloseButton, cardAddButton, cardForm, cardNameInput, cardLinkInput } from './constant.js';

import  Card  from './Card.js';
import  CardGallery  from './CardGallery.js';
import  FormValidator  from './FormValidator.js';


//=========cardFactory=======
const cardFactory = (...args) => new Card(...args);
const cardGallery = new CardGallery(initialCards, cardFactory);
//========profileForm======
const profileFormValidation = new FormValidator(validSettings, profileForm);
      profileFormValidation.enableValidation();

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
const cardFormValidation = new FormValidator(validSettings, cardForm);
      cardFormValidation.enableValidation();

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

    cardGallery.renderCard(initialCard);
    closePopup(card);
  });
  cardCloseButton.addEventListener('click', ()=> {
    closePopup(card);
    cardForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", function() {
   cardGallery.renderCards();

   initProfileForm();
   initCardForm();

   previewCloseButton.addEventListener('click', () => {closePopup(preview)});
   profileEditButton.addEventListener('click', openEditProfilePopup);
   cardAddButton.addEventListener('click', openAddCardPopup);
});
