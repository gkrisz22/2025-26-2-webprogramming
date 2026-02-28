const movies = [
    { title: "Inception",       genre: "Sci-Fi",   rating: 8.8, watched: true  },
    { title: "The Dark Knight", genre: "Action",   rating: 9.0, watched: true  },
    { title: "Interstellar",    genre: "Sci-Fi",   rating: 8.6, watched: false },
    { title: "Parasite",        genre: "Thriller", rating: 8.6, watched: true  },
    { title: "The Matrix",      genre: "Sci-Fi",   rating: 8.7, watched: false },
];


// Task 1) Array functions

// a) Result: ["Inception", "The Dark Knight", "Interstellar", "Parasite", "The Matrix"]
// Hint: .map() (MAP RETURNS AN ARRAY) .map(...) -> []


let titles = movies.map(movie => movie.title);
console.log(titles);

// b) Result: avg of ratings
// Hint: reduce (REDUCE RETURNS A SINGLE VALUE) .reduce(...) -> x

let sumOfRatings = movies.reduce((acc, movie) => acc + movie.rating, 0);
console.log(sumOfRatings);
let avgOfRatings = sumOfRatings / movies.length;
console.log("Avg: " + avgOfRatings);

// c) Array of movies that we have not watched yet.
// Hint: filter (FILTER RETURNS AN ARRAY) .filter(...) -> []

let notWatched = movies.filter(movie => !movie.watched);
console.log(`You have not watched ${notWatched.length}, and these are: `, notWatched);

// Task 2 - MOVIES DOM, EVENT HANDLING, DELEGATION

const ul = document.querySelector("#movie-list");
const searchInput = document.querySelector("#search");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function() {
    let newTitle = document.querySelector("#new-title").value;
    let newGenre = document.querySelector("#new-genre").value;
    let rating = document.querySelector("#new-rating").value;
    // ratings: 0..10
    if(!newTitle || !newGenre || !rating || rating < 0 || rating > 10) {
        return;
    }

    const newMovie = {
        title: newTitle,
        genre: newGenre,
        watched: false,
        rating // rating:rating
    };

    movies.push(newMovie);
    newTitle = "";
    newGenre = "";
    rating = "";

    renderMovies(movies);
});

function renderMovies(list) {
    ul.innerHTML = list.map(movie => `
        <li class="${movie.watched ? 'watched' : ''}" >
            <strong>${movie.title}</strong> - ${movie.genre} - ${movie.rating}
        </li>
    `).join('');
}

renderMovies(movies);

// Searching
searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
    // Movie's title: abcdefg
    // Search query: bc
    // [abcdefg]

    renderMovies(filtered);
});


// Watched toggle: DELEGETION
// 1. ul < 2. ulWrapper < 3. body: (event) BUBBLING
ul.addEventListener("click", function (event) {
    const clickedLi = event.target.closest("li");
    console.log(clickedLi)

    clickedLi.classList.toggle("watched");

    // Toggle manages state of:
        // watched is on the classList? Yes: remove it, Not: add it!
})

document.body.addEventListener("click", function (e) {
    console.log("Delegation from body");
})

/*
DONT DO THIS:

const allLis = document.querySelectorAll("li");

allLis.forEach((li) => {
    li.addEventListener("click", function (e) {

    });
})*/


