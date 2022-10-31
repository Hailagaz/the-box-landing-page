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