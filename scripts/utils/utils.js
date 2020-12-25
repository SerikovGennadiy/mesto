import PopupWithImage from '../components/PopupWithImage.js';

export const handleCardClick = ({name, link})  => {
  const handler = new PopupWithImage({name, link}, '.popup_preview');
  handler.open();
}
