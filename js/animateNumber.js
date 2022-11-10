let valueDisplays = document.querySelectorAll(".stats__num");
let interval = 5000;


//let posStats = document.getElementById("stats").scrollHeight;
// if (posStats > "735") {

// window.addEventListener("scroll", function (e) {
// 	if (window.scrollY > 700) {}}




valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	let duration = Math.floor(interval / endValue);

	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});