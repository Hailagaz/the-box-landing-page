
let valueDisplays=document.querySelectorAll(".stats__num"),interval=5e3;valueDisplays.forEach(t=>{let e=0,a=parseInt(t.getAttribute("data-val"));var l=Math.floor(interval/a);let r=setInterval(function(){e+=1,(t.textContent=e)==a&&clearInterval(r)},l)});
document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&document.querySelector(window.location.hash).scrollIntoView();const o=document.querySelector(".header__icon"),c=document.querySelector(".header__nav");o&&o.addEventListener("click",function(e){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),c.classList.toggle("_active")});var e=document.querySelectorAll(".header__link[data-goto]");function t(e){var t=e.target;t.dataset.goto&&document.querySelector(t.dataset.goto)&&(t=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight,o.classList.contains("_active")&&(document.body.classList.remove("_lock"),o.classList.remove("_active"),c.classList.remove("_active")),window.scrollTo({top:t,behavior:"smooth"}),e.preventDefault())}0<e.length&&e.forEach(e=>{e.addEventListener("click",t)})});
const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding");let unlock=!0;const timeout=800;if(0<popupLinks.length)for(let o=0;o<popupLinks.length;o++){const b=popupLinks[o];b.addEventListener("click",function(o){var e=b.getAttribute("href").replace("#","");popupOpen(document.getElementById(e)),o.preventDefault()})}const popupCloseIcon=document.querySelectorAll(".close-popup");if(0<popupCloseIcon.length)for(let o=0;o<popupCloseIcon.length;o++){const g=popupCloseIcon[o];g.addEventListener("click",function(o){popupClose(g.closest(".popup")),o.preventDefault()})}function popupOpen(o){var e;o&&unlock&&((e=document.querySelector(".popup.open"))?popupClose(e,!1):bodyLock(),o.classList.add("open"),o.addEventListener("click",function(o){o.target.closest(".popup__content")||popupClose(o.target.closest(".popup"))}))}function popupClose(o,e=!0){unlock&&(o.classList.remove("open"),e&&bodyUnLock())}function bodyLock(){var e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(0<lockPadding.length)for(let o=0;o<lockPadding.length;o++)lockPadding[o].style.paddingRight=e;body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout(function(){unlock=!0},timeout)}function bodyUnLock(){setTimeout(function(){for(let o=0;o<lockPadding.length;o++)lockPadding[o].style.paddingRight="0px";body.style.paddingRight="0px",body.classList.remove("lock")},timeout),unlock=!1,setTimeout(function(){unlock=!0},timeout)}
const scrollBtn=document.querySelector(".showbutton");window.addEventListener("scroll",function(o){700<window.scrollY?scrollBtn.classList.remove("showbutton__hidden"):window.scrollY<700&&scrollBtn.classList.add("showbutton__hidden")}),scrollBtn.addEventListener("click",function(o){window.scrollTo(0,0)});
fetch("js/featureProjects.json").then(e=>e.json()).then(e=>{let r="";for(var o of e)r+=`
				<div class="swiper-slide hero__slide">
					<div class="hero__photo">
						<img src="${o.photo}" alt="Photo of build project">
					</div>
					<div class="hero__header">
						<h1>Building things is our mission.</h1>
					</div>
					<div class="hero__feature">
						<p>Feature Projects</p>
						<p>${o.name}</p>
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
			`;document.querySelector(".swiper").innerHTML=`
		<div class="swiper-wrapper hero__wrapper">
			${r}
		  </div>
		  <!--  -->
		  <!-- <div class="swiper-pagination"></div> -->
		  <!-- <div class="swiper-button-prev"></div> -->
		  <!-- <div class="swiper-button-next"></div> -->
	`;new Swiper(".swiper",{loop:!0,slidesPerView:1,watchOverflow:!0,spaceBetween:125,slidesPerGroup:1,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,scale:1},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".hero__button-next",prevEl:".hero__button-prev"}})}).catch(e=>{document.querySelector(".swiper").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"});
const projectsBtns=document.querySelectorAll(".projects__btn");for(const a of projectsBtns)a.addEventListener("click",e=>{var t,s=e.target.dataset.index,o=document.querySelector(".projects__block.active");o.dataset.index!==s&&(t=document.querySelector(".projects__btn.active"),e.target.classList.add("active"),t.classList.remove("active"),e=document.querySelector(`.projects__block[data-index="${s}"]`),o.classList.remove("active"),e.classList.add("active"))});fetch("js/projectsCommercial.json").then(e=>e.json()).then(e=>{let t="";for(var s of e)t+=`
				<div class="swiper-slide projects__slide projects__block" data-index="1">
					<div class="projects__card">
						<img class="projects__image" src="${s.photo}"
							alt="Example of constructed building">
						<div class="projects__info">
							<p>${s.name}</p>
							<p>${s.location}</p>
						</div>
					</div>
				</div>
			`;document.querySelector(".projects__slider1").innerHTML=`
			<div class="swiper-wrapper projects__wrapper">
				${t}
		  	</div>
		  	<!--  -->
		  	<div class="swiper-pagination"></div>
		  	<!-- <div class="swiper-button-prev"></div> -->
		  	<!-- <div class="swiper-button-next"></div> -->
		`;new Swiper(".projects__slider1",{loop:!0,slidesPerView:2,watchOverflow:!0,spaceBetween:125,slidesPerGroup:1,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,scale:1},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".projects__button-next",prevEl:".projects__button-prev"}})}).catch(e=>{document.querySelector(".projects__slider1").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"});