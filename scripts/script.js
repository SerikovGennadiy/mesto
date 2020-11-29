//========profileForm======
const profile = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profile.querySelector('.popup__close-button');

const profileForm = profile.querySelector('.popup__form');
const profileNameInput = profileForm.querySelector('.popup__field_text_name');
const profileStatusInput = profileForm.querySelector('.popup__field_text_status');

function openEditProfilePopup(){
  profileNameInput.value   = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;
  checkFormValidity(profileForm);
  openPopup(profile);
}

function initProfileForm() {
  profileForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileStatus.textContent = profileStatusInput.value;
    closePopup(profile);
  });
  profileCloseButton.addEventListener('click', ()=>closePopup(profile));
}

//=========cardForm==========
const card = document.querySelector('.popup_card');
const cardAddButton = document.querySelector('.profile__add-button');
const cardCloseButton = card.querySelector('.popup__close-button');

const cardForm = card.querySelector('.popup__form');
const cardNameInput = cardForm.querySelector('.popup__field_text_name');
const cardLinkInput = cardForm.querySelector('.popup__field_text_link');

function openAddCardPopup() {
  cardNameInput.value = '';
  cardLinkInput.value = '';
  checkFormValidity(cardForm);
  openPopup(card);
}

function initCardForm() {
  cardForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const initialCard = {
      name : cardNameInput.value,
      link : cardLinkInput.value
    };
    
    renderCard(initialCard);
    closePopup(card);
  });
  cardCloseButton.addEventListener('click',()=>closePopup(card));
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
