"use strict";

//let num = 50;

//while (num <= 55) {
  //  console.log(num);
    //num++;
//}

//do {
  //  console.log(num);
    //num++;
//}
//while (num < 55);
/* let ask00 = prompt ("Один из посделних просмотренных фильмов?", " ");
let ask11 = prompt ("На сколько оцените его?", " ");
for (let i = 1; i <= 2; i++) {
   console.log(ask00);
  // console.log(ask1);
}

let num = 50;
for (let i= 1; i <=4; i++ ) {
  console.log(num);
} */
let num = 20;
function showFirstMessage(text){
  console.log(text);
 // let num = 10;
  console.log(num);
}

showFirstMessage('Hello World ');
console.log(num);



function ret() {
let num = 50;


return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log('Hello ');
};
logger();

const calc = (a, b) => {
  console.log('1');
  return a+b;
};

const str = 'teSt';
//const arr = [1, 2, 5];

//console.log(str[2] = 'd');

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('q'));

const logg = 'Hello world';


console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num1 = 12.2;
console.log(Math.round(num1));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

