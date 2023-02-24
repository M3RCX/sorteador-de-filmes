import { API_KEY, IMG_URL } from "./api.js";

const loadMovie = async (isTV, page) => {
  try {
    const [movieResult, categorieId] = await getMovieResults(isTV, page);
    const { title, name, overview, poster_path, id } = movieResult;
    const imgSrc = IMG_URL + poster_path;
    const { logo_path, provider_name } = await getMovieProviders(id, isTV); 
    clearMovie();

    document.querySelector(".movie-img").innerHTML = `<img class="img-fluid rounded-start" src='${imgSrc}' />`;
    document.querySelector(".movie-title").innerHTML = `<h2 class="card-title">${isTV ? name : title}</h2>`;
    document.querySelector(".movie-description").innerHTML = `<p class="card-text">${overview}</p>`;
    document.querySelector(".movie-provider-img").innerHTML = `<img class="img-fluid rounded-start" src='${IMG_URL}${logo_path}' />`;
    document.querySelector(".movie-provider").innerHTML = `<p class='text-n'>${provider_name}</p>`;
  } catch (error) {
    clearMovie();
    console.log(getMovieResults);
    document.querySelector(".movie-title").innerHTML = "<h2>Nenhum filme encontrado, tente novamente.</h2>";
  }
};

const getMovieResults = async (isTV, page) => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/${isTV ? "tv" : "movie"}${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&watch_region=BR&with_watch_monetization_types=flatrate`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
  const data = await response.json();
  const categorieId = getRandomInt(20);
  const movieResult = data.results[categorieId];
  return [movieResult, categorieId];
};

const getMovieProviders = async (id, isTV) => {
  const response = await fetch(`https://api.themoviedb.org/3/${isTV ? "tv" : "movie"}/${id}/watch/providers${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
  const data = await response.json();
  const { flatrate } = data.results.BR;
  const { logo_path, provider_name } = flatrate[0];
  return { logo_path, provider_name };
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const clearMovie = () => {
  const teste = document.querySelector(".movie-title") ;
  if (teste.length > 0 ) {
    document.querySelector(".movie-title h2").remove();
    document.querySelector(".movie-description p").remove();
    document.querySelector(".movie-img img").remove();
    document.querySelector(".movie-provider p").remove();
    document.querySelector(".movie-provider-img img").remove();
  };
};


document.querySelector('.onoffbtn').addEventListener('click', function () {
  this.classList.toggle('active');
});

document.querySelector(".button-container").addEventListener("click", function () {
  const isTV = document.querySelector(".onoffbtn").classList.contains("active");
  const page = isTV ? getRandomInt(378) + 1 : getRandomInt(499) + 1;
  loadMovie(isTV, page);
});

const onoffbtn = document.querySelector('.onoffbtn');

onoffbtn.addEventListener('click', function() {
  const checkbox = this.querySelector('input[type="checkbox"]');
  if (checkbox.checked) {
    this.classList.add('active');
  } else {
    this.classList.remove('active');
  }
});
