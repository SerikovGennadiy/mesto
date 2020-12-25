import { initialCards, validSettings } from './utils/constant.js';
import { openPopup, closePopup } from "./utils/popup.js";
import { handleCardClick } from './utils/utils.js';

import { cardTemplate } from './utils/constant.js';
import  Card  from './components/Card.js';

import  CardGallery  from './components/CardGallery.js';
import  FormValidator  from './components/FormValidator.js';
import Section from './components/Section.js';

// //========profileForm======
// const profile = document.querySelector('.popup_profile');
// const profileName = document.querySelector('.profile__name');
// const profileStatus = document.querySelector('.profile__status');
// const profileForm = profile.querySelector('.popup__form');
// const profileNameInput = profileForm.querySelector('.popup__field_text_name');
// const profileStatusInput = profileForm.querySelector('.popup__field_text_status');
// const profileCloseButton = profile.querySelector('.popup__close-button');

// const profileFormValidation = new FormValidator(validSettings, profileForm);
//       profileFormValidation.enableValidation();

// const openEditProfilePopup = () => {
//   profileNameInput.value   = profileName.textContent;
//   profileStatusInput.value = profileStatus.textContent;

//   profileFormValidation.checkFormValidity();

//   openPopup(profile);
// }

// const initProfileForm = () => {
//   profileForm.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     profileName.textContent = profileNameInput.value;
//     profileStatus.textContent = profileStatusInput.value;
//     closePopup(profile);
//   });
//   profileCloseButton.addEventListener('click', ()=> {
//     closePopup(profile)
//     profileForm.reset();
//   });
// }
// //========profileNew=======

// //=========cardForm========
// const card = document.querySelector('.popup_card');
// const cardCloseButton = card.querySelector('.popup__close-button');
// const cardAddButton = document.querySelector('.profile__add-button');
// const cardForm = card.querySelector('.popup__form');
// const cardNameInput = cardForm.querySelector('.popup__field_text_name');
// const cardLinkInput = cardForm.querySelector('.popup__field_text_link');

// const cardFormValidation = new FormValidator(validSettings, cardForm);
//       cardFormValidation.enableValidation();

// const openAddCardPopup = () =>  {
//   cardForm.reset();
//   cardFormValidation.checkFormValidity();

//   openPopup(card);
// }

// const initCardForm = () => {
//   cardForm.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     const initialCard = {
//       name : cardNameInput.value,
//       link : cardLinkInput.value
//     };

//     cardGallery.renderCard(initialCard);
//     closePopup(card);
//   });
//   cardCloseButton.addEventListener('click', ()=> {
//     closePopup(card);
//     cardForm.reset();
//   });
// }
// //=========cardNew==========

// //==========================
// const gallery = document.querySelector('.elements__list');
// const cardFactory = (...args) => new Card(...args);
// const cardGallery = new CardGallery(gallery, initialCards, cardFactory);

// const preview = document.querySelector('.popup_preview');
// const previewCloseButton = preview.querySelector('.popup__close-button');
// const profileEditButton = document.querySelector('.profile__edit-button');


const gallery = new Section({
   items: initialCards,
   renderer: (item) => {
      const cardFactory = new Card(item, cardTemplate, handleCardClick);
      const card = cardFactory.create();
      gallery.addItem(card);
   }
  },
 '.elements__list');
document.addEventListener("DOMContentLoaded", function() {
  //  cardGallery.renderCards();

  //  initProfileForm();
  //  initCardForm();

  //  previewCloseButton.addEventListener('click', () => { closePopup(preview)} );
  //  profileEditButton.addEventListener('click', openEditProfilePopup);
  //  cardAddButton.addEventListener('click', openAddCardPopup);
  gallery.renderItems();
});
