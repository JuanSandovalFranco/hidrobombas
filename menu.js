const menu = document.querySelector(".menu");

const menuContent = document.querySelector(".navbar");

const closeMenu = document.querySelector(".menu-close");

menu.addEventListener("click", (e) => {
  menuContent.classList.add("menu-active");
});

closeMenu.addEventListener("click", (e) => {
  menuContent.classList.remove("menu-active");
});
