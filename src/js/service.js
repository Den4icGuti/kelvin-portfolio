import { Notify } from "notiflix";

import shortid from "shortid";

const warningNotifaction = () =>
  Notify.warning("Все поля длжны быть заполнены");

const successNotifaction = () => Notify.success("Спасибо за ваш отзыв!");

const generaiteId = () => shortid.generate(4);

export { warningNotifaction, successNotifaction, generaiteId };
