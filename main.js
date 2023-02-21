import { API_KEY, IMG_URL} from "./api.js";

const loadMovie = async (isTV) => {
  try {
    const [movieResult, categorieId] = await getMovieResults(isTV);
    const { title, name, overview, poster_path, id } = movieResult;
    const imgSrc = IMG_URL + poster_path;
    const { logo_path, provider_name } = await getMovieProviders(id, isTV);

    clearMovie();

    $(".movie-img").append(`<img src='${imgSrc}' />`);
    $(".movie-title").append(`<h2>${isTV ? name : title}</h2>`);
    $(".movie-description").append(`<p>${overview}</p>`);
    $(".movie-provider-img").append(`<img src='${IMG_URL}${logo_path}' />`);
    $(".movie-provider").append(`<p class='text-n'>${provider_name}</p>`);
  } catch (error) {
    clearMovie();
    $(".movie-title").append("<h2>Nenhum filme encontrado, tente novamente.</h2>");
  }
};

const getMovieResults = async (isTV) => {
  const response = await $.ajax({
    type: "GET",
    url: `https://api.themoviedb.org/3/discover/${isTV ? "tv" : "movie"}?${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${getRandomInt(500) + 1}&watch_region=BR&with_watch_monetization_types=flatrate`,
    accept: "application/json",
    contentType: "application/json",
    dataType: "json",
  });
  const categorieId = getRandomInt(20);
  const movieResult = response.results[categorieId];
  return [movieResult, categorieId];
};

const getMovieProviders = async (id, isTV) => {
  const response = await $.ajax({
    type: "GET",
    url: `https://api.themoviedb.org/3/${isTV ? "tv" : "movie"}/${id}/watch/providers?${API_KEY}`,
    accept: "application/json",
    contentType: "application/json",
    dataType: "json",
  });
  const { flatrate } = response.results.BR;
  const { logo_path, provider_name } = flatrate[0];
  return { logo_path, provider_name };
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const clearMovie = () => {
  $(".movie-title h2").remove();
  $(".movie-description p").remove();
  $(".movie-img img").remove();
  $(".movie-provider p").remove();
  $(".movie-provider-img img").remove();
};

$('.onoffbtn').on('click', function () {
  $(this).toggleClass('active');
});

$(".button-container").on("click", function () {
  const isTV = $(".onoffbtn").hasClass("active");
  loadMovie(isTV);
});

