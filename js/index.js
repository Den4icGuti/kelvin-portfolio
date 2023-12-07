const refs = {
  footerBtn: document.querySelector(".js-footer-btn"),
  modalMessage: document.querySelector(".js-modal-open"),
};

const { footerBtn, modalMessage } = refs;

const openModalMessage = () => {
  modalMessage.classList.add("show-modal-msg");
};

footerBtn.addEventListener("click", openModalMessage);
