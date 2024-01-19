import { Notify } from 'notiflix';

const notifactionWarning = () => Notify.warning('Все поля должны быть заполнены!');

// module.exports = () => Notify.success('Спасибо за ваш отзыв');

const notifactionSuccess = () => Notify.success('Спасибо за отзыв!');

export { notifactionWarning, notifactionSuccess };
