const validSettings = {
    formSelectorClass: '.popup__form',
    inputSelectorClass: '.popup__field',
    inputErrorClass: 'popup__field_error',
    errorClass: 'popup__field-error_active',
    submitButtonSelectorClass: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive'
};

function showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validSettings.inputErrorClass);
    errorElement.classList.add(validSettings.errorClass);
    errorElement.textContent = errorMessage;
};
      
function hideInputError(formElement, inputElement){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validSettings.inputErrorClass);
    errorElement.classList.remove(validSettings.errorClass);
    errorElement.textContent = '';
};

function hasInvalidInput(inputList){
    return inputList.some(inputElement=> {
        return !inputElement.validity.valid;
    });
}
    
function toggleButtonState(inputList, buttonElement){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(validSettings.inactiveButtonClass);
    }
    else {
        buttonElement.classList.remove(validSettings.inactiveButtonClass);
    }
}
    
function checkInputValidity(formElement, inputElement){
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

function setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll(validSettings.inputSelectorClass));
    const buttonElement = formElement.querySelector(validSettings.submitButtonSelectorClass);
    
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    }); 
};

function checkFormValidity(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(validSettings.inputSelectorClass));
    const buttonElement = formElement.querySelector(validSettings.submitButtonSelectorClass); 
    toggleButtonState(inputList, buttonElement);
}

function enableValidation(settings) {
    if(settings != undefined) { 
        Object.assign(validSettings, settings);
    }   

    const formList = Array.from(document.querySelectorAll(validSettings.formSelectorClass));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};





