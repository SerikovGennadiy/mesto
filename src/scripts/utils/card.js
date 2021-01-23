import { api } from '../utils/api.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmCardDelete from '../components/PopupWithConfirmCardDelete.js';

import FormValidator from '../components/FormValidator.js';
import { validSettings } from '../utils/constant.js';
import { gallery } from '../utils/gallery.js';

import { cardForm, cardAddButton } from './constant.js';
// ========== предварительный просмотр карточки ==================
const imagePreviewPopup = new PopupWithImage('.popup_preview');

export const handleCardPreviewClick = ({name, link})  => {
    imagePreviewPopup.open({name, link});
};

// ======== удаление карты через форму подтверждения ============
const confirmDeleteCardPopup =
     new PopupWithConfirmCardDelete({
            submit: (event) => {
                event.preventDefault();
                const card = confirmDeleteCardPopup.getCard();
                api.deleteCard(card.getCardId())
                   .then(() => {
                     card.removeCard();
                   })
                   .catch(err => {
                     console.log(err);
                   });
                confirmDeleteCardPopup.close();
            }
        },
        '.popup_confirm-delete-card');

export const handleCardRemoveClick = (card) => {
    confirmDeleteCardPopup.open(card);
};

// =============== добавить (убрать) лайк ======================
export const handleCardLike = (cardId, cardLikeCounter, isLiked) => {
  if(isLiked) {
        api.setCardLike(cardId)
          .then(card => {
            cardLikeCounter.textContent = card.likes.length;
          })
          .catch(err => console.log(err));
  }
  else {
      api.removeCardLike(cardId)
        .then(card => {
          cardLikeCounter.textContent = card.likes.length;
        })
        .catch(err => console.log(err));
  }
}

// =============== добавить карту ===========================

const cardFormValidation = new FormValidator(validSettings, cardForm);
      cardFormValidation.enableValidation();

const bindAddCardHandler = (user) => {
    const popupWithCardForm = new PopupWithForm({
      init: () => {
        cardForm.reset();
        cardFormValidation.checkFormValidity();
      },
      submit:(event) => {
        event.preventDefault();
        cardAddButton.textContent = 'Сохранение...';
          const promiseCard = new Promise((resolve, reject) => {
                const formValues = popupWithCardForm.getInputValues();
                const initialCard = {
                    name : formValues.card__name,
                    link : formValues.card__link
                };
                if(initialCard.name && initialCard.link) {
                    resolve(initialCard);
                }
                else {
                    reject(`ошибка добавления карты перед отправкой на сервер`);
                }
          });

          promiseCard
            .then(initialCard => {
                api.addCard(initialCard)
                  .then(card => {
                    cardAddButton.textContent = 'Создать';
                    gallery.renderItem(card, user._id)
                  })
                  .catch(err=>console.log(err));
            })
            .catch(err => {
              cardAddButton.textContent = 'Создать';
              console.log(err);
            });
          popupWithCardForm.close();
        }
      },
      '.popup_card'
    );

    cardAddButton.addEventListener('click', () => {
      popupWithCardForm.open();
    })
}

export const loadAddCardHandler = (user) => {
    bindAddCardHandler(user);
}
