const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");
const searchBar = document.getElementById("search-bar");
const searchIcon = document.getElementById('search-icon');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle('show-search-bar');
});