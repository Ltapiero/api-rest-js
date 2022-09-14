const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		"content-type": "application/json;charset=utf-8",
	},
	params: {
		api_key: APY_KEY,
		language: "es-ES"
	},
});

//Utils

const lazyLoader = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {

			console.log({entry})
			const url = entry.target.getAttribute("data-img");
			entry.target.setAttribute("src", url);
		}
	});
});

function createMovies(movies, container, lazyLoad = false) {
	container.innerHTML = "";

	const [, key] = location.hash.split("#");

	if (key == "trends") {
		genericListTitlePrincipal.innerHTML = "Trends";
	} else if (key == "toprated") {
		genericListTitlePrincipal.innerHTML = "Top Rated";
	} else {
		const [, key] = location.hash.split("=");
		genericListTitlePrincipal.innerHTML = "Search: " + key;
	}

	movies.forEach((movie) => {
		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");
		genericSection.classList.add("genericList-container");
		movieContainer.addEventListener("click", () => {
			location.hash = "#movie=" + movie.id;
			window.addEventListener(
				"DOMContentLoaded",
				movieDetailSection.classList.remove("animated"),
				false
			);
		});

		const movieImg = document.createElement("img");
		movieImg.classList.add("movie-img");
		movieImg.setAttribute("alt", movie.title);
		movieImg.setAttribute(
			lazyLoad ? "data-img" : "src",
			"https://image.tmdb.org/t/p/w300" + movie.poster_path
		);
		movieImg.addEventListener("error", () => {
			movieContainer.classList.add("errorCargaImg");
		});

		if(lazyLoad){
			lazyLoader.observe(movieImg);
		}

		movieContainer.appendChild(movieImg);
		container.appendChild(movieContainer);
	});
}

function createSeries(movies, container, lazyLoad = false) {
	container.innerHTML = "";

	const [, key] = location.hash.split("#");

	movies.forEach((movie) => {
		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");
		genericSection.classList.add("genericList-container");
		movieContainer.addEventListener("click", () => {
			location.hash = "#serie=" + movie.id;
			window.addEventListener(
				"DOMContentLoaded",
				movieDetailSection.classList.remove("animated"),
				false
			);
		});

		const movieImg = document.createElement("img");
		movieImg.classList.add("movie-img");
		movieImg.setAttribute("alt", movie.title);
		movieImg.setAttribute(
			lazyLoad ? "data-img" : "src",
			"https://image.tmdb.org/t/p/w300" + movie.poster_path
		);

		if(lazyLoad){
			lazyLoader.observe(movieImg);
		}
		movieContainer.appendChild(movieImg);
		container.appendChild(movieContainer);
	});
}

function createCategories(categories, container) {
	container.innerHTML = "";

	categories.forEach((category) => {
		const categoryContainer = document.createElement("div");
		categoryContainer.classList.add("category-container");

		const categoryTitle = document.createElement("h4");
		categoryTitle.classList.add("category-title");
		categoryTitle.setAttribute("id", category.id);
		categoryTitle.addEventListener("click", () => {
			location.hash = `#category=${category.id}-${category.name}`;
		});
		const categoryTitleText = document.createTextNode(category.name);

		categoryTitle.appendChild(categoryTitleText);
		categoryContainer.appendChild(categoryTitle);
		container.appendChild(categoryContainer);
	});
}

// Llamados API

async function getTrendingMoviesPreview() {
	const { data } = await api("trending/movie/day");
	const movies = data.results;

	createMovies(movies, trendingMoviesPreviewList, true);
}

async function getMoviesNavbar() {
	const { data } = await api("trending/movie/week");
	const movies = data.results;

	createMovies(movies, genericSection, true);
}

async function getSeriesNavbar() {
	const { data } = await api("trending/tv/day");
	const movies = data.results;

	createSeries(movies, genericSection, true);
}

async function getKidsNavbar(id, categoria, lazyLoad = false) {
	const { data } = await api("discover/movie", {
		params: {
			with_genres: id,
		},
	});
	const movies = data.results;

	genericSection.innerHTML = "";
	genericListContent.innerHTML = "";

	genericSection.classList.remove("genericList-container");

	movies.forEach((movie) => {
		const movieContainer = document.createElement("div");
		const movieImg = document.createElement("img");
		movieImg.classList.add("movie-img");
		movieImg.setAttribute("alt", movie.title);
		movieImg.setAttribute(
			lazyLoad ? "data-img" : "src",
			"https://image.tmdb.org/t/p/w300" + movie.poster_path
		);

		if(lazyLoad){
			lazyLoader.observe(movieImg);
		}
		movieContainer.addEventListener("click", () => {
			location.hash = "#movie=" + movie.id;
			window.addEventListener(
				"DOMContentLoaded",
				movieDetailSection.classList.remove("animated"),
				false
			);
		});
		movieContainer.appendChild(movieImg);
		genericListContent.append(movieContainer);
		genericSection.appendChild(genericListContent);
	});
}

async function getTopRatedMoviesPreview() {
	const { data } = await api("movie/top_rated");
	const movies = data.results;

	createMovies(movies, mejorCalificadasPreviewList, true);
}

async function getTopRated() {
	const { data } = await api("movie/top_rated");
	const movies = data.results;

	createMovies(movies, genericSection);
}

async function getCategoriesPreview() {
	const { data } = await api("genre/movie/list");
	const categories = data.genres;

	createCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id, categoria, lazyLoad = false) {
	const { data } = await api("discover/movie", {
		params: {
			with_genres: id,
		},
	});
	const movies = data.results;

	genericSection.innerHTML = "";
	genericListContent.innerHTML = "";

	const genericListTitle = document.createElement("h3");
	genericListTitle.classList.add("genericList-title");
	genericListTitle.innerHTML = categoria;

	genericSection.appendChild(genericListTitle);
	genericSection.classList.remove("genericList-container");

	movies.forEach((movie) => {
		const movieContainer = document.createElement("div");

		const movieImg = document.createElement("img");
		movieImg.classList.add("movie-img");
		movieImg.setAttribute("alt", movie.title);

		movieImg.setAttribute(
			lazyLoad ? "data-img" : "src",
			"https://image.tmdb.org/t/p/w300" + movie.poster_path
		);
		

		if(lazyLoad){
			lazyLoader.observe(movieImg);
		}
		
		movieContainer.appendChild(movieImg);
		genericListContent.append(movieContainer);
		genericSection.appendChild(genericListContent);
	});
}

async function getMoviesBySearch(query) {

	const { data } = await api("search/movie", {
		params: {
			query,
		},
	});

	console.log(data.results)

	const movies = data.results;
	createMovies(movies, genericSection);
	headerSearchInput.value = "";

}

async function getTrendingMovies() {
	const { data } = await api("trending/movie/day");
	const movies = data.results;

	createMovies(movies, genericSection);
}

async function getMovieById(id) {
	const { data: movie } = await api("movie/" + id);

	console.log(movie);

	var movieUrl = "";

	if (window.innerWidth >= 651) {
		movieUrl = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
		headerSection.classList.remove("inactive");
	} else {
		movieUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
		headerSection.classList.add("inactive");
	}

	movieDetailPrincipal.style.background = `url(${movieUrl})`;
	movieDetailPrincipal.style.backgroundRepeat = "no-repeat";
	movieDetailPrincipal.style.backgroundSize = "cover";
	movieDetailPrincipal.style.backgroundPosition = "top center";

	movieDetailTitle.textContent = movie.title;
	movieDetailScore.textContent = "IMDb | " + movie.vote_average.toFixed(1);
	movieDetailTagline.textContent = movie.tagline;
	console.log(movieDetailTagline);
	movieDetailDescription.textContent = movie.overview;

	createCategories(movie.genres, movieDetailCategoriesList);

	getRelatedMoviesId(id);
}

async function getSerieById(id) {
	const { data: movie } = await api("tv/" + id);

	
	var movieUrl = "";

	if (window.innerWidth >= 651) {
		movieUrl = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
		headerSection.classList.remove("inactive");
	} else {
		movieUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
		headerSection.classList.add("inactive");
	}
	console.log(movie);
	movieDetailPrincipal.style.background = `url(${movieUrl})`;
	movieDetailPrincipal.style.backgroundRepeat = "no-repeat";
	movieDetailPrincipal.style.backgroundSize = "cover";
	movieDetailPrincipal.style.backgroundPosition = "top center";

	movieDetailTitle.textContent = movie.name;
	movieDetailTagline.textContent = movie.tagline;
	movieDetailScore.textContent = "IMDb | " + movie.vote_average.toFixed(1);
	movieDetailDescription.textContent = movie.overview;

	createCategories(movie.genres, movieDetailCategoriesList);

	getRelatedMoviesId(id);
}

async function getRelatedMoviesId(id) {
	const { data } = await api(`movie/${id}/similar`);
	const relatedMovies = data.results;

	createMovies(relatedMovies, relatedMoviesContainer);
	relatedMoviesContainer.scrollTo(0, 0);
}

async function getMovieVideo(id) {
	const { data } = await api(`movie/${id}/videos`);
	console.log("hola")
	console.log(data);
	const movieVideo = data.results;

	movieDetailVideo.setAttribute(
		"src",
		"https://www.youtube.com/embed/" + movieVideo[0].key
	);
	console.log(data.results);
}

async function getSerieVideo(id) {
	const { data } = await api(`tv/${id}/videos`);
	console.log("hola3214");
	console.log(data);
	const movieVideo = data.results;

	movieDetailVideo.setAttribute(
		"src",
		"https://www.youtube.com/embed/" + movieVideo[0].key
	);

}
