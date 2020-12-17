export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validSettings = {
  formSelectorClass: '.popup__form',
  inputSelectorClass: '.popup__field',
  inputErrorClass: 'popup__field_error',
  errorClass: 'popup__field-error_active',
  submitButtonSelectorClass: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive'
};

export const body = document.querySelector('body');

export const preview = document.querySelector('.popup_preview');
export const previewImage = preview.querySelector('.preview__image');
export const previewTitle = preview.querySelector('.preview__title');
export const previewCloseButton = preview.querySelector('.popup__close-button');

export const profile = document.querySelector('.popup_profile');
export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileCloseButton = profile.querySelector('.popup__close-button');

export const profileForm = profile.querySelector('.popup__form');
export const profileNameInput = profileForm.querySelector('.popup__field_text_name');
export const profileStatusInput = profileForm.querySelector('.popup__field_text_status');

export const card = document.querySelector('.popup_card');
export const cardCloseButton = card.querySelector('.popup__close-button');
export const cardAddButton = document.querySelector('.profile__add-button');

export const cardForm = card.querySelector('.popup__form');
export const cardNameInput = cardForm.querySelector('.popup__field_text_name');
export const cardLinkInput = cardForm.querySelector('.popup__field_text_link');

export const ESCAPE = 'Escape';
export const cardTemplate = '#card-template';
