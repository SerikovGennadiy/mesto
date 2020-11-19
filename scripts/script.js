let profileEditButton = document.querySelector('.profile__edit-button');
let cardAddButton = document.querySelector('.profile__add-button');
let profileName   = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

function InitProfileForm(CallBack) {
  let popupInputName = document.querySelector('.popup__field_text_name');
  let popupInputStatus = document.querySelector('.popup__field_text_status');

  popupInputName.value   = profileName.textContent;
  popupInputStatus.value = profileStatus.textContent;

  function PopupFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileStatus.textContent = popupInputStatus.value;

    if(typeof CallBack == 'function') {
      CallBack();
    }
  }

  let popupForm = document.querySelector('.popup__form');
  popupForm.addEventListener('submit', PopupFormSubmit);
}

function InitCardForm(CallBack) {
  function PopupFormSubmit (evt) {
    evt.preventDefault();

    let name = document.querySelector('.popup__field_text_name').value;
    let link = document.querySelector('.popup__field_text_link').value;

    let initialCard = {name, link};
    initialCards.push(initialCard)

    if(typeof RenderCards == 'function') RenderCards();
    if(typeof CallBack == 'function') CallBack();
  }

  let popupForm = document.querySelector('.popup__form');
  popupForm.addEventListener('submit', PopupFormSubmit);
}

document.addEventListener("DOMContentLoaded", function() {
   if(typeof RenderCards == 'function') RenderCards();
    profileEditButton.addEventListener('click', (event)=>{
      event.stopPropagation();
      InitPopup('#profile-form', InitProfileForm)
    });
    cardAddButton.addEventListener('click', (event)=>{
      event.stopPropagation();
      InitPopup('#card-form', InitCardForm)
    });
});
