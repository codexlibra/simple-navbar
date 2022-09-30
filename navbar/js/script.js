/*!
 * Simple Navbar  v1.0.0
 * Copyright 2022 Codex Libra
 * Licensed under MIT (https://github.com/codexlibra/simple-navbar/blob/master/LICENSE)
 */
var dropdown = document.querySelector(".dropdown-item-submenu");
var dropdown_submenu = dropdown.children[2];

dropdown.addEventListener("mouseenter", function() {
	// get the current class of the submenu (right | left)
	var submenu_class_list = document.querySelector(".submenu");
	var submenu_class = "";

	if (submenu_class_list != null) {
		submenu_class = "submenu";
	} else {
		submenu_class = "submenu-left";
	}

	// get the width of the current screen
	let screen_width = window.innerWidth; 
	
	// get the width of the current screen with scroll
	let scroll_screen_width = document.documentElement.scrollWidth;

	// if the width of the screen with scroll is greater than the first, set the submenu on the left side
	if (scroll_screen_width > screen_width) {		
		if (submenu_class == "submenu"){
			dropdown_submenu.classList.replace("submenu", "submenu-left");
		}
	} else {
		// set the submenu on the right side
		if (submenu_class != "submenu"){
			dropdown_submenu.classList.replace("submenu-left", "submenu");
			submenu_class = "submenu";
		}
		// again check if the submenu position fits on the screen
		scroll_screen_width = document.documentElement.scrollWidth;

		if (scroll_screen_width > screen_width) {
			// set the submenu on the left side
			if (submenu_class == "submenu"){
				dropdown_submenu.classList.replace("submenu", "submenu-left");
			}
		}
	}
});