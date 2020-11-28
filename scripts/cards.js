const cardGalary = document.querySelector('.elements__list');

const preview = document.querySelector('.popup_preview');
const previewImage = preview.querySelector('.preview__image');
const previewTitle = preview.querySelector('.preview__title');
const previewCloseButton = preview.querySelector('.popup__close-button');

function renderCards() {
  const cardGalary = document.querySelector('.elements__list');
  if(cardGalary){
     Array.from(cardGalary.children).forEach(item => item.remove());
     initialCards.forEach((item) => renderCard(item));
  }
}

function deleteCard(button) {
  const card = button.target.closest('.element');
  card.remove();
}

function likeCard(button) {
  const card = button.target.closest('.element');
  const likeButton = card.querySelector('.element__like-button');
  likeButton.classList.toggle('element__like-icon_liked');
}

function createCard(initialCard){
  const cardTemplate = document.querySelector('#card-template').cloneNode(true).content;  
  const card = cardTemplate.querySelector('.element');
  const cardPicture = card.querySelector('.element__picture');
  cardPicture.setAttribute('src', initialCard.link);
  cardPicture.setAttribute('alt', `Изображение ${initialCard.name}`);
  
  cardPicture.addEventListener('click', ()=>{
    previewImage.setAttribute('src', initialCard.link);
    previewImage.setAttribute('alt',`Изображение ${initialCard.name}`)   
    previewTitle.textContent = initialCard.name;         
    openPopup(preview);
  });  

  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = initialCard.name;
  const likeButton = card.querySelector('.element__like-button');
  likeButton.addEventListener('click', likeCard);
  const trashButton = card.querySelector('.element__trash-button');
  trashButton.addEventListener('click', deleteCard); 
  return card;
}

function renderCard(initialCard) {
    const card = createCard(initialCard);
    cardGalary.prepend(card);
}



document.addEventListener("DOMContentLoaded", function() {
  previewCloseButton.addEventListener('click', ()=>closePopup(preview));
});