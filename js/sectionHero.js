//Get data and build sliders structure
fetch("js/featureProjects.json")
	.then((response) => response.json())
	.then((data) => {
		let slides = '';

		for (let project of data) {
			slides += `
				<div class="swiper-slide hero__slide">
					<div class="hero__photo">
						<img src="${project.photo}" alt="Photo of build project">
					</div>
					<div class="hero__header">
						<h1>Building things is our mission.</h1>
					</div>
					<div class="hero__feature">
						<p>Feature Projects</p>
						<p>${project.name}</p>
						<div class="hero__buttons">
							<a href="#" target="_blank" class="button hero__button">
								<img src="images/hero_arrowleft.svg" alt="Arrow to the left">
								Back
							</a>
							<a href="#" target="_blank" class="button hero__button">
								Next
								<img src="/images/hero_arrowright.svg" alt="Arrow to the right">
							</a>
						</div>
					</div>
				</div>
			`;
		}

		document.querySelector('.swiper').innerHTML = `
		<div class="swiper-wrapper hero__wrapper">
			${slides}
		  </div>
		  <!--  -->
		  <!-- <div class="swiper-pagination"></div> -->
		  <!-- <div class="swiper-button-prev"></div> -->
		  <!-- <div class="swiper-button-next"></div> -->
	`;

		const swiper = new Swiper('.swiper', {
			loop: true,

			slidesPerView: 1,
			watchOverflow: true,
			spaceBetween: 125,
			slidesPerGroup: 1,
			centeredSlides: true,

			effect: 'coverflow',
			coverflowEffect: {
				rotate: 0,
				slideShadows: false,
				scale: 0.8,
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
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	})
	.catch((error) => {
		document.querySelector('.swiper').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
	});