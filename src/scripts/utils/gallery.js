import { api } from '../utils/api.js'
import Section from '../components/Section.js';

import Card from '../components/Card.js';
import { cardTemplate } from '../utils/constant.js';

import { handleCardPreviewClick, handleCardRemoveClick, handleCardLike } from '../utils/card.js';

// ===================== галерея ===============================

export const gallery = new Section({
  items: [],
  renderer: (item, userId) => {
     const cardFactory = new Card(item,
                                  cardTemplate,
                                  handleCardPreviewClick,
                                  handleCardRemoveClick,
                                  handleCardLike,
                                  userId);
     const card = cardFactory.create();
     gallery.addItem(card);
  }
 },
'.elements__list');

// ======== получение загруженных на сервер карточек ===========
export const loadGallery = (user) => {
   return api.getCards()
      .then(cards => {
        cards.forEach(card => {
          gallery.renderItem(card, user._id);
        });
        return user;
      })
      .catch(console.log.bind(console));
}
