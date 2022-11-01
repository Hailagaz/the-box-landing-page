const projectsBtns = document.querySelectorAll('.projects__btn');

for (const btn of projectsBtns) {
	btn.addEventListener('click', e => {
		const btnIndex = e.target.dataset.index;
		const activeprojectsBlock = document.querySelector('.projects__block.active');
		if (activeprojectsBlock.dataset.index === btnIndex) {
			return;
		}

		const activeprojectsBtn = document.querySelector('.projects__btn.active');
		e.target.classList.add('active');
		activeprojectsBtn.classList.remove('active');

		const projectsBlock = document.querySelector(`.projects__block[data-index="${btnIndex}"]`);
		activeprojectsBlock.classList.remove('active');
		projectsBlock.classList.add('active');
	});
}



//Trying add swiper slider instead of static structure
//Changes in html projects__block

fetch("js/projectsCommercial.json")
	.then((response) => response.json())
	.then((data) => {
		let slides = '';

		for (let project of data) {
			slides += `
				<div class="swiper-slide projects__slide projects__block" data-index="1">
					<div class="projects__card">
						<img class="projects__image" src="${project.image}"
							alt="Example of constructed building">
						<div class="projects__info">
							<p>${project.name}</p>
							<p>${project.location}</p>
						</div>
					</div>
				</div>
			`;
		}

		document.querySelector('.projects__slider1').innerHTML = `
			<div class="swiper-wrapper projects__wrapper">
				${slides}
		  	</div>
		  	<!--  -->
		  	<div class="swiper-pagination"></div>
		  	<!-- <div class="swiper-button-prev"></div> -->
		  	<!-- <div class="swiper-button-next"></div> -->
		`;

		const swiper1 = new Swiper('.projects__slider1', {
			loop: true,

			slidesPerView: 2,
			watchOverflow: true,
			spaceBetween: 125,
			slidesPerGroup: 1,
			centeredSlides: true,

			effect: 'coverflow',
			coverflowEffect: {
				rotate: 0,
				slideShadows: false,
				scale: 1.0,
			},
			slideToClickedSlide: true,

			keyboard: {
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true,
			},

			mousewheel: {
				sensitivity: 1,
				//eventTarget: ".testimonials__slider",
			},

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.projects__button-next',
				prevEl: '.projects__button-prev',
			},
		});
	})
	.catch((error) => {
		document.querySelector('.projects__slider1').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
	});