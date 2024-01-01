//+++++++++++++++++++TYPES,VALUES AND VARIABLES+++++++++++++++++//

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
     ..function and classes as they are not boolean,numbers or string they are simply object type
     ..supports oops
     ..mutable(you can change object type values)


   ///
   ...js liberally chnge one type to another if its necessary means if a progamme expect a string
      it will convert a passed number type to string type
   ..we use const keyword to define constant
   ..we use let(or var before ES6) to define variable
   ..js constant and variable are untypes means declaration doesnot define the type of value u storing/

   //NUMBERS
   ..We can numbers in js as number literal
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
console.log("hi" / "vy");
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
console.log(Number.parseInt("10"));
console.log(Number.parseInt(10));

//2
console.log(Number.parseFloat("10.001"));
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.1037491"));

//3 isNaN==>tell whether it is not a number or not
console.log(Number.isNaN(10));
console.log(Number.isNaN(1));
console.log(Number.isNaN(Infinity / Infinity));

//4.
console.log(Number.isFinite(x));
console.log(Number.isFinite());

//5.
console.log(Number.isInteger(100));
console.log(Number.isInteger("100"));

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
console.log("STRING" == NaN);
console.log(
  "anything here doesnot equal to Not a number including NaN Itself" == NaN
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

let string = "1" + "0".repeat(100);
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
(""); //string with zero characters
("testing");
("3.14");
("name=myOne");
("hi,this is yogesh on 1st day of 2024");
("she said 'hi' to me");
`she said 'hi' to me ,using backtics or template literals`;
