// let valueDisplays = document.querySelectorAll(".stats__num");
// let interval = 5000;

// valueDisplays.forEach((valueDisplay) => {
// 	let startValue = 0;
// 	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
// 	let duration = Math.floor(interval / endValue);

// 	let counter = setInterval(function () {
// 		startValue += 1;
// 		valueDisplay.textContent = startValue;
// 		if (startValue == endValue) {
// 			clearInterval(counter);
// 		}
// 	}, duration);
// });





//Version 2

//page__section -> stats
//data-digits-counter -> data-val
//page__counter -> stats__counter

window.addEventListener("load", windowLoad);

function windowLoad() {

	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounte) : 1000;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) window.requestAnimationFrame(step);
		};
		window.requestAnimationFrame(step);
	}

	//Start when page loaded
	//digitsCountersInit();
}