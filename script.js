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
		for (var x = 0; x < menu.getElementsByTagName('li').length; x = x + 1) {
			var menuItem = menu.getElementsByTagName('li')[x].childNodes[0];

			if (e.target === menuItem) {
				return;
			}
		}

		if (e.target === menuButton || e.target.parentNode === menuButton) {
			return;
		}

		menu.className = "menu";
		menuButton.style.zIndex = "2";
	}

	body.addEventListener('click', closeStartMenu);
	body.addEventListener('touchend', closeStartMenu);
})();

(function() {
	//Animated scroll to anchor links (#)
	"use strict";

	var speed = 500,
	moving_frequency = 15,
	links = document.getElementsByTagName('a'),
	href,
	i;

	var getScrollTopElement = function(e) {
		var top = 0;

		while (e.offsetParent !== undefined && e.offsetParent !== null) {
			top += e.offsetTop + (e.clientTop !== null ? e.clientTop : 0);
			e = e.offsetParent;
		}

		return top;
	};

	for (i = 0; i < links.length; i = i + 1) {   
	    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.value.toString();

		if (href !== null && href.length > 1 && href.substr(0, 1) === '#') {
			links[i].onclick = function() {
				var element,
				href = this.attributes.href.value.toString();

				if (element = document.getElementById(href.substr(1))) {
					var hop_count = speed / moving_frequency,
					getScrollTopDocumentAtBegin = document.documentElement.scrollTop + document.body.scrollTop,
					gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count,
					j;

					for(j = 1; j <= hop_count; j = j + 1) {
						(function() {
							var hop_top_position = gap * j;
							setTimeout(function() {
								window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
							}, moving_frequency * j);
						})();
					}
				}

				return false;
			};
	    }
	}
})();