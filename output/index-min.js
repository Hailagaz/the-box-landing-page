
"use strict";document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("load",function(){function n(e){e=e||document.querySelectorAll("[data-digits-counter]");e&&e.forEach(e=>{{var n=e;let t=null;const r=parseInt(n.dataset.digitsCounter)?parseInt(n.dataset.digitsCounte):1e3,o=parseInt(n.innerHTML),i=e=>{t=t||e;e=Math.min((e-t)/r,1);n.innerHTML=Math.floor(e*(0+o)),e<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}})}let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e=e.target.querySelectorAll("[data-digits-counter]")).length&&n(e)})},{threshold:.1}),e=document.querySelectorAll(".observing");e.length&&e.forEach(e=>{t.observe(e)})})});
document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&document.querySelector(window.location.hash).scrollIntoView();const o=document.querySelector(".header__icon"),c=document.querySelector(".header__nav");o&&o.addEventListener("click",function(e){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),c.classList.toggle("_active")});var e=document.querySelectorAll(".header__link[data-goto]");function t(e){var t=e.target;t.dataset.goto&&document.querySelector(t.dataset.goto)&&(t=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight,o.classList.contains("_active")&&(document.body.classList.remove("_lock"),o.classList.remove("_active"),c.classList.remove("_active")),window.scrollTo({top:t,behavior:"smooth"}),e.preventDefault())}0<e.length&&e.forEach(e=>{e.addEventListener("click",t)})});
document.addEventListener("DOMContentLoaded",()=>{var t=document.querySelectorAll(".popup-link");const l=document.querySelector("body"),c=document.querySelectorAll(".lock-padding");let r=!0;const p=800;if(0<t.length)for(let e=0;e<t.length;e++){const i=t[e];i.addEventListener("click",function(e){var t,o=i.getAttribute("href").replace("#",""),o=document.getElementById(o);if(o&&r){if(t=document.querySelector(".popup.open"))s(t,!1);else{var n=window.innerWidth-document.querySelector(".footer__container").offsetWidth+"px";if(0<c.length)for(let e=0;e<c.length;e++)c[e].style.paddingRight=n;l.classList.add("lock"),r=!1,setTimeout(function(){r=!0},p)}o.classList.add("open"),o.addEventListener("click",function(e){e.target.closest(".popup__content")||s(e.target.closest(".popup"))})}e.preventDefault()})}var o=document.querySelectorAll(".close-popup");if(0<o.length)for(let e=0;e<o.length;e++){const n=o[e];n.addEventListener("click",function(e){s(n.closest(".popup")),e.preventDefault()})}function s(e,t=!0){r&&(e.classList.remove("open"),t&&(setTimeout(function(){if(0<c.length)for(let e=0;e<c.length;e++)c[e].style.paddingRight="0px";l.style.paddingRight="0px",l.classList.remove("lock")},p),r=!1,setTimeout(function(){r=!0},p)))}document.addEventListener("keydown",function(e){27===e.which&&s(document.querySelector(".popup.open"))}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.nsMatchesSelector)});
document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".showbutton");window.addEventListener("scroll",function(n){700<window.scrollY?o.classList.remove("showbutton__hidden"):window.scrollY<700&&o.classList.add("showbutton__hidden")}),o.addEventListener("click",function(n){window.scrollTo(0,0)})});
document.addEventListener("DOMContentLoaded",()=>{fetch("js/featureProjects.json").then(e=>e.json()).then(e=>{let t="";for(var o of e)t+=`
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
			${t}
		  </div>
		  <!--  -->
		  <!-- <div class="swiper-pagination"></div> -->
		  <!-- <div class="swiper-button-prev"></div> -->
		  <!-- <div class="swiper-button-next"></div> -->
	`;new Swiper(".swiper",{loop:!0,slidesPerView:1,watchOverflow:!0,spaceBetween:125,slidesPerGroup:1,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,scale:1},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".hero__button-next",prevEl:".hero__button-prev"}})}).catch(e=>{document.querySelector(".swiper").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"})});
document.addEventListener("DOMContentLoaded",()=>{for(const e of document.querySelectorAll(".projects__btn"))e.addEventListener("click",e=>{var t,s=e.target.dataset.index,o=document.querySelector(".projects__block.active");o.dataset.index!==s&&(t=document.querySelector(".projects__btn.active"),e.target.classList.add("active"),t.classList.remove("active"),e=document.querySelector(`.projects__block[data-index="${s}"]`),o.classList.remove("active"),e.classList.add("active"))});fetch("js/projectsCommercial.json").then(e=>e.json()).then(e=>{let t="";for(var s of e)t+=`
					<!--<div class="swiper-slide projects__slide projects__block" data-index="1">-->
						<div class="projects__card">
							<img class="projects__image" src="${s.photo}"
								alt="Example of constructed building">
							<div class="projects__info">
								<p>${s.name}</p>
								<p>${s.location}</p>
							</div>
						</div>
					<!--</div>-->
				`;document.querySelector(".projects__slider1").innerHTML=`
				<div class="swiper-wrapper projects__wrapper">
					<div class="swiper-slide projects__slide projects__block" data-index="1">
						${t}
					</div>
				  </div>
				  <!--  -->
				  <div class="swiper-pagination"></div>
				  <!-- <div class="swiper-button-prev"></div> -->
				  <!-- <div class="swiper-button-next"></div> -->
			`;new Swiper(".projects__slider1",{loop:!0,slidesPerView:2,watchOverflow:!0,spaceBetween:100,slidesPerGroup:1,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,scale:1},slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".projects__button-next",prevEl:".projects__button-prev"}})}).catch(e=>{document.querySelector(".projects__slider1").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"})});