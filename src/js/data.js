window.getMovies = (api, search) => {
  const url = `https://www.omdbapi.com/?apikey=${api}&s=${search}&type=movie`;

  fetch(url)
    .then(response => response.json())
    .then((res) => {
      let moviesData = getData(res);
      printMovies(moviesData);
    })
    .catch((error) => {
      console.log(error);
    });
};

window.getData = (data) => {
  let movies = data.Search;
  return movies;
};
