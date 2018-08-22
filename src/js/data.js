window.getMovies = (api, search) => {
  const url = `http://www.omdbapi.com/?apikey=${api}&s=${search}&type=movie`;
  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then((res) => {
      console.log(res);
      getData(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

window.getData = (data) => {
  let movies = data.Search;
  console.log(movies);
  return movies;
};
