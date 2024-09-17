
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


//==================ACCORDION=========================================//
//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}






