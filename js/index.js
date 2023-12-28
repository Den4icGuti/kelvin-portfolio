const refs = {
  footerBtn: document.querySelector(".js-footer-btn"),
  modalMessage: document.querySelector(".js-modal-open"),
  formMessage: document.querySelector(".js-msg-form"),
};

const bd = [];

const { footerBtn, modalMessage, formMessage } = refs;

function onFormSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const message = e.currentTarget.message.value;

  if (email === "" || message.length < 10) {
    alert("error");
    return;
  } else {
    const newData = {
      email,
      message,
    };

    const data = JSON.stringify(newData);

    localStorage.setItem("newData", data);
    bd.push(data);
    console.log("new data", bd);
    formMessage.reset();
    onCloseForm();
  }
}

formMessage.addEventListener("submit", onFormSubmit);

function onOpenModal() {
  modalMessage.classList.add("show-modal-msg");
  window.addEventListener("keydown", onPressEsc);
}

footerBtn.addEventListener("click", onOpenModal);

function onCloseForm() {
  modalMessage.classList.remove("show-modal-msg");
  window.removeEventListener("keydown", onPressEsc);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseForm();
  }
}

function onPressEsc(e) {
  if (e.code === "Escape") {
    onCloseForm();
  }
}

modalMessage.addEventListener("click", onBackdropClick);
