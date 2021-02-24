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

function ratesAverage(arr){
    if (arr.length >= 1) {
        // const ratings = arr.map(function (movie) {
        //         const total = ratings.reduce(function (acc, val) {
        //                 return acc + val;
        //         }, 0);
        //         return Math.round((total / arr.length) * 100.0 / 100.0);
        //     });    
        const ratings = arr.filter(function (movie) {
            if (typeof( movie.rate !== Number)) {
                return 0;
            } else {
                return movie.rate;
            }
        });

        const total = ratings.reduce(function(acc, val) {
            return acc+val;
        }, 0);

        return Math.round((total/arr.length)* 100)/100;
    
    } else if (arr.length < 1) {
        return 0;
    };
}

// Iteration 4: Drama movies - Get the average of Drama Movies


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(a,b){
    const moviesByYear = movies.sort();
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
