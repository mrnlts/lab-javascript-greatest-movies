// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (arr){
    const directors = arr.map(function(object){
        return object.director;
            });
    return directors;
}
getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    const dramaMovies = arr.filter(function (movie) {
            return movie.genre.includes("Drama");
        });
    const selectedDirMovies = dramaMovies.filter(function(arr) {
            return arr.director === ("Steven Spielberg");
    });    
    return selectedDirMovies.length;
}
howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length === 0){
        return 0;
    } else {
        let sumRates = movies.reduce(function(acc, movie){
        return acc + (movie.rate || 0);
        },0);
    let average = (sumRates / movies.length).toFixed(2);
    return parseFloat(average);
    } 
    }
     
// Iteration 4: Drama movies - Get the average of Drama Movies


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    const moviesbyYear = arr.slice().sort(function(a,b) {
    return (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1
    });
    return moviesbyYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(a,b){
    const moviesByName = movies.sort();
    return moviesByYear;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
