document.addEventListener('DOMContentLoaded', BindButtonEventListeners);

function BindButtonEventListeners() {
    let profileEditButton = document.querySelector('.profile__edit-button');
    profileEditButton.addEventListener('click', OpenPopup);

    let formElement = document.querySelector('.popup__container');
    formElement.addEventListener('submit', formSubmitHandler);
}

function OpenPopup() {
  let name = document.querySelector('.profile__name').textContent;
  let job  = document.querySelector('.profile__status').textContent;

  document.querySelector('.popup__container input[name=profile__name]').value = name;
  document.querySelector('.popup__container input[name=profile__status]').value = job;

  let popup = document.querySelector('.popup');
  popup.classList.add('popup_opened');

  let profileCloseButton = document.querySelector('.popup__close-button');
  profileCloseButton.addEventListener('click', function(){
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
  });
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    // Находим поля формы в DOM
    let nameTag = document.querySelector('.profile__name');
    let jobTag  = document.querySelector('.profile__status');

    let nameInput = document.querySelector('.popup__container input[name=profile__name]');
    let jobInput = document.querySelector('.popup__container input[name=profile__status]');

    nameTag.textContent = nameInput.value;
    jobTag.textContent = jobInput.value;

    document.querySelector('.popup__close-button').click();
}
