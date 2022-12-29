import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

$(".button-container").on("click", function () {
  $(".movie-title h2").remove();
  $(".movie-description p").remove();
  $(".movie-img img").remove();
  var i = 0
  var page = Math.floor(Math.random() * 501);
  var categorieId = Math.floor(Math.random() * 20);
  $.ajax({
    type: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=ce20ac06fb3262b6ef00dd5c451648f1&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`,
    accept: "application/json",
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      console.log(categorieId);
      console.log(response);
      console.log(response.results);

      i = response.results[categorieId]
      console.log(i);


    var movieTitle = response.results[categorieId].title;
    var movieDescription = response.results[categorieId].overview;
    var movieImg = response.results[categorieId].poster_path;

    $('.movie-img').append(`<img src='${IMG_URL}${movieImg}' />`);
    $('.movie-title').append('<h2>'+movieTitle+'</h2>');
    $('.movie-description').append('<p>'+movieDescription+'</p>');

      

    },
    error: function () {
      $(".movie-title").append("<h2>Nenhum filme encontrado tente denovo</h2>");
    },
  });
});














// $.ajax({
//   type: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/' + movieId + API_KEY + language,
//   accept: 'application/json',
//   contentType: 'application/json',
//   dataType: 'json',
//   success: function(response) {
//     var movieTitle = response.title;
//     var movieDescription = response.overview;
//     var movieImg = response.poster_path;

//     $('.movie-img').append(`<img src='${IMG_URL}${movieImg}' />`);
//     $('.movie-title').append('<h2>'+movieTitle+'</h2>');
//     $('.movie-description').append('<p>'+movieDescription+'</p>');

//   },
//   error: function(){
//     $('.movie-title').append('<h2>Nenhum filme encontrado tente denovo</h2>');
//   }
// });
