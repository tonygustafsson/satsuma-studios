(function() {
	//Animated scroll to anchor links (#)
	"use strict";

	var speed = 500,
    currentUrl = window.location.href,
    baseUrl = 'http://www.satsuma.se/',
	moving_frequency = 15,
	links = document.getElementsByTagName('a'),
	href,
	i;

    if (currentUrl.indexOf('.html') > -1 && currentUrl.indexOf('index.html') === -1) {
        // Only run on start page
        return;
    }

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
		if (href !== null && href.length > 1 && href.indexOf('#') > -1) {
			links[i].onclick = function() {
				var element,
				href = this.attributes.href.value.toString();

				if (element = document.getElementById(href.substr(baseUrl.length + 1))) {
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