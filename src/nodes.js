const $ = (id) => document.querySelector(id);
const headerSection = $("#header");
const sliderSection = $("#slider");
const trendingPreviewSection = $("#trendingPreview");
const mejorCalificadasSection = $("#mejorCalificadas");
const categoriesPreviewSection = $("#categoriesPreview");
const headerSearchSection = $("#headerSearch");
const genericSection = $("#genericList .genericList-content");
const movieDetailSection = $("#movieDetail");
const bodySection = $("#body");
const searchBtn = $("#searchBtn");
const trendingPreviewLink = $("#trendingPreviewLink");
const headerSearcharrow = $(".header-search-arrow");

// Lists & Containers
const searchForm = document.querySelector("#searchForm");
const trendingMoviesPreviewList = document.querySelector(
	"#trendingPreview .listaPeliculas-movielist"
);
const mejorCalificadasPreviewList = document.querySelector(
	"#mejorCalificadas .listaPeliculas-movielist"
);
const categoriesPreviewList = document.querySelector(".categoriesPreview-list");
const movieDetailCategoriesList = document.querySelector(
	"#movieDetail .listaPeliculas-movielist"
);
