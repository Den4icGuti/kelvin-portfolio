import Notiflix, { Notify } from "notiflix";

const notifactionWarning = () =>
  Notify.warning("Все поля должны быть заполнены!");

const notifactionSuccess = () => Notify.success("Спасибо за ваш отзыв");

export { notifactionWarning, notifactionSuccess };
