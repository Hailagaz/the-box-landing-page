//Get data and build structure

// In order to fix!!!

// fetch("js/addHtml.json")
// 	.then((response) => response.json())
// 	.then((data) => {
// 		let cards = '';

// 		for (let card of data) {
// 			cards += `
// 				<div class="projects__card active" data-index="0">
// 					<img class="projects__image" src="${card.photo}"
// 						alt="Example of constructed building">
// 					<div class="projects__info">
// 						<p>${card.name}</p>
// 						<p>${card.location}</p>
// 					</div>
// 				</div>
// 			`;
// 		}
// 	})
// 	.catch((error) => {
// 		document.querySelector('.projects__constructed').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
// 	});
let valueDisplays = document.querySelectorAll(".stats__num");
let interval = 5000;
valueDisplays.forEach(valueDisplay => {
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
});
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 800;
if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const elem = popupCloseIcon[i];
    elem.addEventListener("click", function (e) {
      popupClose(elem.closest('.popup'));
      e.preventDefault();
    });
  }
}
function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}
function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const elem = lockPadding[i];
      elem.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const elem = lockPadding[i];
        elem.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

// Polyfills
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.nsMatchesSelector;
  }
})();
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
//Get data and build sliders structure
fetch("js/featureProjects.json").then(response => response.json()).then(data => {
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
							<a href="#" target="_blank" class="button hero__button hero__button-prev">
								<img src="images/hero_arrowleft.svg" alt="Arrow to the left">
								Back
							</a>
							<a href="#" target="_blank" class="button hero__button hero__button-next">
								Next
								<img src="images/hero_arrowright.svg" alt="Arrow to the right">
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
      scale: 1.0
    },
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
      //eventTarget: ".testimonials__slider",
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev'
    }
  });
}).catch(error => {
  document.querySelector('.swiper').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
});
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

fetch("js/projectsCommercial.json").then(response => response.json()).then(data => {
  let slides = '';
  for (let project of data) {
    slides += `
				<div class="swiper-slide projects__slide projects__block" data-index="1">
					<div class="projects__card">
						<img class="projects__image" src="${project.photo}"
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
      scale: 1.0
    },
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
      //eventTarget: ".testimonials__slider",
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev'
    }
  });
}).catch(error => {
  document.querySelector('.projects__slider1').innerHTML = '<p>Sorry, we have some problems. We will fix them soon.</p>';
});