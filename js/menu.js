const iconOpen = document.querySelector(".open");
const iconClose = document.querySelector(".close");

const menu = document.querySelector(".menu-open");

iconOpen.addEventListener("click", () => menu.classList.toggle("menu-open__active"));

iconClose.addEventListener("click", () => menu.classList.toggle("menu-open__active"));


