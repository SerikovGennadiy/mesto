import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

 const handler = new PopupWithImage('.popup_preview');

export const handleCardClick = ({name, link})  => {
  handler.open({name, link});
}
