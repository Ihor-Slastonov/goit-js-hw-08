import throttle from "lodash.throttle";

const form = document.querySelector('.js-feedback-form');
const FORM_LOCAL_KEY = 'feedback-form-state';
const formData = {};
dataStorage();
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(FORM_LOCAL_KEY, JSON.stringify(formData));
}

function dataStorage() {
  const localData = JSON.parse(localStorage.getItem(FORM_LOCAL_KEY));
  if (localData) {
    form.elements.email.value = localData.email;
    form.elements.message.value = localData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const localData = JSON.parse(localStorage.getItem(FORM_LOCAL_KEY));
  if (localData) {
    console.log(localData);
  } else {
    console.log("FORM FIELDS ARE EMPTY");
  }
  e.currentTarget.reset();
  localStorage.removeItem(FORM_LOCAL_KEY);
}
