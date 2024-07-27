let nav_menu = document.querySelector('#menu');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () => {
  if (nav_menu.classList.contains('hidden')) {
    nav_menu.classList.remove('hidden');
    toggle.textContent = 'Close';
    this.setAttribute('aria-expanded', 'true');
  } else {
    nav_menu.classList.add('hidden');
    toggle.textContent = 'Menu';
    this.setAttribute('aria-expanded', 'false');
  }
})