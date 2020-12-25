import { cardTemplate } from '../utils/constant.js';
import { openCardPreview } from '../utils/utils.js';

class CardGallery {
  constructor(cardGallery, initialCards, cardFactory) {
    this._cardGallery = cardGallery;
    this._initialCards = initialCards;
    this._cardFactory = cardFactory;
  }

 renderCard = (initialCard) => {
   const card = this._cardFactory(initialCard, cardTemplate, openCardPreview).create();
   this._cardGallery.prepend(card);
 }

 renderCards = () => Array.from(this._initialCards).forEach(initialCard => this.renderCard(initialCard));
}

export default CardGallery;
