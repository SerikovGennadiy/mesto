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

  _hasInvalidInput = (inputList) => {
    return inputList.some(inputElement=> {
        return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = (inputList, buttonElement) => {
    if(this._hasInvalidInput(inputList)){
        buttonElement.classList.add(this._config.inactiveButtonClass);
    }
    else {
        buttonElement.classList.remove(this._config.inactiveButtonClass);
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
    const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelectorClass));
    const buttonElement = this._form.querySelector(this._config.submitButtonSelectorClass);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(inputList, buttonElement);
        });
    });
 }

 enableValidation = () => {
    this._form.addEventListener('submit', event => event.preventDefault());
    this._setEventListeners(this._form);
  }
}

export default FormValidator;
