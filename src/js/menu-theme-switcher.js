import { inputRef, bodyRef } from './references';
import savedSetting from './saved-settings';

export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef.classList.add(Theme.LIGHT);

savedSetting();

function themeSwitcher(event) {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }

  if (event.target.checked === false) {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

inputRef.addEventListener('change', themeSwitcher);
