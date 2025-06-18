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

// Auto-close mobile menu on link click
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#mainNav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("mainNav").classList.remove("active");
    });
  });
});
