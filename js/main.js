// main.js

// Wait for dynamic includes to load
document.addEventListener("DOMContentLoaded", () => {
  // Small delay to ensure header/footer is injected
  setTimeout(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Toggle menu
    const toggleBtn = document.querySelector(".menu-toggle");
    const nav = document.getElementById("mainNav");

    if (toggleBtn && nav) {
      toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
      });

      // Auto-close on nav click
      nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          nav.classList.remove("active");
        });
      });
    }
  }, 150); // Slight buffer for dynamic content to load
});
