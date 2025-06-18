// js/main.js

// AOS Initialization
AOS.init({
  duration: 1000,
  once: true,
});

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("active");
}
