//Get data and build structure
fetch("js/addHtml.json")
	.then((response) => response.json())
	.then((data) => {
		let cards = '';

		for (let card of data) {
			cards += `
				<div class="projects__card active" data-index="0">
					<img class="projects__image" src="${card.photo}"
						alt="Example of constructed building">
					<div class="projects__info">
						<p>${card.name}</p>
						<p>${card.location}</p>
					</div>
				</div>
			`;
		}
	})
	.catch((error) => {
		document.querySelector('.projects__constructed').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
	});