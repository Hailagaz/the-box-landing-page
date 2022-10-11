document.addEventListener("DOMContentLoaded", () => {
	//Scroll into view
	if (window.location.hash) {
		document.querySelector(window.location.hash).scrollIntoView();
	}

	//Burger menu
	const iconHeader = document.querySelector('.header__icon');
	const navHeader = document.querySelector('.header__nav');
	if (iconHeader) {
		iconHeader.addEventListener("click", function (event) {
			document.body.classList.toggle('_lock');
			iconHeader.classList.toggle('_active');
			navHeader.classList.toggle('_active');
		});
	}

	//Scroll to
	const menuLinks = document.querySelectorAll('.header__link[data-goto]');
	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});

		function onMenuLinkClick(e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

				if (iconHeader.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					iconHeader.classList.remove('_active');
					navHeader.classList.remove('_active');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();

			}
		}
	}

	//Scrolltop button
	const scrollBtn = document.querySelector('.showbutton');
	window.addEventListener("scroll", function (e) {
		if (window.scrollY > 700) {
			scrollBtn.classList.remove('showbutton__hidden');
		} else if (window.scrollY < 700) {
			scrollBtn.classList.add('showbutton__hidden');
		}
	});
	scrollBtn.addEventListener("click", function (e) {
		window.scrollTo(0, 0);
	});

});