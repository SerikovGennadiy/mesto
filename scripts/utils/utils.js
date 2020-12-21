import { openPopup } from './popup.js';

const preview = document.querySelector('.popup_preview');
const previewImage = preview.querySelector('.preview__image');
const previewTitle = preview.querySelector('.preview__title');

export const openCardPreview = ({name, link})  => {
  previewImage.setAttribute('src', link);
  previewImage.setAttribute('alt',`Изображение ${name}`)
  previewTitle.textContent = name;
  openPopup(preview);
}
