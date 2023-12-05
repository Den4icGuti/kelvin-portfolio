const refs = {
  footerBtn: document.querySelector(".js-footer-btn"),
};

const { footerBtn } = refs;

const openModalMessage = () => {
  console.log("open modal");
};

footerBtn.addEventListener("click", openModalMessage);
