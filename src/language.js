let dataLanguage = {
    es:{
        nav1: "Inicio",
        nav2: "Películas",
        nav3: "Series",
        nav4: "Niños",
        Input: "Español",
        link: "Ver más",
        title1: "Tendencias",
        title2: "Mejor calificadas",
        title3: "Categorias",
        title4: "Películas favoritas"
    },
    en:{
        nav1: "Home",
        nav2: "Movies",
        nav3: "Series",
        nav4: "Kids",
        Input: "English",
        link: "See more",
        title1: "Trends",
        title2: "Top rated",
        title3: "Categories",
        title4: "Favorite movies"
    },
    fr:{
        nav1 : "Accueil",
        nav2 : "Films",
        nav3 : "Série",
        nav4 : "Enfants",
        Input : "Anglais",
        link : "Voir plus",
        title1 : "Tendances",
        title2 : "Les mieux notés",
        title3 : "Catégories",
        title4 : "Films préférés"
    },

}


function lenguagePage(){

    
    if(localStorage.getItem("language")){
        document.ready = document.getElementById("language").value = localStorage.getItem("language");
    }else{
        document.ready = document.getElementById("language").value = "en";
    }

    console.log(dataLanguage[localStorage.getItem("language")].nav1)
	navbarNavegatorLinks[0].textContent = dataLanguage[localStorage.getItem("language")].nav1
	navbarNavegatorLinks[1].textContent = dataLanguage[localStorage.getItem("language")].nav2
	navbarNavegatorLinks[2].textContent = dataLanguage[localStorage.getItem("language")].nav3
	navbarNavegatorLinks[3].textContent = dataLanguage[localStorage.getItem("language")].nav4
	
	linkSeeMore.textContent = dataLanguage[localStorage.getItem("language")].link
	sectionSliderBtn.textContent = dataLanguage[localStorage.getItem("language")].link
	
	sectionTrendsTitle.textContent = dataLanguage[localStorage.getItem("language")].title1
	sectionTopRatedTitle.textContent = dataLanguage[localStorage.getItem("language")].title2
	sectionCategoriesTitle.textContent = dataLanguage[localStorage.getItem("language")].title3
	sectionlikedTitle.textContent = dataLanguage[localStorage.getItem("language")].title4	
	sectionRelatedMovieTitle.textContent = dataLanguage[localStorage.getItem("language")].title4	
    
}
