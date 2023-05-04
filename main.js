const navEmail = document.querySelector(".user");
const desktopMenu = document.querySelector(".desktop-menu")

navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}
