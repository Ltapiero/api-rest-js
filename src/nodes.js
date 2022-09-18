const $ = (id) => document.querySelector(id);
const headerSection = $("#header");
const sliderSection = $("#slider");
const trendingPreviewSection = $("#trendingPreview");
const mejorCalificadasSection = $("#mejorCalificadas");
const categoriesPreviewSection = $("#categoriesPreview");
const headerSearchSection = $("#headerSearch");
const genericSection = $("#genericList");
const genericSectionTitle = $("#genericListTitle");
const genericListContent = $(".genericList-content");
const movieDetailSection = $("#movieDetail");
const bodySection = $("#body");
const trendingPreviewLink = $("#trendingPreviewLink");
const topRatedSection = $("#topRated");
const headerSearcharrow = $(".header-search-arrow");
const searchForm = $("#searchForm");
const likedMoviesSection = $("#liked");

// Input - Btn
const headerSearchInput = $(".header-search-input");
const headerSearchInputPrincipal = $(".navbar-search-input-principal");
const searchBtn = $("#searchBtn");
const searchBtnPrincipal = $("#searchBtnPrincipal");
const genericListTitlePrincipal = $("#genericListTitlePrincipal");
const language = $("#language");

// Lists & Containers

const trendingMoviesPreviewList = document.querySelector(
	"#trendingPreview .listaPeliculas-movielist"
);

const relatedMoviesContainer = $("#relatedMovies .listaPeliculas-movielist");

const mejorCalificadasPreviewList = document.querySelector(
	"#mejorCalificadas .listaPeliculas-movielist"
);
const categoriesPreviewList = document.querySelector(".categoriesPreview-list");
const movieDetailCategoriesList = document.querySelector(
	"#movieDetail .movieDetail-container--info .movieDetail-categories-list"
);
const likedMoviesListArticle = document.querySelector(".liked-movielist");

// movieDetail
const movieDetailArrow = $(".movieDetail-arrow");
const movieDetailPrincipal = $(".movieDetail-principal");
const movieDetailTitle = $(".movieDetail-title");
const movieDetailDescription = $("#movieDetail-description");
const movieDetailScore = $(".movieDetail-score");
const movieDetailVideo = $("#movieDetailVideo");
const movieDetailTagline = $("#movieDetailTagline");

//language
const navbarNavegator = $("#navbarNavegator");
const navbarNavegatorLinks = document.querySelectorAll("#navbarNavegator a");
const linkSeeMore = $(".listaPeliculas-header a");
const sectionTrendsTitle = $("#trendingPreview .listaPeliculas-header h3");
const sectionTopRatedTitle = $("#mejorCalificadas .listaPeliculas-header h3");
const sectionRelatedMovieTitle = $("#relatedMovies .listaPeliculas-header h3");
const sectionCategoriesTitle = $("#categoriesPreview h3");
const sectionlikedTitle = $("#liked .liked-header h3");
const sectionSliderBtn = $(".slider-content .btn");

