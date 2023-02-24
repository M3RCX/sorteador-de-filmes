const API_URL = 'https://back-dos-filmes.onrender.com/'; 
const IMG_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = 'ce20ac06fb3262b6ef00dd5c451648f1';



const loadMovie = async (isTV, page) => {
  if(document.querySelector(".onoffbtn").classList.contains("active")){
    try {
      const response = await fetch(`${API_URL}/tv?isTV=${isTV}&page=${page}`);
      const data = await response.json();
      const { title, name, overview, poster_path, id } = data.results[Math.floor(Math.random() * data.results.length)];
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
      document.querySelector(".movie-title").innerHTML = "<h2>Nenhum filme encontrado, tente novamente.</h2>";
    }
  }else{
    try {
      const response = await fetch(`${API_URL}/filmes?isTV=${isTV}&page=${page}`);
      const data = await response.json();
      const { title, name, overview, poster_path, id } = data.results[Math.floor(Math.random() * data.results.length)];
      const imgSrc = IMG_URL + poster_path;
      const { logo_path, provider_name } = await getMovieProviders(id, isTV); 
      console.log(data.results[Math.floor(Math.random() * data.results.length)]);
      clearMovie();
      document.querySelector(".movie-img").innerHTML = `<img class="img-fluid rounded-start" src='${imgSrc}' />`;
      document.querySelector(".movie-title").innerHTML = `<h2 class="card-title">${isTV ? name : title}</h2>`;
      document.querySelector(".movie-description").innerHTML = `<p class="card-text">${overview}</p>`;
      document.querySelector(".movie-provider-img").innerHTML = `<img class="img-fluid rounded-start" src='${IMG_URL}${logo_path}' />`;
      document.querySelector(".movie-provider").innerHTML = `<p class='text-n'>${provider_name}</p>`;
    } catch (error) {
      clearMovie();
      document.querySelector(".movie-title").innerHTML = "<h2>Nenhum filme encontrado, tente novamente.</h2>";
    }
  };
};


const getMovieProviders = async (id, isTV) => {

if(document.querySelector(".onoffbtn").classList.contains("active")){
  try {
    const response = await fetch(`${API_URL}/provedores/tv?isTV=${isTV}&id=${id}`);
    const data = await response.json();
    const { logo_path, provider_name } = data;
    return { logo_path, provider_name };
  } catch (error) {
    console.log(error);
    return { logo_path: "", provider_name: "" };
  }
}else{
    try {
      const response = await fetch(`${API_URL}/provedores/movies?isTV=${isTV}&id=${id}`);
      const data = await response.json();
      const { logo_path, provider_name } = data;
      return { logo_path, provider_name };
    } catch (error) {
      console.log(error);
      return { logo_path: "", provider_name: "" };
    }
  };
};


const clearMovie = () => {
  const movieTitle = document.querySelector(".movie-title h2");
  if (movieTitle) {
    movieTitle.remove();
    // document.querySelector(".movie-description p").remove();
    // document.querySelector(".movie-img img").remove();
    // document.querySelector(".movie-provider p").remove();
    // document.querySelector(".movie-provider-img img").remove();
  };
};

document.querySelector(".button-container").addEventListener("click", function () {
  const isTV = document.querySelector(".onoffbtn").classList.contains("active");
  const page = isTV ? Math.floor(Math.random() * 378) + 1 : Math.floor(Math.random() * 499) + 1;
  loadMovie(isTV, page);
});

document.querySelector('.onoffbtn').addEventListener('click', function () {
  this.classList.toggle('active');
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