const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		"content-type": "application/json;charset=utf-8",
	},
	params: {
		api_key: APY_KEY,
	},
});

async function getTrendingMoviesPreview() {
	const { data } = await api("trending/movie/day");
	const movies = data.results;

	movies.forEach((movie) => {
		const trendingPreview = document.querySelector(
			"#trendingPreview .listaPeliculas-movielist"
		);
		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");

		const movieImg = document.createElement("img");
		movieImg.classList.add("movie-img");
		movieImg.setAttribute("alt", movie.title);
		movieImg.setAttribute(
			"src",
			"https://image.tmdb.org/t/p/w500" + movie.poster_path
		);
		movieContainer.appendChild(movieImg);
		trendingPreview.appendChild(movieContainer);
	});
}

async function getMejorCalificadas() {
	const { data } = await api("movie/top_rated");
	const movies = data.results;

	movies.forEach((movie) => {
		const mejorCalificadas = document.querySelector(
			"#mejorCalificadas .listaPeliculas-movielist"
		);
		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");

		const movieImg = document.createElement("img");
		movieImg.classList.add("movie-img");
		movieImg.setAttribute("alt", movie.title);
		movieImg.setAttribute(
			"src",
			"https://image.tmdb.org/t/p/w500" + movie.poster_path
		);
		movieContainer.appendChild(movieImg);
		mejorCalificadas.appendChild(movieContainer);
	});
}

async function getCategoriesPreview() {
	const { data } = await api("genre/movie/list");
	const categories = data.genres;

	categories.forEach((category) => {
		const previewCategoriesContainer = document.querySelector(
			"#categoriesPreview .categoriesPreview-list"
		);
		const categoryContainer = document.createElement("div");
		categoryContainer.classList.add("category-container");

		const categoryTitle = document.createElement("h4");
		categoryTitle.classList.add("category-title");
		categoryTitle.setAttribute("id", category.id);
		const categoryTitleText = document.createTextNode(category.name);

		categoryTitle.appendChild(categoryTitleText);
		categoryContainer.appendChild(categoryTitle);
		previewCategoriesContainer.appendChild(categoryContainer);
	});
}

getTrendingMoviesPreview();
getMejorCalificadas();
getCategoriesPreview();
