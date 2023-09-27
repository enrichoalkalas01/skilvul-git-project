//* Hamburger Button
const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav-menu");

if (navBtn) {
  navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
