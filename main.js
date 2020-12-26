(()=>{"use strict";var e={formSelectorClass:".popup__form",inputSelectorClass:".popup__field",inputErrorClass:"popup__field_error",errorClass:"popup__field-error_active",submitButtonSelectorClass:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive"},t=document.querySelector("body");function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleEscClose=function(e){"Escape"==e.key&&n.close()},this._handleOverlayClickClose=function(e){e.target.classList.contains("popup_opened")&&n.close()},this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var r,o;return r=e,(o=[{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",this._handleOverlayClickClose),t.addEventListener("keydown",this._handleEscClose),this._closeButton.addEventListener("click",(function(){e.close()}))}},{key:"unsetEventListeners",value:function(){var e=this;this._popup.removeEventListener("click",this._handleOverlayClickClose),t.removeEventListener("keydown",this._handleEscClose),this._closeButton.removeEventListener("click",(function(){e.close()}))}},{key:"open",value:function(){this.setEventListeners(),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this.unsetEventListeners(),this._popup.classList.remove("popup_opened")}}])&&n(r.prototype,o),e}();function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(p,e);var t,n,r,o,l=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(r);if(o){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function p(e,t){var n,r=e.name,o=e.link;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=l.call(this,t))._name=r,n._link=o,n._previewImage=n._popup.querySelector(".preview__image"),n._previewTitle=n._popup.querySelector(".preview__title"),n}return t=p,(n=[{key:"open",value:function(){this._previewImage.setAttribute("src",this._link),this._previewImage.setAttribute("alt","Изображение ".concat(this._name)),this._previewTitle.textContent=this._name,c(a(p.prototype),"open",this).call(this)}}])&&i(t.prototype,n),p}(r),p=function(e){var t=e.name,n=e.link;new l({name:t,link:n},".popup_preview").open()};const f=function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._deleteCard=function(e){e.target.closest(".element").remove()},this._likeCard=function(e){e.target.closest(".element").querySelector(".element__like-button").classList.toggle("element__like-icon_liked")},this._getDOMTemplate=function(){return document.querySelector(o._templateSelector).cloneNode(!0).content.querySelector(".element")},this._initialize=function(){var e=o._card.querySelector(".element__picture");e.setAttribute("src",o._link),e.setAttribute("alt","Изображение ".concat(o._name)),o._card.querySelector(".element__title").textContent=o._name},this._setEventListeners=function(){o._card.querySelector(".element__picture").addEventListener("click",(function(){o._previewer(o._initialCard)})),o._card.querySelector(".element__like-button").addEventListener("click",o._likeCard),o._card.querySelector(".element__trash-button").addEventListener("click",o._deleteCard)},this.create=function(){return o._card=o._getDOMTemplate(),o._initialize(),o._setEventListeners(),o._card},this._initialCard=t,this._name=this._initialCard.name,this._link=this._initialCard.link,this._templateSelector=n,this._previewer=r},_=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._showInputError=function(e){e.classList.add(r._config.inputErrorClass);var t=r._form.querySelector("#".concat(e.id,"-error"));t.classList.add(r._config.errorClass),t.textContent=e.validationMessage},this._hideInputError=function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClass),t.textContent=""},this._isFormHaveAnyInvalidInput=function(){return r._inputList.some((function(e){return!e.validity.valid}))},this._toggleButtonState=function(){r._isFormHaveAnyInvalidInput()?r._buttonElement.classList.add(r._config.inactiveButtonClass):r._buttonElement.classList.remove(r._config.inactiveButtonClass)},this._checkInputValidity=function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)},this._setEventListeners=function(){r._inputList=Array.from(r._form.querySelectorAll(r._config.inputSelectorClass)),r._buttonElement=r._form.querySelector(r._config.submitButtonSelectorClass),r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))},this.enableValidation=function(){r._form.addEventListener("submit",(function(e){return e.preventDefault()})),r._setEventListeners(r._form)},this.checkFormValidity=function(){r._inputList.forEach((function(e){e.value&&r._checkInputValidity(e),r._toggleButtonState()}))},this._config=t,this._form=n};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function c(e,t){var n,r,o,s=e.init,u=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(o=i.call(this,t))._getInputValues=function(){return Array.from(o._form.querySelectorAll("input")).reduce((function(e,t){return e[t.name]=t.value,e}),{})},o.setEventListeners=function(){o._form.addEventListener("submit",o._submitHandler),b((n=v(o),g(c.prototype)),"setEventListeners",n).call(n)},o.unsetEventListener=function(){o._form.removeEventListener("submit",o._submitHandler),b((r=v(o),g(c.prototype)),"unsetEventListener",r).call(r)},o._submitHandler=u,o._init=s,console.log(o._popup),o._form=o._popup.querySelector(".popup__form"),o}return t=c,(n=[{key:"open",value:function(){"function"==typeof this._init&&this._init(),b(g(c.prototype),"open",this).call(this)}},{key:"close",value:function(){b(g(c.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),c}(r),S=new function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clear=function(){r._container.innerHTML=""},this.addItem=function(e){r._container.prepend(e)},this.renderItem=function(e){r._renderer(e)},this.renderItems=function(){r.clear(),r._items.forEach((function(e){r._renderer(e)}))},this._items=o,this._renderer=i,this._container=document.querySelector(n)}({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=new f(e,"#card-template",p).create();S.addItem(t)}},".elements__list"),E=document.querySelector(".popup_profile").querySelector(".popup__form"),w=E.querySelector(".popup__field_text_name"),C=E.querySelector(".popup__field_text_status"),L=new _(e,E);L.enableValidation();var O=new function e(t){var n=this,r=t.nameSelector,o=t.statusSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getUserInfo=function(){return{name:n._name.textContent,status:n._status.textContent}},this.setUserInfo=function(e){var t=e.name,r=e.status;n._name.textContent=t,n._status.textContent=r},this._name=document.querySelector(r),this._status=document.querySelector(o)}({nameSelector:".profile__name",statusSelector:".profile__status"}),q=new k({init:function(){var e=O.getUserInfo(),t=e.name,n=e.status;w.value=t,C.value=n,L.checkFormValidity()},submit:function(e){e.preventDefault();var t=q._getInputValues();O.setUserInfo({name:t.profile__name,status:t.profile__status}),q.close()}},".popup_profile"),I=function(){q.open()},j=document.querySelector(".popup_card").querySelector(".popup__form"),x=new _(e,j);x.enableValidation();var R=new k({init:function(){j.reset(),x.checkFormValidity()},submit:function(e){e.preventDefault();var t=R._getInputValues(),n={name:t.card__name,link:t.card__link};S.renderItem(n),R.close()}},".popup_card"),P=function(){R.open()},T=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button");document.addEventListener("DOMContentLoaded",(function(){T.addEventListener("click",I),B.addEventListener("click",P),S.renderItems()}))})();