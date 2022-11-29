const menuOverlay = document.querySelector('.menu-modal');
const closeMenuButton = document.querySelector('.menu-modal__button');
const openMenuBtn = document.querySelector('.mobile-menu');

openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('display-none');
});

closeMenuButton.addEventListener('click', e => {
  menuOverlay.classList.add('display-none');
});