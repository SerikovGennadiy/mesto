class Card {
  constructor(initialCard, templateSelector, previewer, remover, liker, userId) {
    this._templateSelector = templateSelector;

    this._initialCard = initialCard;

    this._likes       = initialCard.likes;
    this._id          = initialCard._id;
    this._name        = initialCard.name;
    this._link        = initialCard.link;
    this._owner       = {
      name    : initialCard.owner.name,
      about   : initialCard.owner.about,
      avatar  : initialCard.owner.avatar,
      _id     : initialCard.owner._id,
      cohort  : initialCard.owner.cohort,
    };
    this._createdAt = initialCard.owner.createdAt

    this._previewer = previewer;
    this._remover   = remover;
    this._liker     = liker;

    this._userId = userId;
  }


  _checkOwnLike = (like) => like._id === this._userId;


  _likeCard = () => {
     this._likeButton.classList.toggle('element__like-icon_liked');
     const isLiked = this._likeButton.classList.contains('element__like-icon_liked');
     this._liker(this._id, this._likeCounter, isLiked);
  }

  _getDOMTemplate = () => {
    return document
            .querySelector(this._templateSelector)
            .cloneNode(true)
            .content
            .querySelector('.element');
  }

 _initialize = () => {
    this._likeButton = this._card.querySelector('.element__like-button');
    if(this._likes.some(this._checkOwnLike)) {
      this._likeButton.classList.add('element__like-icon_liked');
    }

    this._likeCounter = this._card.querySelector('.element__like-counter');
    this._likeCounter.textContent = this._likes.length;

    this._cardPicture = this._card.querySelector('.element__picture');
    this._cardPicture.setAttribute('src', this._link);
    this._cardPicture.setAttribute('alt', `Изображение ${this._name}`);

    const cardTitle = this._card.querySelector('.element__title');
          cardTitle.textContent = this._name;
  }

  _setEventListeners = () => {
    this._cardPicture.addEventListener('click', () => { this._previewer(this._initialCard); });
    this._likeButton.addEventListener('click', this._likeCard);

    const trashButton =  this._card.querySelector('.element__trash-button');
          trashButton.addEventListener('click', () => {
            this._remover(this);
          });
  }

  removeCard = () => this._card.remove();
  getCardId =  () => this._id;

  create = () => {
    this._card = this._getDOMTemplate();
      this._initialize();
      this._setEventListeners();
    return this._card;
  }
}

export default Card;
