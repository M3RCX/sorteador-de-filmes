import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";


$('.onoffbtn').on('click', function(){
  if($(this).children().is(':checked')){
    $(this).addClass('active');
  }
  else{
    $(this).removeClass('active')
  }
});

$(".button-container").on("click", function () {
  $(".movie-title h2").remove();
  $(".movie-description p").remove();
  $(".movie-img img").remove();
<<<<<<< HEAD
  $(".movie-provider p").remove();
  $(".movie-provider-img img").remove();
=======
  var i = 0;
  var page = Math.floor(Math.random() * 501 + 1);
  var categorieId = Math.floor(Math.random() * 20 + 1);

  if ($(".onoffbtn").hasClass("active")) {
    
    var page = Math.floor(Math.random() * 17 + 1);

    $.ajax({
      type: "GET",
      url: `https://api.themoviedb.org/3/discover/tv?api_key=ce20ac06fb3262b6ef00dd5c451648f1&language=pt-BR&sort_by=popularity.desc&page=${page}&include_null_first_air_dates=false&watch_region=BR&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
      accept: "application/json",
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        console.log(categorieId);
        console.log(response);
        console.log(response.results);
>>>>>>> 642aa4ff8a50cb1f2da9ca55149473ee25133259

        i = response.results[categorieId];
        console.log(i);

<<<<<<< HEAD
  var i = 0;
  var page = Math.floor(Math.random() * 501 + 1);
  // var categorieId = 1;
  var categorieId = Math.floor(Math.random() * 20 + 0);

  if ($(".onoffbtn").hasClass("active")) {
    
    var page = Math.floor(Math.random() * 17 + 1);

    $.ajax({
      type: "GET",
      url: `https://api.themoviedb.org/3/discover/tv?api_key=ce20ac06fb3262b6ef00dd5c451648f1&language=pt-BR&sort_by=popularity.desc&page=${page}&include_null_first_air_dates=false&watch_region=BR&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
      accept: "application/json",
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        console.log(categorieId);
        console.log(response);
        console.log(response.results);

        i = response.results[categorieId];
        console.log(i);

        var movieTitle = response.results[categorieId].name;
        var movieDescription = response.results[categorieId].overview;
        var movieImg = response.results[categorieId].poster_path;
        var tvId = response.results[categorieId].id;

        console.log(tvId);


        $.ajax({
          type: "GET",
          url: `https://api.themoviedb.org/3/tv/${tvId}/watch/providers?api_key=ce20ac06fb3262b6ef00dd5c451648f1`,
          accept: "application/json",
          contentType: "application/json",
          dataType: "json",
          success: function (response) {
            console.log(response);
            var tvProvider = response.results.BR.flatrate[0];
            console.log(tvProvider);
            var providerLogo = response.results.BR.flatrate[0].logo_path;
            var providerName = response.results.BR.flatrate[0].provider_name;


            $(".movie-provider-img").append(`<img src='${IMG_URL}${providerLogo}' />`);
            $(".movie-provider").append("<p class='text-n'>" + providerName + "</p>");

          }
        });
        $(".movie-img").append(`<img src='${IMG_URL}${movieImg}' />`);
        $(".movie-title").append("<h2>" + movieTitle + "</h2>");
        $(".movie-description").append("<p>" + movieDescription + "</p>");
      },
      error: function () {
        $(".movie-title").append(
          "<h2>Nenhum filme encontrado tente denovo</h2>"
        );
      },
    });
  } else {
    $.ajax({
      type: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=ce20ac06fb3262b6ef00dd5c451648f1&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&watch_region=BR&with_watch_monetization_types=flatrate`,
      accept: "application/json",
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        console.log(categorieId);
        console.log(response);
        console.log(response.results);

        i = response.results[categorieId];
        console.log(i);

        var movieTitle = response.results[categorieId].title;
        var movieDescription = response.results[categorieId].overview;
        var movieImg = response.results[categorieId].poster_path;
        var movieId = response.results[categorieId].id;



        $.ajax({
          type: "GET",
          url: `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=ce20ac06fb3262b6ef00dd5c451648f1`,
          accept: "application/json",
          contentType: "application/json",
          dataType: "json",
          success: function (response) {
            console.log(response);
            var tvProvider = response.results.BR.flatrate[0];
            console.log(tvProvider);
            var providerLogo = response.results.BR.flatrate[0].logo_path;
            var providerName = response.results.BR.flatrate[0].provider_name;


            $(".movie-provider-img").append(`<img src='${IMG_URL}${providerLogo}' />`);
            $(".movie-provider").append("<p class='text-n'>" + providerName + "</p>");

          }
        });

=======
        var movieTitle = response.results[categorieId].name;
        var movieDescription = response.results[categorieId].overview;
        var movieImg = response.results[categorieId].poster_path;

        $(".movie-img").append(`<img src='${IMG_URL}${movieImg}' />`);
        $(".movie-title").append("<h2>" + movieTitle + "</h2>");
        $(".movie-description").append("<p>" + movieDescription + "</p>");
      },
      error: function () {
        $(".movie-title").append(
          "<h2>Nenhum filme encontrado tente denovo</h2>"
        );
      },
    });
  } else {
    $.ajax({
      type: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=ce20ac06fb3262b6ef00dd5c451648f1&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&watch_region=BR&with_watch_monetization_types=flatrate`,
      accept: "application/json",
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        console.log(categorieId);
        console.log(response);
        console.log(response.results);

        i = response.results[categorieId];
        console.log(i);

        var movieTitle = response.results[categorieId].title;
        var movieDescription = response.results[categorieId].overview;
        var movieImg = response.results[categorieId].poster_path;
>>>>>>> 642aa4ff8a50cb1f2da9ca55149473ee25133259

        $(".movie-img").append(`<img src='${IMG_URL}${movieImg}' />`);
        $(".movie-title").append("<h2>" + movieTitle + "</h2>");
        $(".movie-description").append("<p>" + movieDescription + "</p>");
      },
      error: function () {
        $(".movie-title").append(
          "<h2>Nenhum filme encontrado tente denovo</h2>"
        );
      },
    });
  }
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
