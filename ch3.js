'use strict';

//+++++++++++++++++++TYPES,VALUES AND VARIABLES+++++++++++++++++//

//Note==data values are literals

//

//TYPES
/*
   ...Values that can be represented and manipulated in a programming language is known as type
   ...set of types js supports
   ...we assign the value to a variable to store some value for future use

CATEGORIES--PRIMITIVE AND OBJECTS TYPES
  
  ///
   1.primitive includes numbers,strings and boolean values,null and undefined are primitive data type
    ..immutable
    ..null and undefined are not numbers or string or boolean value ,they are simply primitives
    
  ///
    2.object type-any js value that is not a number,string ,a boolean,a symbol ,null or undefined is an object
     ..array are object type
     ..set type
     ..map type
     ..function and classes as they are not boolean,numbers or string =>they are simply object type
     ..supports oops
     ..mutable(you can change object type values)


   ///
   ...js liberally chnge one type to another if its necessary means if a progamme expect a string
      it will convert a passed number type to string type
   ..we use const keyword to define constant
   ..we use let(or var before ES6) to define variable
   ..js constant and variable are untypes means declaration doesnot define the type of value u storing/

   //NUMBERS
   ..We can store numbers in js as number literal
   ..it supports 64bit integer easily
   ..can use - sign to make number literal negative
   
   //Integer literal
      ..10-base integer
      0;
      3;
      1000000;
      ..supports hexadecimal number literal start with 0x and then followed by string
      0xff  //its 255
      ..post ES6 it started to support even binary or octal
      0b10101 //21
      0o377

  //Floating-point literals
     ..it means using decimal in the number literal and its easily possible in our js
     ..using e for exponential
     3.14;
     2345.4549;
     .33333333333;
     6.02e23;
  //trick to show long numeric literals
  let billion = 1_000_000_000; is same as 
  let billion =1000000000
  ..implies using _ doesnot make any difference while writting numberic literal of decimal,binary,hexa or octal 
  ..makes reading easier thats it

  */

///Arthemetic in js
/*
  +,-,*,/,%
  but es6 introduced **


  */
Math.pow(2, 4); //16
Math.round(0.6); //1.0 round to the nearest integer
Math.ceil(0.6); //1.0 round upto an integer
Math.floor(0.6); //0 round down to an integer
Math.abs(-5); //5 absolute value
Math.max(10, 20, 30); //return the largest argument
let x = 10,
  y = 10,
  z = 30;
Math.min(x, y, z); // return the lowest argument
Math.random(); //just give any random value where 0<=x<1.0
Math.PI; //circumference of a circle
Math.E; //e base of natural algorithm
Math.sqrt(3); //square root of 3
Math.pow(8, 1 / 3); //2 ,cube root of 8 is 2
Math.sin(0); //trigno
Math.log(1); //0,algo value of 1
//TO make base of log 10
Math.log(100) / Math.LN10;
//log base 2
Math.log(512) / Math.LN2;
Math.exp(3);

//ES6 introduced some more methods
Math.cbrt(27); //cube root
Math.hypot(3, 4); //square root of sum of squares of all arguments
Math.log2(1024); //log base 2
Math.log10(1000); //log base 10
Math.log1p(x); //natural log of (1+x)
Math.expm1(x); //same as exp(-1);the inverse of Math.log1p()
Math.sign(x); //gives -1,0,1 for arguments
Math.imul(2, 3); //6;optimized multiplication of  32 bit integer
Math.clz32(0xf); //in 32 bit integer
Math.trunc(3.9); //only gives the integer and remove post decimal values
Math.fround(x); //round to nearest 32 bit float number
Math.sinh(x); //hyperbolic sine
Math.asinh(x); //hyperbolic arcsine

/*
lets see how js behave when we have get underflow(value nearest to 0),overflow(value larger and hard to represent) 
  and division  by 0.

..whenever underflow condition occur 
...it return 0

...if undeflow from wrong side 
   it simply gives -0(a special js value)


..division by zero is not error  it return simply Infinity and -Infinity
..0/0 gives NaN(not a number value)   
*/

//NaN
console.log(0 / 0);
console.log(Infinity / Infinity);
console.log('hi' / 'vy');
console.log(Math.sqrt(4));
console.log(Math.sqrt(0.1));
console.log(Math.sqrt(-10));

//Infinity conditions
//OVERFLOW
console.log(Number.MAX_VALUE * 2);
console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);

//-Infinity
console.log(Number.NEGATIVE_INFINITY);
console.log(-1 / 0);
console.log(-Number.MAX_VALUE * 2);

//NaN
console.log(Number.NaN);
console.log(0 / 0);
console.log(Infinity / Infinity);

//some  rare cases
console.log(Number.MIN_VALUE / 2);
console.log(-Number.MIN_VALUE / 2);
-1 / Infinity;

//New properties in ES6
//1
console.log(Number.parseInt('10'));
console.log(Number.parseInt(10));

//2
console.log(Number.parseFloat('10.001'));
console.log(Number.parseFloat('10'));
console.log(Number.parseFloat('10.1037491'));

//3 isNaN==>tell whether it is not a number or not
console.log(Number.isNaN(10));
console.log(Number.isNaN(1));
console.log(Number.isNaN(Infinity / Infinity));

//4.
console.log(Number.isFinite(x));
console.log(Number.isFinite());

//5.
console.log(Number.isInteger(100));
console.log(Number.isInteger('100'));

//6.
console.log(Number.isSafeInteger(2 ** 52));
console.log(Number.isSafeInteger(2 ** 53));
console.log(Number.isSafeInteger(-(2 ** 52)));
console.log(Number.isSafeInteger(-(2 ** 53)));

//7.
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
//8.
console.log(Number.EPSILON);

//NaN
console.log(93473 == NaN);
console.log('STRING' == NaN);
console.log(
  'anything here doesnot equal to Not a number including NaN Itself' == NaN
);
console.log(NaN === NaN);

//isNaN() function globally available===>only true when it is NaN,or when a  value(literal) cannot convert to numeric value
console.log(Number.isNaN(Infinity / Infinity));
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(null));
console.log(Number.isNaN(x / 0));

//isFinitite()
console.log(Number.isFinite(10));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(0 / 0));
console.log(Number.isFinite(Infinity / Infinity));

//a unusual behaviour in js that 0===-0 gives true value
console.log(0 === -0);

let zero = 0;
let negz = -0;
console.log(zero == negz);

//but Infinity is not strictly equal to -Infinity
console.log(1 / zero === 1 / negz);

/*++++++++++++++++++++++++++++++FLOATING POINT AND JS++++++++++++++++++++++++++++
//Binary Floating point and rounding errors
//negative or positive whole number with decimal is what floating point
0.24 is floating point
24 is not(its whole number basically)


//js supports IEEE-754 floating point representation  
//issue in js
js can represent 1/2,1/8,1/2024 easily but cant 



*/

console.log(1 / 2);
console.log(1 / 8);
console.log(1 / 2024);
console.log(1 / 10);
console.log(1 / 100);
console.log(1 / 1000);
console.log(1 / 10000);

//js sometimes have issue with binary floating representation lets see how

let f = 0.3 - 0.2;
let g = 0.2 - 0.1;
console.log(f);
console.log(g);
console.log(f === g);
console.log(f === 0.1);
console.log(g === 0.1);

//++++++++++++++++++++++++++++BigInt+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//arbitraty precision integers and bigInt
//new numeric type in ES2020 is BigInt===to represent 64bit integer
//syntax of BigInt
1234n;
0b1111111n;
0o7777n;
0x8000000000000000000000000000n;

//BigInt() function to convert regular js number or string to BigInt values
console.log(Number.MAX_SAFE_INTEGER);
console.log(BigInt(Number.MAX_SAFE_INTEGER));

let string = '1' + '0'.repeat(100);
console.log(BigInt(string));
console.log(string);

console.log(1000n + 2000n);
console.log(3000n - 2000n);
console.log(2000n * 3000n);

console.log(3000n / 997n);
console.log(3000n % 997n);
console.log(2n ** 131071n - 1n);

//Note--dont mix BigInt values with regular number
// console.log(1n + 10);
// console.log(BigInt(1n) + 10);

//comparison operator works with different numeric types
console.log(1 < 2n);
console.log(2 < 1n);
console.log(0 == 0n);
console.log(0 === 0n);

//Bitwise operator work with BigInt operands
//Math object doesnot accept BigInt integers

//javascript do have date class for representing and manipulating the numbers that represent date and times
//js dates are objects

let timestamp = Date.now();
console.log(timestamp);
let now = new Date();
console.log(now);
let ms = now.getTime(); //convert to milisecond timestamp
console.log(ms);

let iso = now.toISOString();
console.log(iso); //convert string into standard format

//Text
//js type of representing text is string
//string is immutable sequence of 16bit values
//each text(character) represent a string
//js use zero base indexing
//empty string is 0 length string

//characters codepoints and js strings
//(to understand in better way)
//in ES6 string are iterable,use can use all iterable loops like for of.for in

//STRING LITERALS
(''); //string with zero characters
('testing');
('3.14');
('name=myOne');
('hi,this is yogesh on 1st day of 2024');
("she said 'hi' to me");
`she said 'hi' to me ,using backtics or template literals`;
('hi \n hi in second line');

//two lines written on one line
('two \nlines');

//one line string written on 3 lines
('one\
long\
line');

//two line string written on two lines
`the newline character at the end of this line
is included literally in this strings`;

//using single quotes to delimit your strings be careful while using,be careful while writting words like can't and o'reilly's
//be careful about apostrophes (') its almost same as single quotes strings
//use backslash to avoid this issue how let me show u
console.log("hello how'r you");

//escape characters in string literals
//importance of backslash character
console.log("You're right,it can't be a quote");

console.log('\xA9');
console.log('\u03c0');
console.log('\u{1f600}');

//escape characters
console.log('\u0000');
console.log('\b');
console.log('\t');
console.log('\n');
console.log('\v');
console.log('\f');
console.log('\r');
// console.log('\'')
console.log('\\');
// console.log('\xnn');
// console.log('\unnn')
// console.log('\u{n}')

//other than this if backslash is used then its ignored by js
console.log('iehr');
console.log('i*');

//+++++++++++working with stings
//1.concatenate string
let msg = 'hello' + 'world';
let greeting = 'welcome to my blog,' + ' ' + msg;

//2.compare string using equalities and string inequalities operators
let one = 'one';
let two = 'two';
console.log(one === two);
console.log(one !== two);
console.log(one > two);
console.log(one < two);

//to determine the length of the string
let a = 'alcohol';
console.log(a.length);

let s = 'Hello world';

//obtaing a portion of the string
console.log(s.substring(1, 4));
console.log(s.slice(1, 4));
console.log(s.slice(-3));
console.log(s.split(','));

//searching for a string
console.log(s.indexOf('l')); //tell the position of index start with 0
console.log(s.indexOf('l')); //tell the position of index start with 0
console.log(s.indexOf('zz')); //since string doesnot include zz it shows -1
console.log(s.lastIndexOf('l'));

//Boolean searching function in ES6 or later
console.log(s.startsWith('Hell'));
console.log(s.endsWith('!'));
console.log(s.includes('or'));

//creating modified version of a string
console.log(s.replace('llo', 'ya'));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.normalize());
console.log(s.normalize('NFD'));
console.log(s.normalize('NFKC'));
console.log(s.normalize('NFKD'));

//inspecting individuals(16bit) character of a string
console.log(s.charAt(0)); //first character
console.log(s.charAt(s.length - 1)); //last character
console.log(s.charCodeAt(0));
console.log(s.codePointAt(0));

//string padding function in ES2017
console.log('x'.padStart(3)); //add spaces
console.log('x'.padEnd(3));
console.log(3, '*');
console.log('x'.padEnd(3, 'x'));
console.log('x'.padEnd(3, '-'));

//space trimming function called trim() in ES2015
console.log('   test   '.trim()); //remove white space
console.log('   test   '.trimStart()); //remove white space from the left
console.log('   test   '.trimEnd()); //remove space from the right

//miscellaneous string methods
console.log(s.concat('!')); //add text in the last
console.log('<>'.repeat(5));

//string are almost as array how lets see
let p = 'Hello,world';
console.log(p[0]);
console.log(p[p.length - 1]);

//Template literals
s = `hello world`;
let name = 'bill';
let greets = `Hello ${name}`;
console.log(greets);

//Tagged template literal

console.log(`\n`.length); //1 (string has a single newline character)
console.log(String.raw`\n`.length); //2(a backlash character and n as well)

//pattern matching
//a new data type in js is regular expression(RegExp) for describing and matching pattern in strings of text.

console.log(/^HTML/);
console.log(/[1-9][0-9]*/);
console.log(/\bjavascript\b/i);

//method in RegExp
let text = 'testing:1,2,3';
let pattern = /\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.replace(pattern, '#'));
console.log(text.split(/\D+/));

//Boolean values
console.log(a === 4);

if (a === 4) {
  b = b + 1;
} else {
  a = a + 1;
}

//any js value can be converted into boolean value and some value are always gives false
//we call them falsy values
undefined;
null;
0;
-0;
NaN;
(''); //empty string

//except this everything works as a true boolean value
//we call them truthy value

//AND operator( && )
//OR operator( || )
//NOT operator(!)

if ((x === 0 && y === 0) || !(z === 0)) {
  //x and y are both zero or z is not zero
}

//null and undefined

//1.null shows the absence of a value in type of string,value or an object
console.log(typeof null);

//2.undefined also another keyword to indicate the same as null but deeper kind of absence

//when a function doesnot return anything it returns undefined
//when a variable is not been initialized yet and u trying to return
//undefined is a predefined global constant

console.log(typeof undefined);

//both have slightly different way but still both use interchangably and yes
console.log(null === undefined);
console.log(null == undefined);

//both behave as a falsy value
//as a programmer its ur choice what u want to choose
//better is to go for null.

//+++++++++++++++SYMBOLS+++++++++++++++++++++
//introduced in ES6 to serve as a nonstring property names in object
//no literal syntax of js so yes in ES6 its Symbol()function that helps to create a Symbol data type
//u can simply use Symbol value as  property name

let strname = 'string name';
let symname = Symbol('propname');
console.log(strname);
console.log(symname);

console.log(typeof strname);
console.log(typeof symname);

let o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o);
console.log(o[strname]);
console.log(o[symname]);

//call Symbol() function to return symbol value
//we can definitely use symbol to define property name in an object

let k = Symbol('sym_x');
console.log(k.toString());

let c = Symbol.for('shared');
let d = Symbol.for('shared');
console.log(c === d);
//some Symbol instance methods
console.log(c.toString());
console.log(Symbol.keyFor(d));

//++++++++++++++++THE GLOBAL OBJECT++++++++++++++++++++
//whenever a web browser loads a new page it create a new global object and gives it a initial set of properties that define js object which are globally available and use
//global constant like undefined,infinity and NaN
//global function like isNaN(),parseInt() and eval()
//constructor function like Date(),RegExp(),String(),Object() and Array()
//global object like Math and JSON

//they are not reserved keyword but they are treated like one

//in node its global object and in web browser it window object treated like global object
// console.log(window);

//ES2020 introduced globalThis in web browser to point global object
console.log(globalThis);

//Immutable primitive values and mutable objet references

//since string behave like array and array are object but remember string are still immutable
//and if u perform any method it will return a new string and original string will be intact
let ss = 'hello';
console.log(ss.toUpperCase());
console.log(ss);

//objects
let oo = { x: 1 };
oo.x = 2; //mutate existing value
oo.y = 3; //add new property

let arr = [1, 2, 3];
arr[0] = 0;
arr[3] = 4;

//objects cannot be compared by values
let ooo = { y: 2 };
console.log(oo == ooo); //false

let em = {},
  emp = {};
console.log(em === emp);

//objects data type are also called reference types
//and we call objects as referance
//two objects are same iff they refer the same underlying object

let q = [];
let w = q;
q[0] = 1;
w[0];
console.log(q === w);

//here w doesnot show that it created a new object from q,it simply just referance to it

//to create a new array from the array
let anArr = ['a', 'b', 'c'];
let emptyArr = [];
for (let i = 0; i < anArr.length; i++) {
  emptyArr[i] = anArr[i];
}
console.log(emptyArr);

//ES6 introduced new method to copy an array from given array by using Array.from method
let newArr = Array.from(emptyArr);
console.log(newArr);

//how to compare a function or an array
function equalArrays(a, b) {
  if (a == b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log(equalArrays([10, 15, 20, 25], [10, 15, 20, 25]));
console.log(equalArrays([10, 15, 20, 25], [10, 15, 20, 20]));

//TYPE CONVERSION

console.log(10 + ' objects'); //10 coverted into string
console.log('7' + 4); //4 become string
console.log(4 + '7'); //47
console.log(4 + 9 + '7'); //137
let n = 1 - 'x'; //gives NaN since x cannot be converted into a number value
console.log(n + 'objects');

//Conversion and Equality

//equality and strict equality
console.log(null == undefined);
console.log(null === undefined);
console.log('0' == 0);
console.log('0' === 0);

console.log(0 == false);
console.log('0' == false);

//Explicit Conversion by user
console.log(Number('3'));
console.log(String(false));
console.log(Boolean([])); //true

console.log(String(10));
console.log(toString(10));

//conversion that is handy
console.log(x + ''); //String(x)
console.log(+x); //Number(x)
console.log(x - 0); //Number(x)
console.log(!!x); //Boolean(x) note that double !!

let v = 17;
let binary = '0b' + v.toString(2);
console.log(binary);
let octal = '0o' + v.toString(8);
console.log(octal);
let hex = '0o' + v.toString(16);
console.log(hex);

//toFixed()==>converts a number to a string with a specified number of digit
//toExponential()==>converts a number to a string using exponential notation
//toPrecision()==>show number to a string with the number of significant digit u specify

let digit = 123456.719;
console.log(digit.toFixed(0));
console.log(digit.toFixed(2));
console.log(digit.toFixed(5));
console.log(digit.toExponential(1));
console.log(digit.toExponential(3));
console.log(digit.toPrecision(4));
console.log(digit.toPrecision(7));
console.log(digit.toPrecision(10));

//Note-Number() function takes only floating point or integer and no other literals
console.log(Number('100'));
console.log(Number('100.325'));
// console.log(Number(shdhfsd));

//parseInt() only parse integers while parseFloat() parses both integers and floating point numbers
console.log(parseInt('3 blind mice'));
console.log(parseFloat('3.14 meters'));
console.log(parseFloat('-12.34'));
//if string start with 0x it will be calculate with hexadecimal number
console.log(parseFloat('0xFF'));
console.log(parseFloat('0xff'));
console.log(parseInt('-0xFF'));
console.log(parseFloat('.1'));
console.log(parseInt('0.1'));
console.log(parseInt('.1')); //cant start an integer with .1
console.log(parseFloat('$72.45')); //number cant start with $1

//parseInt() take second argument to specify the radix(base) of the number [values can be take as radix is between 2 to 36]

console.log(parseInt('11', 2));
console.log(parseInt('ff', 16));
console.log(parseInt('zz', 36));
console.log(parseInt('077', 8));
console.log(parseInt('077', 16));

//OBJECT TO PRIMITVE CONVERSION

//Variable declaration and assignment
let i;
console.log(i); //not assigning value declaration gives undefined value to variable
let sum;
let j, minus;
let message = 'hello';
let ij = 0,
  jk = 0,
  kl = 0;

let xx = 2,
  yy = xx * xx;

//const keyword using
const H0 = 74; //hubble constant
const C = 299792.458; //speed of light in vaccum
const AU = 1.496e8; //Astronomical unit:distance to the sun
let dataOne = [1, 2, 3, 4];

let object = {
  a: 10,
  b: 20,
};
for (let i = 0, len = dataOne.length; i < len; i++) console.log(dataOne[i]);
for (let datum of dataOne) console.log(datum);
for (let property in object) console.log(property);

//using const in loops should be avoidable
//only use const when there is no iteration

for (const propety in object) console.log(propety);

for (const datum in data) console.log(datum);

//variable and constant scope

//repeated declaration
const t = 1;
if (t === 1) {
  let t = 2;
  console.log(t); //2
}
console.log(t); //1
// let t = 3; error

//perfectly fine but poor programming
let val = 10;
val = 'ten';

//var and js
var element;
var data = [],
  count = data.length;
for (var qz = 0; qz < count; count++) console.log(data[qz]);

//
var aValue = 10;
console.log(aValue);
console.log(globalThis.aValue); //10

//let and const declared variable are not properties of the global object

{
  var blockValue = 10;
}
console.log(blockValue); //10

//var used frequently in    for loop

for (var initial = 0; initial < 10; initial++) {
  console.log(initial);
}

console.log(hoist);
var hoist = 10;

//Destructuring Assignment

let [one1, two2] = [1, 2];
console.log(one1);
console.log(two2);
[one1, two2] = [one1 + 1, two2 + 1];
console.log(one1); //2
console.log(two2); //3

//swap using destructuring
[one1, two2] = [two2, one1];
console.log(one1); //3
console.log(two2); //2

//function of converting [x,y] cordinates to polar cordinates [r,thetha]

function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

//Converting polar to cartesian coordinates
function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0);
console.log(r, theta);
let [xCord, yCord] = toCartesian(r, theta);
console.log(xCord);
console.log(yCord);

//Object.entries
const objects = { a: 1, b: 2, c: 3 };

const entries = Object.entries(object);

//Object.entries convert into array
console.log(entries);
// Output: [ ['a', 1], ['b', 2], ['c', 3] ]

//another use
let array = { x: 1, y: 2 };

for (const [name, value] of Object.entries(array)) {
  console.log(name, value);
}

//left side variable doesnot assigned
let [ab, bc] = [1];
console.log(ab);
console.log(bc); //shows undefined

//right side value doesnot assigned with a variable
[ab, bc] = [1, 2, 3]; //3 will be ignored

//skip in destructuring
let [, doo, , chaar] = [1, 2, 3, 4];
console.log(doo);
console.log(chaar);

//rest pattern
let [oneValue, ...restValue] = [1, 2, 3, 4];
console.log(oneValue);
console.log(restValue);

//nested arrays
let [aa, [bb, cc]] = [1, [2, 3], 5];
console.log(aa);
console.log(bb);
console.log(cc);

//u can use any iterable object type for destructuring lets see how
let [first, ...second] = 'Hello';
console.log(first);
console.log(second); //create an array by rest operator and insert all ello into an array

//destructuring with object
let transparent = { rg: 0.0, gh: 0.0, hk: 0.0, text: 1.0 };
let { rg, gh, hk } = transparent;
console.log(rg);
console.log(gh);
console.log(hk);

//now sin=Math.sin,cos=Math.cos,tan=Math.tan
const { sin, cos, tan } = Math;

// since pop is not in Math object it will be undefined
const { pop, cot, atan } = Math;

//generally we use the same variable match with the object keyname to destructure but if u want to change the keyname
//here is the syntax

let anArray = { text: '10', number: 10 };

const { text: strings, number: value } = anArray;
console.log(strings); //'10'
console.log(value); //10

//Nested object and destructuring array
let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
console.log(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4); //gives true

//destructuring object of array
let point = { p1: [1, 2], p2: [3, 4] }; //an object with 2 array properties
let {
  p1: [xx1, yy1],
  p2: [xx2, yy2],
} = point;

console.log(xx1 === 1 && yy1 === 2 && xx2 === 3 && yy2 === 4);

//better alternative is
let xxx1 = point.p1[0];
let yyy1 = point.p1[1];


//End of the chapter
