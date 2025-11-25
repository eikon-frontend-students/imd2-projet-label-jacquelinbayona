// Main JS file
// Hometour/widget-related code removed as requested.
// Keep this file for future scripts.

// Example: small init if needed later
document.addEventListener("DOMContentLoaded", () => {
  // Placeholder: no hometour logic present.
});

export {};
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".playlist-btn");
  setTimeout(() => {
    btn.classList.add("show");
  }, 2000); // bouton apparaît après 2 secondes
});
