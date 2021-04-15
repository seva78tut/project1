'user strict';
// let numberOfFilms = confirm ('Сколько фильмов вы уже посмотрели?');
//console.log(numberOfFilms);

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actros:{},
    genres:[],
    privat:"false",
};
//personalMovieDB [] = prompt ("",""),
console.log(personalMovieDB);

const ask = prompt ("Один из посделних просмотренных фильмов?", " "),
       ask1 = prompt ("На сколько оцените его?", " "),
       ask2 = prompt ("Один из посделних просмотренных фильмов?", " "),
       ask3 = prompt ("На сколько оцените его?", " ");
 personalMovieDB.movies.ask = ask1;  
 personalMovieDB.movies.ask2 = ask3;   
 
 console.log(personalMovieDB);





