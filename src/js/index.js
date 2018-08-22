const apiKey = 'a057ebc5';
const search = 'Wonder+Woman';

const btn = document.getElementById('get-data');

btn.addEventListener('click', (event) => {
  getMovies(apiKey, search);
});

