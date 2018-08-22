// Declare API Key and Search String
const apiKey = 'a057ebc5';
let search = '';

// Get buttons
const buttons = document.getElementsByClassName('entry');

const getId = () => {
  search = event.target.id;
  return search;
};

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
    let id = getId();
    let search = getEntry(id);
    getMovies(apiKey, search);
  });
};

const printMovies = (moviesToPrint) =>{
  console.log(moviesToPrint);
};

// Function for the button in the first reach
// const search = 'Wonder+Woman';
// const btn = document.getElementById('get-data');

// btn.addEventListener('click', (event) => {
//   getMovies(apiKey, search);
// });

