import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

export const handleCardClick = ({name, link})  => {
  const handler = new PopupWithImage({name, link}, '.popup_preview');
  handler.open();
}
