import not from "./services";
const refs = {
  burgerOpenMenu: document.querySelector(".js-burger"),
  navMenu: document.querySelector(".js-nav"),
  closeMenu: document.querySelector(".js-close-nav-menu"),
  openForm: document.querySelector(".js-message"),
  formGroup: document.querySelector(".js-form-group"),
  form: document.querySelector(".js-form"),
};

const data = [];

const { burgerOpenMenu, navMenu, closeMenu, openForm, formGroup, form } = refs;

const onOpenBurgerMenu = () => {
  navMenu.classList.add("open-menu");
};

burgerOpenMenu.addEventListener("click", onOpenBurgerMenu);

const onCloseMenu = () => {
  navMenu.classList.remove("open-menu");
};

closeMenu.addEventListener("click", onCloseMenu);

const onOpenForm = () => {
  formGroup.classList.add("show-form");
  window.addEventListener("keydown", onPressEscape);
};

openForm.addEventListener("click", onOpenForm);

function onCloseForm() {
  formGroup.classList.remove("show-form");
  window.removeEventListener("keydown", onPressEscape);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseForm();
  }
}

function onPressEscape(e) {
  if (e.key === "Escape") {
    onCloseForm();
  }
}

formGroup.addEventListener("click", onBackdropClick);

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const text = e.currentTarget.text.value;

  if (email === "" || text === "") {
    return not.warning("Все поля должны быть заполнены!");
  }

  const newData = {
    email,
    text,
  };

  data.push(newData);
  console.log(data);
  const dataJson = JSON.stringify(data);
  console.log(dataJson);

  form.reset();
  onCloseForm();

  return localStorage.setItem("data", dataJson);
}

form.addEventListener("submit", onFormSubmit);
