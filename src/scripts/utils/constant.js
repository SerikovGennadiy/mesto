export const validSettings = {
  formSelectorClass: '.popup__form',
  inputSelectorClass: '.popup__field',
  inputErrorClass: 'popup__field_error',
  errorClass: 'popup__field-error_active',
  submitButtonSelectorClass: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive'
};

export const body = document.querySelector('body');

export const ESCAPE = 'Escape';
export const cardTemplate = '#card-template';

export const profile = document.querySelector('.popup_profile');
export const profileForm = profile.querySelector('.popup__form');
export const profileNameInput = profileForm.querySelector('.popup__field_text_name');
export const profileAboutInput = profileForm.querySelector('.popup__field_text_status');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileUpdateAvatar = document.querySelector('.profile__avatar-button');

export const avatar = document.querySelector('.popup_update-avatar');
export const avatarForm = avatar.querySelector('.popup__form');
export const avatarInput = avatarForm.querySelector('.popup__field_url_link');

export const card = document.querySelector('.popup_card');
export const cardForm = card.querySelector('.popup__form');
export const cardAddButton = document.querySelector('.profile__add-button');
