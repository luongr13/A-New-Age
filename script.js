let nav_menu = document.querySelector('#menu');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () => {
  if (nav_menu.classList.contains('hidden')) {
    nav_menu.classList.remove('hidden');
    toggle.textContent = 'Close';
    toggle.setAttribute('aria-expanded', 'true');
  } else {
    nav_menu.classList.add('hidden');
    toggle.textContent = 'Menu';
    toggle.setAttribute('aria-expanded', 'false');
  }
})