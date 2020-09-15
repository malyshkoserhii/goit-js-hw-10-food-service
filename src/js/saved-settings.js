import { inputRef, bodyRef } from './references';
import { Theme } from './menu-theme-switcher';

function savedSetting() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    inputRef.checked = true;
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  }
}

export default savedSetting;
