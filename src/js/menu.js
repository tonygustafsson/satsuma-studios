(function () {
	"use strict";

	var menu = document.getElementById('menu'),
		menuButton = document.getElementById('menu-button'),
		body = document.getElementsByTagName('body')[0],
		satsumaLogo = document.getElementById('satsuma-menu-logo');

	menuButton.addEventListener('click', function (e) {
		e.preventDefault();

		if (menu.className === "menu active-menu") {
			menu.className = "menu";
			menuButton.style.zIndex = "2";
		}
		else {
			menu.className = "menu active-menu";
			menuButton.style.zIndex = "1";
		}
	});

	menu.addEventListener('mouseover', function (e) {
		satsumaLogo.className = 'satsuma-menu-logo satsuma-menu-logo-large';
	});

	menu.addEventListener('mouseout', function (e) {
		satsumaLogo.className = 'satsuma-menu-logo';
	});

	function closeStartMenu (e) {
		if (e.target === menuButton || e.target.parentNode === menuButton) {
			return;
		}

		menu.className = "menu";
		menuButton.style.zIndex = "2";
	}

	body.addEventListener('click', closeStartMenu);
	body.addEventListener('touchend', closeStartMenu);
})();