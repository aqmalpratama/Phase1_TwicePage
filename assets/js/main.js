/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	toggle = document.getElementById("nav-toggle");

/*===== MENU SHOW =====*/
toggle.addEventListener("click", function () {
	this.classList.toggle("open");
	navMenu.classList.toggle("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
	menu.classList.remove("open");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
