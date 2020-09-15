const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');
bodyRef.classList.add('light-theme');

const switcherDark = event => {
  console.log(event);
  if (event.target.checked) {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  }
};

const switcherLight = event => {
  console.log(event);
  if (event.target.checked === false) {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

inputRef.addEventListener('change', switcherDark);
inputRef.addEventListener('change', switcherLight);
