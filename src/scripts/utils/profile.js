import { api } from '../utils/api.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import { validSettings } from '../utils/constant.js';
import PopupWithForm from '../components/PopupWithForm.js';

import {  profileForm,
          profileNameInput,
          profileAboutInput, 
          profileEditButton,
          avatarForm,
          avatarInput,  
          profileUpdateAvatar } from './constant.js';

const profileFormValidation = new FormValidator(validSettings, profileForm);
      profileFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(validSettings, avatarForm);
      avatarFormValidation.enableValidation();

// ====== привязка обработчиков на кнопки в разделе профиля ======
const bindProfileHandlers = (user) => {
  // ================ форма профиля ================
  const popupWithProfileForm = new PopupWithForm({
    init: () => {
      const { name, about } = user.getUserInfo();
      profileNameInput.value = name;
      profileAboutInput.value = about;
      profileFormValidation.checkFormValidity();
    },
    submit: (event) => {
      event.preventDefault();
      profileEditButton.textContent = 'Cохранение...';
      api.updateProfile(
        profileNameInput.value,
        profileAboutInput.value
      )
      .then(updatedProfile => {
          profileEditButton.textContent = 'Cохранить';
          user.setUserInfo(updatedProfile.name, updatedProfile.about)
      })
      .catch(err => {
        profileEditButton.textContent = 'Cохранить';
        console.log(err);
      });
      popupWithProfileForm.close();
    }},
    '.popup_profile'
  );

  profileEditButton.addEventListener('click', () => {
    popupWithProfileForm.open();
  });

  // =============== форма обновления аватара ==========
  const popupWithAvatarForm = new PopupWithForm({
    init: () => {
      console.log('avatar', user.getUserInfo())
      const { avatar } = user.getUserInfo();
      avatarInput.value = avatar;
      avatarFormValidation.checkFormValidity();
    },
    submit: (event) => {
      event.preventDefault();
      profileUpdateAvatar.textContent = 'Cохранение...';
      api.updateAvatar(
        avatarInput.value
      )
      .then(updatedProfile => {
        profileUpdateAvatar.textContent = 'Cохранить';
        user.setUserPhoto(updatedProfile.avatar)
      })
      .catch(err => {
        profileUpdateAvatar.textContent = 'Cохранить';
        console.log(err);
      });
     popupWithAvatarForm.close();
    }},
    '.popup_update-avatar'
  );

  profileUpdateAvatar.addEventListener('click', () => {
    popupWithAvatarForm.open();
  });
}

// =========== загрузка профиля ================
 const whoAmI = () => {
   return api.getProfile()
      .then(me => {
         const user = new UserInfo(me, '.profile__name', '.profile__status', '.profile__avatar-photo');
         return user;
      })
      .catch(console.log.bind(console));
}

export const loadUserProfile = () => {
  return whoAmI()
     .then(user => {
        bindProfileHandlers(user);
        return user;
     })
     .catch(console.log.bind(console));
}

