'user strict';
// let numberOfFilms = confirm ('Сколько фильмов вы уже посмотрели?');
//console.log(numberOfFilms);

let numberOfFilms; //= +prompt ('Сколько фильмов вы уже посмотрели?','');

  function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');
    }
  }
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actros:{},
    genres:[],
    privat:false,
};



//const ask = prompt ("Один из посделних просмотренных фильмов?", " "),
  //     ask1 = prompt ("На сколько оцените его?", " "),
    //   ask2 = prompt ("Один из посделних просмотренных фильмов?", " "),
      // ask3 = prompt ("На сколько оцените его?", " ");
 //personalMovieDB.movies.ask = ask1;  
 //personalMovieDB.movies.ask2 = ask3;   
 

function rememberMyFilms() {
  for (let i = 0; i < 2; i++ ) {

    const ask = prompt("Один из последних просмотренных фильмов?", " "),
          ask1 = prompt("На сколько оцените его?", " ");

            
  if (ask != null && ask1 != null && ask.length != 0 && ask1.length != 0 && ask.length < 50 ) {

    personalMovieDB.movies[ask] = ask1;
    console.log("done");
  } else  {
    console.log('error');  
    i--;
  }  
}
}          
rememberMyFilms();



function detectPersonalLevel() {

  if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов" );
  }
  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);
 //console.log(personalMovieDB);
 function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    
          personalMovieDB.genres[i - 1 ] = prompt (`Ваш любимый жанр под номером ${i}`);
}

} 
writeYourGenres();




