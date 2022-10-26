/*!
 * Simple Navbar  v1.1.0
 * Copyright 2022 Codex Libra
 * Licensed under MIT (https://github.com/codexlibra/simple-navbar/blob/master/LICENSE)
 */
let sidebar_items_dropdown = document.querySelectorAll(".navbar-item-dropdown");
let item_dropdown1 = sidebar_items_dropdown[1];
let dropdown_submenu = item_dropdown1.children[1];

let sidebar_links_dropdown = document.querySelectorAll(".navbar-link-dropdown");
let link_dropdown_submenu = sidebar_links_dropdown[1];

let screen_width = window.innerWidth;

link_dropdown_submenu.addEventListener('mouseenter', navbarDropdown);

function navbarDropdown() {
	let submenu_class = dropdown_submenu.classList[0];

	screen_width = window.innerWidth;
	let scroll_screen_width = document.documentElement.scrollWidth;

	if (scroll_screen_width > screen_width) {		
		// If the scrolling screen width is greater than the screen width, set the submenu on the left side
		if (submenu_class == "dropdown-submenu") {
			dropdown_submenu.classList.replace("dropdown-submenu", "dropdown-submenu-left");
		}
	} else {
		// First set the submenu to the right, then check if it should be moved
		if (submenu_class != "dropdown-submenu") {
			dropdown_submenu.classList.replace("dropdown-submenu-left", "dropdown-submenu");
			submenu_class = "dropdown-submenu";
		}

		scroll_screen_width = document.documentElement.scrollWidth;
		// Check again if the screen width with scroll is greater than the screen width, to prevent the submenu from going off the screen when hovering over the link again
		if (scroll_screen_width > screen_width) {
			if (submenu_class == "dropdown-submenu"){
				// Set the submenu on the left side
				dropdown_submenu.classList.replace("dropdown-submenu", "dropdown-submenu-left");
			}
		}
	}
}