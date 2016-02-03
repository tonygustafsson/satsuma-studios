(function () {
	"use strict";

	var menu = document.getElementById('menu'),
		menuButton = document.getElementById('menu-button'),
		body = document.getElementsByTagName('body')[0];
		
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