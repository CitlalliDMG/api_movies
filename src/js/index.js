// Declare API Key and Search String
const apiKey = 'a057ebc5';
let search = '';

// Get buttons
const buttons = document.getElementsByClassName('entry');

// Function to get the ID of the button selected by the user
const getId = () => {
  search = event.target.id;
  return search;
};

// Function convert the ID on the Search String
const getEntry = (id) => {
  switch (id) {
  case 'option-1':
    search = 'Superman';
    break;
  case 'option-2':
    search = 'Batman';
    break;
  case 'option-3':
    search = 'Wonder+Woman';
    break;
  }
  return search;
};

// Listen to buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    document.getElementById('movies').innerHTML = '';
    let id = getId();
    let search = getEntry(id);
    // Call to the function that makes the petition to the API
    getMovies(apiKey, search);
  });
};

// Function to print the movies on screen
const printMovies = (moviesToPrint) => {
  let movieList = document.getElementById('movies');

  moviesToPrint.forEach(movie => {
    let movieCard = document.createElement('div');
    let movieInfo = document.createElement('div');
    let movieTitle = document.createElement('p');
    let moviePoster = document.createElement('img');

    movieCard.setAttribute('class', 'movieCard');
    movieCard.setAttribute('data-toggle', 'modal');
    movieCard.setAttribute('data-target', '#exampleModal');

    if (movie.Poster === 'N/A') {
      moviePoster.setAttribute('src', `${'../src/assets/poster-placeholder.png'}`);
    } else {
      moviePoster.setAttribute('src', `${movie.Poster}`);
    }

    movieCard.dataset.movieKey = movie.imdbID;
    movieCard.dataset.movieTitle = movie.Title;
    movieCard.dataset.movieYear = movie.Year;
    movieCard.dataset.movieType = movie.Type;
    movieCard.dataset.moviePoster = movie.Poster;

    movieTitle.innerHTML = movie.Title;
    movieInfo.appendChild(moviePoster);
    movieInfo.appendChild(movieTitle);
    movieCard.appendChild(movieInfo);
    movieList.appendChild(movieCard);
    getDivForModal(movieCard);
  });
};

const showModal = (movieData) => {
  console.log(movieData);

  if (movieData.moviePoster === 'N/A') {
    movieData.moviePoster = `${'../src/assets/poster-placeholder.png'}`;
  }
  let modalArea = document.getElementById('exampleModal');
  modalArea.innerHTML = `<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${movieData.movieTitle}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
      <div class="modal-body row m-3">
      <div id="poster-container">
        <img class= "image-poster mr-5" src="${movieData.moviePoster}" alt="${movieData.movieTitle}">
      </div>
      <div id="info-container">
        <p>Año: ${movieData.movieYear}</p>
        <p>Tipo: ${movieData.movieType}</p>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>`;
};

const getDivForModal = (movieCard) => {
  let movieData = movieCard.dataset;

  movieCard.addEventListener('click', () => {
    console.log(movieData.movieKey);
    showModal(movieData);
  });
};

// Function for the button in the first reach
// const search = 'Wonder+Woman';
// const btn = document.getElementById('get-data');

// btn.addEventListener('click', (event) => {
//   getMovies(apiKey, search);
// });

