//========profileForm======
const profile = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileEditButton = document.querySelector('.profile__edit-button');

const profileForm = profile.querySelector('.popup__form');
const profileNameInput = profileForm.querySelector('.popup__field_text_name');
const profileStatusInput = profileForm.querySelector('.popup__field_text_status');

function InitProfileForm() {
  profileNameInput.value   = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;

  profileForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileStatus.textContent = profileStatusInput.value;
    ClosePopup(profile);
  });
}
//=========cardForm==========
const card = document.querySelector('.popup_card');
const cardAddButton = document.querySelector('.profile__add-button');

const cardForm = card.querySelector('.popup__form');
const cardNameInput = cardForm.querySelector('.popup__field_text_name');
const cardLinkInput = cardForm.querySelector('.popup__field_text_link');

function InitCardForm() {
  cardForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const initialCard = {
      name : cardNameInput.value,
      link : cardLinkInput.value
    };
    
    RenderCard(initialCard);
    ClosePopup(card);
  });
}

document.addEventListener("DOMContentLoaded", function() {
   RenderCards();
   InitProfileForm();
   InitCardForm();
   profileEditButton.addEventListener('click', ()=>InitPopup(profile));
   cardAddButton.addEventListener('click', ()=>InitPopup(card));
   enableValidation({
      formSelectorClass: '.popup__form',
      inputSelectorClass: '.popup__field',
      inputErrorClass: 'popup__field_error',
      errorClass: 'popup__field-error_active',
      submitButtonSelectorClass: '.popup__submit-button',
      inactiveButtonClass: 'popup__submit-button_inactive'
   });
});
