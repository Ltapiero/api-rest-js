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


window.addEventListener("DOMContentLoaded", navegador, false);
window.addEventListener("hashchange", navegador, false);
language.addEventListener("change", () => {
    localStorage.setItem("language", language.value);
	lenguagePage();
	navegador();
	location.reload();
});


function navActive() {
	const activepage = window.location.hash;
	const navLinks = document.querySelectorAll("nav a").forEach((link) => {
		if (!activepage.includes("#")) {
		} else if (link.href.includes(`${activepage}`)) {
			link.classList.add("navbar--active");
		} else {
			link.classList.remove("navbar--active");
		}
	});
}

function navegador() {
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
		: location.hash.startsWith("#movies")
		? homeMovies()
		: location.hash.startsWith("#series")
		? homeSeries()
		: location.hash.startsWith("#serie=")
		? serieDetailsPage()
		: location.hash.startsWith("#kids")
		? homeKids()
		: homePage();

	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
	lenguagePage();
}


function homePage(){
	sliderSection.classList.remove("inactive");
	headerSection.classList.remove("inactive");
	trendingPreviewSection.classList.remove("inactive");
	likedMoviesSection.classList.remove("inactive");
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

	navActive();
	getTrendingMoviesPreview();
	getTopRatedMoviesPreview();
	getCategoriesPreview();
	getLikedMovies();
	
}

function homeMovies() {
	sliderSection.classList.add("inactive");
	headerSection.classList.remove("inactive");
	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");
	headerSearchSection.classList.add("inactive");
	genericSection.classList.remove("inactive");
	genericSection.classList.add("animated");
	genericSectionTitle.classList.add("inactive");
	genericSectionTitle.classList.remove("animated");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.add("animated");

	navActive();
	getMoviesNavbar();
	
}

function homeSeries() {
	sliderSection.classList.add("inactive");
	headerSection.classList.remove("inactive");
	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");
	headerSearchSection.classList.add("inactive");
	genericSection.classList.remove("inactive");
	genericSection.classList.add("animated");
	genericSectionTitle.classList.add("inactive");
	genericSectionTitle.classList.remove("animated");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.add("animated");

	navActive();
	getSeriesNavbar();
	
}

function homeKids() {
	sliderSection.classList.add("inactive");
	headerSection.classList.remove("inactive");
	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
	mejorCalificadasSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");
	headerSearchSection.classList.add("inactive");
	genericSection.classList.remove("inactive");
	genericSection.classList.add("animated");
	genericSectionTitle.classList.add("inactive");
	genericSectionTitle.classList.remove("animated");
	bodySection.classList.remove("bodySectionMovie");
	bodySection.classList.add("animated");

	navActive();
	getKidsNavbar(16, true,{
        lazyLoad: true,
        clean: page == 1
    });
	
}

function searchPage() {
	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
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
	console.log(query);
	getMoviesBySearch(query);
	getSeriesBySearch(query);
	

	/* 	const [, query] = decodeURI(location.hash.split("=")[1]);
	console.log(query);

	getMoviesBySearch(query); */
}

function categoriesPage() {
	console.log("categories");

	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
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

	getMoviesByCategory(categoryId, newName2, true);
	
}

function movieDetailsPage() {
	console.log("Movie");

	sliderSection.classList.add("inactive");

	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
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
	getMovieVideo(movieId);
	
}

function serieDetailsPage() {
	console.log("Serie");

	sliderSection.classList.add("inactive");

	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
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
	getSerieById(movieId);
	getSerieVideo(movieId);
	
}

function trendsPage() {
	sliderSection.classList.add("inactive");
	headerSection.classList.add("inactive");
	trendingPreviewSection.classList.add("inactive");
	likedMoviesSection.classList.add("inactive");
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
	likedMoviesSection.classList.add("inactive");
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
