const iconOpen = document.querySelector(".open");
const iconClose = document.querySelector(".close");
const menu = document.querySelector(".menu-open");
const menuPositions = [...document.querySelectorAll('.menu-open__items a')];





menuPositions.forEach(menuPosition => menuPosition.addEventListener('click',
    () => {
        menu.classList.toggle('menu-open__active')
    }
));

iconOpen.addEventListener("click", () => menu.classList.toggle("menu-open__active"));
iconClose.addEventListener("click", () => menu.classList.toggle("menu-open__active"));