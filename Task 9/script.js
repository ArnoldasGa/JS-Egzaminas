/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(title,director,budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
        this.wasExpensive = function(){
            return (budget > 100000000)
        }
    }
}

start()

function start() {
    a = prompt("Title of the movie")
    b = prompt("Directro of the movie")
    c = prompt("Budget of the movie in USD")
    movie = new Movie(a,b,c)
    console.log(movie.wasExpensive());
}