class CardGallery {
 static cardGalary = document.querySelector('.elements__list');

 constructor(initialCards, cardFactory) {
  this._initialCards = initialCards;
  this._cardFactory = cardFactory;
 }

 renderCard = (initialCard) => {
   const card = this._cardFactory(initialCard).create();
   CardGallery.cardGalary.prepend(card);
 }

 renderCards = () => Array.from(this._initialCards).forEach(initialCard => renderCard(initialCard));
}

export default CardGallery;
