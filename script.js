let nav_menu = document.querySelector('.menu-container');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () => {
  if (nav_menu.classList.contains('not-active')) {
    nav_menu.classList.remove('not-active');
    toggle.setAttribute('aria-expanded', 'true');
  } else {
    nav_menu.classList.add('not-active');
    toggle.setAttribute('aria-expanded', 'false');
  }
})