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

	
});
