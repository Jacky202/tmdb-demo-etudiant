document.addEventListener("DOMContentLoaded", function (){

    let connexion = new MovieDB();

    connexion.requeteDernierFilm();

})


class MovieDB{

    constructor() {
        this.APIkey = "a86b322f8872d158a5d995063c57a163";

        this.lang = "fr-CA";

        this.baseURL = "https://api.themoviedb.org/3";

        this.imgPath = "https://imaage.tmdb.org/t/p/";

        this.totalFilm = 8;
    }

    requeteDernierFilm(){

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this) );

        //requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=a86b322f8872d158a5d995063c57a163&language=fr-CA&page=1");
        requete.open("GET", this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1");

        requete.send();

    }

    retourRequeteDernierFilm(e){
        console.log("dernier film");

        let target = e.currentTarget;
        console.log(target.responseText);

        data = JSON.parse(target.responseText).results;

        console.log(data);

        this.afficheDernierFilm(data);
    }

    afficheDernierFilm(data){
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
        }
    }

}