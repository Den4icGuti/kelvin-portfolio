const refs = {
  burgerOpenMenu: document.querySelector(".js-burger"),
  navMenu: document.querySelector(".js-nav"),
  closeMenu: document.querySelector(".js-close-nav-menu"),
  openForm: document.querySelector(".js-message"),
  formGroup: document.querySelector(".js-form-group"),
};

const { burgerOpenMenu, navMenu, closeMenu, openForm, formGroup } = refs;

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
