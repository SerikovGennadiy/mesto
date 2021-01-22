class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  _showInputError = (inputElement) => {
    inputElement.classList.add(this._config.inputErrorClass);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
          errorElement.classList.add(this._config.errorClass);
          errorElement.textContent = inputElement.validationMessage;
  }

 _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
          inputElement.classList.remove(this._config.inputErrorClass);
          errorElement.classList.remove(this._config.errorClass);
          errorElement.textContent = '';
  }

  _isFormHaveAnyInvalidInput = () => {
    return this._inputList.some(inputElement=> {
        return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = () => {
    if(this._isFormHaveAnyInvalidInput()){
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    }
    else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

 _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
 }

 _setEventListeners = () =>{
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelectorClass));
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelectorClass);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
      });
    });
 }

 enableValidation = () => {
    this._form.addEventListener('submit', event => event.preventDefault());
    this._setEventListeners(this._form);
  }

  checkFormValidity = () => {
    this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      });
    this._toggleButtonState();
  }
}

export default FormValidator;
