import throttle from 'lodash.throttle';

const FORM_KEY_VALUE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

populateFormFields();
const formData = {};

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(FORM_KEY_VALUE, JSON.stringify(formData));

}

function onFormSubmit(e) {
    e.preventDefault();
    const sentData = JSON.parse(localStorage.getItem(FORM_KEY_VALUE));
    if (sentData) {
        console.log("user-form-data:",sentData)
    }
    e.currentTarget.reset();
    localStorage.removeItem(FORM_KEY_VALUE);
}

function populateFormFields() {
    const savedData = JSON.parse(localStorage.getItem(FORM_KEY_VALUE));
    if (savedData) {
        form.children[0].firstElementChild.value = savedData.email;
        form.children[1].firstElementChild.value = savedData.message;
    }
}
