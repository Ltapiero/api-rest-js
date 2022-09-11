const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		"content-type": "application/json;charset=utf-8",
	},
	params: {
		api_key: APY_KEY,
	},
});

//Utils

function createMovies(movies, container) {
	container.innerHTML = "";

	const [, key] = location.hash.split("#");
	console.log(key);

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
		});

		const movieImg = document.createElement("img");
		movieImg.classList.add("movie-img");
		movieImg.setAttribute("alt", movie.title);
		movieImg.setAttribute(
			"src",
			"https://image.tmdb.org/t/p/w500" + movie.poster_path
		);
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

	createMovies(movies, trendingMoviesPreviewList);
}

async function getTopRatedMoviesPreview() {
	const { data } = await api("movie/top_rated");
	const movies = data.results;

	createMovies(movies, mejorCalificadasPreviewList);
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

async function getMoviesByCategory(id, categoria) {
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
			"src",
			"https://image.tmdb.org/t/p/w500" + movie.poster_path
		);
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

	const movies = data.results;
	console.log(movies);
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

	const movieUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
	movieDetailPrincipal.style.background = `url(${movieUrl})`;
	movieDetailPrincipal.style.backgroundRepeat = "no-repeat";
	movieDetailPrincipal.style.backgroundSize = "cover";
	movieDetailPrincipal.style.backgroundPosition = "top center";

	movieDetailTitle.textContent = movie.title;
	movieDetailScore.textContent = "IMDb | " + movie.vote_average.toFixed(1);
	movieDetailDescription.textContent = movie.overview;

	createCategories(movie.genres, movieDetailCategoriesList);

	console.log(movie);
}
