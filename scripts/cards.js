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
     initialCards.forEach((item, id) => RenderCard(id, item));
  }
}

function RenderCard(id, initialCard) {
  const cardTemplate = document.querySelector('#card-template').cloneNode(true).content;
  const card = cardTemplate.querySelector('.element');
    card.setAttribute('card-id', id);
  const cardPicture = card.querySelector('.element__picture');
    cardPicture.setAttribute('src', initialCard.link);
    cardPicture.setAttribute('alt', `Изображение ${initialCard.name}`);
  const cardTitle = card.querySelector('.element__title');
    cardTitle.textContent = initialCard.name;
  const cardGalary = document.querySelector('.elements__list');
    cardGalary.append(card);

    cardPicture.addEventListener('click', (event)=>{
      const name = initialCard.name;
      const link = initialCard.link;

      function InitPreviewCard() {
        console.log('init card');
        let preview_image = document.querySelector('.preview__image');
        preview_image.setAttribute('src', link);
        preview_image.setAttribute('alt',`Изображение ${name}`)

        let preview_title = document.querySelector('.preview__title');
        preview_title.textContent = name;
      }
      InitPopup('#card-preview', InitPreviewCard, 'popup__container_frame_preview');
    });
  const likeButton = card.querySelector('.element__like-button');
    likeButton.addEventListener('click', LikeCard);
  const trashButton = card.querySelector('.element__trash-button');
    trashButton.addEventListener('click', DeleteCard);
}

function DeleteCard(button) {
  const card = button.target.closest('.element');
  if(card) {
    const cardId = card.getAttribute('card-id');
    initialCards.splice(cardId, 1);
    RenderCards();
  }
}

function AddCard(initialCard){
    initialCards.push(initialCard);
    RenderCards();
}

function LikeCard(button) {
  const card = button.target.closest('.element');
  if(card) {
    const likeButton = card.querySelector('.element__like-button');
    likeButton.classList.toggle('element__like-icon_liked');
  }
}
