function fillMovies(data) {
  let movies = document.getElementById("movies");
  movies.innerHTML = "";
  data.Search.forEach((movie) => {
    movies.innerHTML += `
      <a href=movieInfo.html?movie?=${movie.imdbID}>
        <div class="card">
          <img src=${movie.Poster} class="card-img-top" height="200">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <span>${movie.Year}</span>
          </div>
        </div>
      </a>
      `;
  });
}

function insertCategories(place, categorie) {
  place.innerHTML = "";
  place.innerHTML += `
    <div class="img-circle">
  <svg
    class="progress-ring"
    width="100"
    height="100">
    <circle
      class="progress-ring__circle"
      stroke="white"
      stroke-width="4"
      fill="transparent"
      r="48"
      cx="50"
      cy="50"/>
  </svg>
  <div class="img-circle2"></div>
  `;
}
