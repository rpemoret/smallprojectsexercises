/*const addmoviestodom = movies.map(function(mapmovie) {
  return mapmovie;
});
*/

// A --- get the "list" class with document.getElementById
// B --- create element "li" for Each item in the array with setmovies.forEach
// C --- create nodes inside the "li" elements with document.createTextNode with content from movie.Title
// D --- add the "li" items
// E --- add the content to the "li" items
// F --- same for images

const addMoviestoDOM = function(setmovies) {
  const list = document.getElementById("list");
  setmovies.forEach(function(movie) {
    let listItem = document.createElement("li");
    const contentOfListItem = document.createTextNode(movie.Title);
    list.appendChild(listItem);
    listItem.appendChild(contentOfListItem);
    let node = document.createElement("li");
    let imgnode = document.createElement("img");
    imgnode.src = movie.Poster;
    node.appendChild(imgnode);
    document.getElementById("list").appendChild(node);

    console.log(movie);
  });
};

addMoviestoDOM(movies);

const filterFunction = function() {
  const setfilter = document.getElementsByName(
    "Newest movies",
    "Avengers movies",
    "X-Men movies",
    "Princess movies",
    "Batman movies"
  );

  filterbutton.addEventListener("click", function() {
    filterFunction();
  });

  document.addEventListener("DOMContentLoaded", event => {
    addMoviestoDOM();
  });
};

const 
