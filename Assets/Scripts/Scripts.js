/* =--------------------------------------= Load Document =------------------= */
window.addEventListener("load", () => {


	/* =--------------------------------------= Toggle Mobile Menu =------------------= */
	const mobileNavBar = document.querySelector("#navbar");
	const menuClose = document.querySelector("#close");
	const menuOpen = document.querySelector("#menu-btn");
	menuOpen.addEventListener("click", () => {
		mobileNavBar.classList.add("navbar__opened");
	});
	menuClose.addEventListener("click", () => {
		mobileNavBar.classList.remove("navbar__opened");
	});


	/* =--------------------------------------= Toggle Search Form =------------------= */
	const searchForm = document.querySelector("#search-form");
	const searchOpen = document.querySelector("#search-btn");
	searchOpen.addEventListener("click", () => {
		searchForm.classList.toggle("search__form__opened");
	});


	/* =--------------------------------------= Home Partition Image Slider =------------------= */

	const sliderContainer = document.querySelector(".home");
	let slides = document.querySelectorAll(".home .slide");
	let index = 0;
	sliderContainer.addEventListener("click", (event) => {
		if (event.target.classList.contains("next__btn")) {
			slides[index].classList.remove("slide__active");
			index = (index + 1) % slides.length;
			slides[index].classList.add("slide__active");
		} else if (event.target.classList.contains("prev__btn")) {
			slides[index].classList.remove("slide__active");
			index = (index - 1 + slides.length) % slides.length;
			slides[index].classList.add("slide__active");
		}
	});


	/* =--------------------------------------= Products Partition Swiper JS =------------------= */
	var swiper = new Swiper(".products__slider", {
		loop: true,
		grabCursor: true,
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});


	/* =--------------------------------------= Light Gallery JS =------------------= */	
	lightGallery(document.querySelector(".gallery .lightbox"));

});
