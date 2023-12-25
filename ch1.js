/*
..js is high level,dynamic,interpreted, programming language
..owner of the language is Netscape and orancle
..standard name is ECMAscript
..orginal host environment for js was a web browser
..since 2010 another environment channel is your own operating system which is possible by Node

*/
let x;
x = 0;
x;

x = 1;
x = 0.01;
x = "hello world";
x = "Javascript";
x = true;
x = false;
x = null;
x = undefined;

let book = {
  topic: "Javscript",
  edition: 7,
};

book.topic;
book["edition"];

book.author = "Flanagan";
book.content = {}; //content is an empty object inside of book object .

//conditionally access
console.log(book?.edition);

//array
let primes = [2, 3, 5, 7];
primes[0];
primes.length;
primes[primes.length];
primes[4] = 9;
//alter exist array value
primes[4] = 20;
let empty = [];
empty.length; //0

//array and objects can hold other arrays and objects
let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

let data = {
  trail1: [
    [1, 2],
    [3, 4],
  ],
  trail2: [
    [10, 20],
    [30, 40],
  ],
};

//js also support arrays(numerically indexed lists) of values
let primess = [2, 3, 4, 5, 7];
console.log(primess[0]); //2
primess.length; //4
primess[primess.length - 1]; //value at index 4
primess[4] = 9; //it alter the value at index 4 which was 7 earlier and 9 now
primess[4] = 11; //it again alter the same

//operator acts as a  values to produce a new value
//arthimetic operator are some of the simplest
3 + 2;
3 - 2;
3 * 2;
3 / 2;

points[1].x - points[0].x; //value will be 1
"3" + "2"; //"32" its called string concatenates

//some shorthand that js uses
let count = 0;
count++;
count--;
count += 2;
count *= 3;
count;

//unequal,less than,greatar than and so on
//these arthemetic operations basically gives boolean values
let p = 2,
  q = 3;
p === q; //false
p !== q; //true
p < q; //true
p <= q; //true
p > q; //false
p >= q; //false
"two" === "three";
"two" > "three"; //in string comparison we choose alphabetic order to see which is greater
false === p > q;

//logical operators combine or invert boolean values
p === 2 && q === 3; //true
p > 3 || q < 3; //false
!(p === q); //true

//expression is something that computes a value but doesnot do anything
//it doesnot alter the programme state in any way
//statement doesnot have a value,but they alter the state

//function--a parameterized block of js code that u define once and invoke over and over again.

function plus1(x) {
  return x + 1;
}

console.log(plus1(q));

function square(x) {
  return x * x;
}

console.log(square(10));

//function are like the values that can be assigned to vars

//function as a parameter
console.log(square(plus1(p)));

//ES6 ==> arrow function===shorthand syntax for defining function
//when u pass an unnamed function as an arguments to another function arrow function becomes much handy

const plusOne = (x) => x + 1;
const squareNum = (x) => x * x;
console.log(plusOne(q));
console.log(square(plusOne(q)));


//using function with object,we call it methods
//all js objects (including array) have methods