import { api } from '../utils/api.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import { validSettings } from '../utils/constant.js';
import PopupWithForm from '../components/PopupWithForm.js';

const profile = document.querySelector('.popup_profile');
const profileForm = profile.querySelector('.popup__form');
const profileNameInput = profileForm.querySelector('.popup__field_text_name');
const profileAboutInput = profileForm.querySelector('.popup__field_text_status');
const profileFormValidation = new FormValidator(validSettings, profileForm);
      profileFormValidation.enableValidation();

const profileEditButton = document.querySelector('.profile__edit-button');

const avatar = document.querySelector('.popup_update-avatar');
const avatarForm = avatar.querySelector('.popup__form');
const avatarInput = avatarForm.querySelector('.popup__field_url_link');
const avatarFormValidation = new FormValidator(validSettings, avatarForm);
      avatarFormValidation.enableValidation();

const profileUpdateAvatar = document.querySelector('.profile__avatar-button');

// ====== привязка обработчиков на кнопки в разделе профиля ======
const bindProfileHandlers = (user) => {
  // ================ форма профиля ================
  const popupWithProfileForm = new PopupWithForm({
    init: () => {
      console.log('profile', user);
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

