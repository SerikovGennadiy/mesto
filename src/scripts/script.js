// import '../pages/index.css';

import { initialCards, validSettings } from './utils/constant.js';
import { handleCardClick } from './utils/utils.js';

import { cardTemplate } from './utils/constant.js';
import Card from './components/Card.js';

import FormValidator  from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const gallery = new Section({
  items: initialCards,
  renderer: (item) => {
     const cardFactory = new Card(item, cardTemplate, handleCardClick);
     const card = cardFactory.create();
     gallery.addItem(card);
  }
 },
'.elements__list');

//========profileForm======
const profile = document.querySelector('.popup_profile');
const profileForm = profile.querySelector('.popup__form');
const profileNameInput = profileForm.querySelector('.popup__field_text_name');
const profileStatusInput = profileForm.querySelector('.popup__field_text_status');
const profileFormValidation = new FormValidator(validSettings, profileForm);
      profileFormValidation.enableValidation();

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    statusSelector: '.profile__status'
  });

const popupWithProfileForm = new PopupWithForm({
  init: () => {
    const { name, status } = userInfo.getUserInfo();
    profileNameInput.value = name;
    profileStatusInput.value = status;
    profileFormValidation.checkFormValidity();
  },
  submit:(event) => {
    event.preventDefault();
    const formInputs = popupWithProfileForm.getInputValues();
    userInfo.setUserInfo({
      name: formInputs.profile__name,
      status: formInputs.profile__status
    });
    popupWithProfileForm.close();
  }},
  '.popup_profile'
);
const openEditProfilePopup = () => {
  popupWithProfileForm.open();
}

//=========cardForm========
const card = document.querySelector('.popup_card');
const cardForm = card.querySelector('.popup__form');
const cardFormValidation = new FormValidator(validSettings, cardForm);
      cardFormValidation.enableValidation();

const popupWithCardForm = new PopupWithForm({
  init: () => {
  cardForm.reset();
  cardFormValidation.checkFormValidity();
  },
  submit:(event) => {
    event.preventDefault();
    const formValues = popupWithCardForm.getInputValues();
    const initialCard = {
          name : formValues.card__name,
          link : formValues.card__link
        };
    gallery.renderItem(initialCard);
    popupWithCardForm.close();
  }},
  '.popup_card'
);

const openAddCardPopup = () => { popupWithCardForm.open(); }

const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

document.addEventListener("DOMContentLoaded", function() {
  profileEditButton.addEventListener('click', openEditProfilePopup);
  cardAddButton.addEventListener('click', openAddCardPopup);
  gallery.renderItems();
});
