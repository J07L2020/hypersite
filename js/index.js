const nav__button = document.querySelector(".nav__button");
const nav__menu = document.querySelector(".nav__menu");

nav__button.addEventListener("click", () => {
    nav__menu.classList.toggle("nav__menu--trans");
});