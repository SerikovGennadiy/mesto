export default class UserInfo {
  constructor(profile, nameSelector, aboutSelector, photoSelector) {
    this._id     = profile._id;
    this._name   = profile.name;
    this._about  = profile.about;
    this._avatar = profile.avatar;
    this._cohort = profile.cohort;

    this._nameTag = document.querySelector(nameSelector);
    this._aboutTag = document.querySelector(aboutSelector);
    this._avatarLink = document.querySelector(photoSelector);

    this._nameTag.textContent = this._name;
    this._aboutTag.textContent = this._about;
    this._avatarLink.src = this._avatar;
  }

  getUserInfo = () => {
    return {
      _id     : this._id,
      name   : this._name,
      about  : this._about,
      avatar : this._avatar,
      cohort : this._cohort
    }
  }

  setUserInfo = (name, about) => {
    this._nameTag.textContent = name;
    this._aboutTag.textContent = about;
  }

  setUserPhoto = (link) => {
    this._avatarLink.src = link;
  }
}
