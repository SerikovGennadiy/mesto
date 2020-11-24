const cardGalary = document.querySelector('.elements__list');

const preview = document.querySelector('.popup_preview');
const previewImage = preview.querySelector('.preview__image');
const previewTitle = preview.querySelector('.preview__title');

const initialCards = [
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

function RenderCards() {
  const cardGalary = document.querySelector('.elements__list');
  if(cardGalary){
     Array.from(cardGalary.children).forEach(item => item.remove());
     initialCards.forEach((item) => RenderCard(item));
  }
}

function CreateCard(initialCard){
  const cardTemplate = document.querySelector('#card-template').cloneNode(true).content;  
  const card = cardTemplate.querySelector('.element');
  const cardPicture = card.querySelector('.element__picture');
  cardPicture.setAttribute('src', initialCard.link);
  cardPicture.setAttribute('alt', `Изображение ${initialCard.name}`);
  
  cardPicture.addEventListener('click', ()=>{
    previewImage.setAttribute('src', initialCard.link);
    previewImage.setAttribute('alt',`Изображение ${initialCard.name}`)   
    previewTitle.textContent = initialCard.name;         
    InitPopup(preview, 'popup__container_frame_preview');
  });  
  const cardTitle = card.querySelector('.element__title');
  cardTitle.textContent = initialCard.name;
  const likeButton = card.querySelector('.element__like-button');
  likeButton.addEventListener('click', LikeCard);
  const trashButton = card.querySelector('.element__trash-button');
  trashButton.addEventListener('click', DeleteCard); 
  return card;
}

function RenderCard(initialCard) {
    const card = CreateCard(initialCard);
    cardGalary.prepend(card);
}

function DeleteCard(button) {
  const card = button.target.closest('.element');
  if(card) {
    const initialCard = {
      name: card.querySelector('.element__title').textContent,
      link: card.querySelector('.element__picture').getAttribute('src')
    }
    const index = initialCards.indexOf(initialCard);
    initialCards.splice(index, 1);
    card.remove();
  }
}

function LikeCard(button) {
  const card = button.target.closest('.element');
  if(card) {
    const likeButton = card.querySelector('.element__like-button');
    likeButton.classList.toggle('element__like-icon_liked');
  }
}
