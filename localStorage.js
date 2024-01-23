
let movies = [];
let moviesArr = [];
function testData(){
    axios.get('https://www.omdbapi.com/?s=all&type=movie&apikey=e95f2e70')
    .then(response => {
    movies = response.data.Search;
    moviesArr = JSON.stringify(movies)
    localStorage.setItem("movies", moviesArr)

    
      
  })
  .catch(error => {
    console.log(error);
    
  });
    console.log(moviesArr);

}


  function test(){
    retMovies = localStorage.getItem("movies")
    console.log(retMovies)
    retMoviesArr = JSON.parse(retMovies)
    console.log(retMoviesArr)  

  }
  testData();
 