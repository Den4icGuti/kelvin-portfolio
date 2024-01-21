import { throttle, debounce } from 'throttle-debounce';
const refs = {
  burgerOpenMenu: document.querySelector('.js-burger'),
  navMenu: document.querySelector('.js-nav'),
  closeMenu: document.querySelector('.js-close-nav-menu'),
  openForm: document.querySelector('.js-message'),
  formGroup: document.querySelector('.js-form-group'),
  form: document.querySelector('.js-form'),
  texteria: document.querySelector('.js-texteria'),
};

// const data = [];
populateMessage();

const { burgerOpenMenu, navMenu, closeMenu, openForm, formGroup, form, texteria } = refs;

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

function onFormSubmit(e) {
  e.preventDefault();

  form.reset();
  localStorage.removeItem('fdb-message');
}

function onInputMessage(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem('fdb-message', message);
}

function populateMessage() {
  const savedMessage = localStorage.getItem('fdb-message');

  if (savedMessage) {
    console.log(savedMessage);
    refs.texteria.value = savedMessage;
  }
}

texteria.addEventListener('input', onInputMessage);

form.addEventListener('submit', onFormSubmit);
