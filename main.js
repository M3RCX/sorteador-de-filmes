import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'


$('.button-container').on('click', function(){
  $('.movie-title h2').remove();
  $('.movie-description p').remove();
  $('.movie-img img').remove();

  console.log(API_KEY)

  var movieId = Math.floor(Math.random() * 999 );

  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + movieId + API_KEY + language,
    accept: 'application/json',
    contentType: 'application/json',
    dataType: 'json',
    success: function(response) {
      var movieTitle = response.title;
      var movieDescription = response.overview;
      var movieImg = response.poster_path;

      $('.movie-img').append(`<img src='${IMG_URL}${movieImg}' />`);
      $('.movie-title').append('<h2>'+movieTitle+'</h2>');
      $('.movie-description').append('<p>'+movieDescription+'</p>');


      
    },
    error: function(){
      $('.movie-title').append('<h2>Nenhum filme encontrado tente denovo</h2>');
    }
  });
})

