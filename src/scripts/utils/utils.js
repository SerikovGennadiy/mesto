import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const imagePopup = new PopupWithImage('.popup_preview');

export const handleCardClick = ({name, link})  => {
  imagePopup.open({name, link});
}
