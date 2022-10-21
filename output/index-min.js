fetch("js/addHtml.json").then(e=>e.json()).then(e=>{let o="";for(var t of e)o+=`
				<div class="projects__card active" data-index="0">
					<img class="projects__image" src="${t.photo}"
						alt="Example of constructed building">
					<div class="projects__info">
						<p>${t.name}</p>
						<p>${t.location}</p>
					</div>
				</div>
			`}).catch(e=>{document.querySelector(".projects__constructed").innerHTML="<p>Sorry, we have some problems. We will fix them soon.</p>"});
let valueDisplays=document.querySelectorAll(".stats__num"),interval=5e3;valueDisplays.forEach(t=>{let e=0,a=parseInt(t.getAttribute("data-val"));var l=Math.floor(interval/a);let r=setInterval(function(){e+=1,(t.textContent=e)==a&&clearInterval(r)},l)});
document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&document.querySelector(window.location.hash).scrollIntoView();const o=document.querySelector(".header__icon"),c=document.querySelector(".header__nav");o&&o.addEventListener("click",function(e){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),c.classList.toggle("_active")});var e=document.querySelectorAll(".header__link[data-goto]");function t(e){var t=e.target;t.dataset.goto&&document.querySelector(t.dataset.goto)&&(t=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight,o.classList.contains("_active")&&(document.body.classList.remove("_lock"),o.classList.remove("_active"),c.classList.remove("_active")),window.scrollTo({top:t,behavior:"smooth"}),e.preventDefault())}0<e.length&&e.forEach(e=>{e.addEventListener("click",t)});const n=document.querySelector(".showbutton");window.addEventListener("scroll",function(e){700<window.scrollY?n.classList.remove("showbutton__hidden"):window.scrollY<700&&n.classList.add("showbutton__hidden")}),n.addEventListener("click",function(e){window.scrollTo(0,0)})});
const projectsBtns=document.querySelectorAll(".projects__btn");for(const a of projectsBtns)a.addEventListener("click",e=>{var t,c=e.target.dataset.index,s=document.querySelector(".jobs__block.active");s.dataset.index!==c&&(t=document.querySelector(".projects__btn.active"),e.target.classList.add("active"),t.classList.remove("active"),e=document.querySelector(`.jobs__block[data-index="${c}"]`),s.classList.remove("active"),e.classList.add("active"))});