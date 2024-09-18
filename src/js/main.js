
//==================BURGER MENU // MOBILE SEARCH====================================//
const burgerIcon = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('burgerMenu');
const burgerOverlay = document.getElementById('burgerOverlay');
const mobileSearchIcon = document.getElementById('mobileSearchIcon');
const body = document.body;

function toggleMenu() {
  burgerMenu.classList.toggle('active');
  burgerOverlay.classList.toggle('active');
  
  if (burgerMenu.classList.contains('active')) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
}

burgerIcon.addEventListener('click', toggleMenu);

burgerOverlay.addEventListener('click', function() {
  burgerMenu.classList.remove('active');
  burgerOverlay.classList.remove('active');
  body.classList.remove('no-scroll'); // Réactiver le défilement
});

mobileSearchIcon.addEventListener('click', toggleMenu);



//==================ACCORDION=========================================//
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






