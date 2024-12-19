// const dropdownBtn = document.querySelector(".dropdownButton");
// const dropdownMenu = document.querySelector(".dropdown-menu");

// dropdownBtn.addEventListener("click", () => {
//   dropdownMenu.classList.toggle("hidden");
// });

const dropdownMenu = document.querySelector(".menu-icon");

dropdownMenu.addEventListener("click", () => {
  document.querySelector(".dropdown-menu").classList.toggle("hidden");
});
