
//==================BURGER MENU // MOBILE SEARCH====================================//
const burgerIcon = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('burgerMenu');
const burgerOverlay = document.getElementById('burgerOverlay');
const mobileSearchIcon = document.getElementById('mobileSearchIcon');

burgerIcon.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  burgerOverlay.classList.toggle('active');
});

burgerOverlay.addEventListener('click', function() {
  burgerMenu.classList.remove('active');
  burgerOverlay.classList.remove('active');
});

mobileSearchIcon.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  burgerOverlay.classList.toggle('active');
});







