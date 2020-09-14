import menuTemplate from '../templates/menu.hbs';
import menuContent from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = menuTemplate(menuContent);
menuRef.insertAdjacentHTML('beforeend', markup);
