// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (arr){
    const directors = arr.map((object) => object.director);
    return directors;
}
getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    const dramaMovies = arr.filter((movie) => movie.genre.includes("Drama"));
    const selectedDirMovies = dramaMovies.filter((arr) => arr.director === ("Steven Spielberg"));
    return selectedDirMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length === 0){
        return 0;
    } else {
        let sumRates = movies.reduce((acc, movie) => acc + (movie.rate || 0),0);
    const average = (sumRates / movies.length).toFixed(2);
    return parseFloat(average);
    } 
    }
     
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (arr) {
    const dramaMovies = arr.filter((movie) => movie.genre.includes("Drama"))
    if (dramaMovies.length === 0){
        return 0;
    } else {
        let sumRates = dramaMovies.reduce((acc, movie) => acc + (movie.rate || 0),0);
    let average = (sumRates / dramaMovies.length).toFixed(2);
    return parseFloat(average);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    const moviesbyYear = arr.slice().sort(function(a,b) {
    return (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1
    });
    return moviesbyYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically= (arr) => {
    let newArr = [];
    newArr = arr.map((movie) => movie.title);
    newArr.sort();
    let firstTwenty = [];
    if (newArr.length <= 20) {
        return newArr;
    } else if (newArr.length > 20) {
        for (let i = 0; i < 20; i++) {
            firstTwenty.push(newArr[i]);
        };
        return firstTwenty;
    };
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const time = arr.map ((movie) => movie.duration);
    const arrMinutes = time.map ((str) => Number(str.replace(/[^0-9\.-]+/g, "")));
    return arrMinutes;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
