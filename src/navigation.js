/* searchBtn.addEventListener("click", () => {
	location.hash = "#search=" + headerSearchInput.value;
	console.log(location.hash);
}); */
searchBtn.addEventListener("click", (e) =>
	headerSearchInput.value !== ""
		? (location.hash = "search=" + headerSearchInput.value)
		: e.preventDefault()
);

searchBtnPrincipal.addEventListener("click", (e) =>
	headerSearchInputPrincipal.value !== ""
		? (location.hash = "search=" + headerSearchInputPrincipal.value)
		: e.preventDefault()
);

trendingPreviewLink.addEventListener("click", () => {
	location.hash = "#trends";
});

topRatedSection.addEventListener("click", () => {
	location.hash = "#toprated";
});

headerSearcharrow.addEventListener("click", () => {
	location.hash = window.history.back();
});

movieDetailArrow.addEventListener("click", () => {
	location.hash = window.history.back();
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
	location.hash.startsWith("#trends")
		? trendsPage()
		: location.hash.startsWith("#movie=")
		? movieDetailsPage()
		: location.hash.startsWith("#category=")
		? categoriesPage()
		: location.hash.startsWith("#search=")
		? searchPage()
		: location.hash.startsWith("#toprated")
		? topRated()
		: homePage();

	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}

function homePage() {
	console.log("Home");

	sliderSection.classList.remove("inactive");
	headerSection.classList.remove("inactive");
	trendingPreviewSection.classList.remove("inactive");
	mejorCalificadasSection.classList.remove("inactive");
	categoriesPreviewSection.classList.remove("inactive");
	movieDetailSection.classList.add("inactive");
	headerSearchSection.classList.add("inactive");
	genericSection.classList.add("inactive");
	genericSection.classList.remove("animated");
	genericSectionTitle.classList.add("inactive");
	genericSectionTitle.classList.remove("animated");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.add("animated");

	getTrendingMoviesPreview();
	getTopRatedMoviesPreview();
	getCategoriesPreview();
}

function searchPage() {
	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");
	movieDetailSection.classList.add("animated");
	headerSearchSection.classList.remove("inactive");
	genericSection.classList.remove("inactive");
	genericSection.classList.add("animated");
	genericListTitle.classList.remove("inactive");
	genericListTitle.classList.add("animated");
	genericSectionTitle.classList.add("animated");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.remove("animated");

	//["#search", "buscador"]
	const [, query] = location.hash.split("=");
	getMoviesBySearch(query);
}

function categoriesPage() {
	console.log("categories");

	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");
	movieDetailSection.classList.remove("animated");
	headerSearchSection.classList.remove("inactive");
	genericSection.classList.remove("inactive");
	genericSection.classList.add("animated");
	genericListTitle.classList.add("inactive");
	genericSectionTitle.classList.remove("animated");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.remove("animated");

	const [, categoryData] = location.hash.split("=");
	const [categoryId, categoryName] = categoryData.split("-");
	const newName2 = decodeURI(categoryName);

	getMoviesByCategory(categoryId, newName2);
}

function movieDetailsPage() {
	console.log("Movie");

	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.remove("inactive");
	movieDetailSection.classList.add("animated");
	headerSearchSection.classList.add("inactive");
	genericSection.classList.remove("animated");
	genericSection.classList.add("inactive");
	genericSectionTitle.classList.remove("animated");
	genericSectionTitle.classList.add("inactive");
	bodySection.classList.add("bodySectionMovie");
	bodySection.classList.remove("animated");

	//["#movie", "123124"]
	const [, movieId] = location.hash.split("=");
	getMovieById(movieId);
}

function trendsPage() {
	console.log("trends");

	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");
	movieDetailSection.classList.remove("animated");
	headerSearchSection.classList.remove("inactive");
	genericSection.classList.remove("inactive");
	genericSection.classList.add("animated");
	genericSectionTitle.classList.add("animated");
	genericListTitle.classList.remove("inactive");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.remove("animated");

	getTrendingMovies();
}

function topRated() {
	console.log("toprated");

	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");
	movieDetailSection.classList.remove("animated");
	headerSearchSection.classList.remove("inactive");
	genericSection.classList.remove("inactive");
	genericSection.classList.add("animated");
	genericSectionTitle.classList.add("animated");
	genericListTitle.classList.remove("inactive");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.remove("animated");

	getTopRated();
}
