const refs = {
  burgerOpenMenu: document.querySelector('.js-burger'),
  navMenu: document.querySelector('.js-nav'),
  closeMenu: document.querySelector('.js-close-nav-menu'),
  openForm: document.querySelector('.js-message'),
  formGroup: document.querySelector('.js-form-group'),
  form: document.querySelector('.js-form'),
  input: document.querySelector('.js-form input'),
  textarea: document.querySelector('.js-form textarea'),
};

const STORAGE_KEY = 'fdb-form';

const { burgerOpenMenu, navMenu, closeMenu, openForm, formGroup, textarea, form, input } = refs;

saveData();

console.log(input, textarea);
const onOpenBurgerMenu = () => {
  navMenu.classList.add('open-menu');
};

burgerOpenMenu.addEventListener('click', onOpenBurgerMenu);

const onCloseMenu = () => {
  navMenu.classList.remove('open-menu');
};

closeMenu.addEventListener('click', onCloseMenu);

const onOpenForm = () => {
  formGroup.classList.add('show-form');
  window.addEventListener('keydown', onPressEscape);
  window.addEventListener('click', onBackdropClick);
};

openForm.addEventListener('click', onOpenForm);

function onCloseForm() {
  formGroup.classList.remove('show-form');
  window.removeEventListener('keydown', onPressEscape);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseForm();
  }
}

function onPressEscape(e) {
  if (e.key === 'Escape') {
    onCloseForm();
  }
}

function onInputForm() {
  let data = {
    email: input.value,
    textarea: textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;

  const inputMessage = textarea.value;

  if (email === '') {
    alert('The mail field must be filled in!');
    return;
  }

  const currentData = {
    email: email,
    textarea: inputMessage,
  };

  console.log(currentData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function saveData() {
  const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (currentData) {
    input.value = currentData.email;
    textarea.value = currentData.textarea;
  }
}

form.addEventListener('input', throttle(onInputForm, 1000));

form.addEventListener('submit', onFormSubmit);

formGroup.addEventListener('click', onBackdropClick);
