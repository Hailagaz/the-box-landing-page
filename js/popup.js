const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];

		popupLink.addEventListener("click", function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);

			popupOpen(currentPopup);
			e.preventDefault();
		});


	}
}

const popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {}
}