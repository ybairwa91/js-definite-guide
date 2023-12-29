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

