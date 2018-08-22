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
  console.log(moviesToPrint);
  let movieList = document.getElementById('movies');
  moviesToPrint.forEach(movie => {
    let movieCard = document.createElement('div');
    let movieInfo = document.createElement('div');
    let movieTitle = document.createElement('p');
    let moviePoster = document.createElement('img');

    movieCard.setAttribute('class', 'movieCard');
    if (movie.Poster === 'N/A') {
      moviePoster.setAttribute('src', `${'../src/assets/poster-placeholder.png'}`);
    } else {
      moviePoster.setAttribute('src', `${movie.Poster}`);
    }


    movieCard.dataset.movieKey = movie.imdbID;

    movieTitle.innerHTML = movie.Title;
    movieInfo.appendChild(moviePoster);
    movieInfo.appendChild(movieTitle);
    movieCard.appendChild(movieInfo);
    movieList.appendChild(movieCard);

    // console.log(movie.Title);
  });
};

// Function for the button in the first reach
// const search = 'Wonder+Woman';
// const btn = document.getElementById('get-data');

// btn.addEventListener('click', (event) => {
//   getMovies(apiKey, search);
// });

