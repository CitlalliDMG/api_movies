// Declare API Key and Search String
const apiKey = 'a057ebc5';
let search = '';

// Get buttons
const buttons = document.getElementsByClassName('entry');
console.log(buttons);

const bntSuperman = document.getElementById('option-1');
const bntBatman = document.getElementById('option-2');
const bntWonderWoman = document.getElementById('option-3');

const getEntry = () => {
  search = event.target.id;
  return search;
};

// Listen to buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    let id = getEntry();
    console.log(id);
  });
};

// Function for the button in the first reach
// const search = 'Wonder+Woman';
// const btn = document.getElementById('get-data');

// btn.addEventListener('click', (event) => {
//   getMovies(apiKey, search);
// });

