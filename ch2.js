//+++++++++++++++++Lexican structure+++++++++++++++++++++++++//

/*
...js is a case sensitive language
...js ignores spaces and line breaks
...it has space character(\u0020)
...recognises tabs,ASCII control characters and various unicode space characters
..also recognise new lines,carraige returns and carriage return and line feed
*/

//comments
//single line comment
/*
..multi line comment
*/

//++++++++++++Literals++++++++++++++++++++++++++++++++++++++++
//basically the data value is literal ,we use data value directly in our programmes
//these are some of the literals we gonna use in our programming
12;
1.2;
("hello world");
("hi");
true;
false;
null;

//+++++++++Identifier and reserved words+++++++++++++++++++++++++++++++++
/*
//identifier is simply a name ==> in js we use to name constant ,variables,properties,functions and classes and to provide labels for certain loops in jscode

Convention to write identifier
  1.start with letters,underscore and dollar sign(cant use digit as first letter)
  2.subsequent characters can be letters,digits,underscore or dollar  

//note-- u cant use reserved keywords in js as an identifier
*/

i;
my_variable_name;
v13;
_dummy;
$str;
// %percentage; its wrong
// 67sixtyseven is wrong

//++++++++++++UNICODE++++++++++++++++++++++
//js supports unicode character set and u can use any unicode characters in string and comments

//unicode escape sequence
//syntax is \uXXXX

console.log(é); //here we use \u00e9 to write this character

//earlier js only support four digit escape character but now its worth mentioning that post ES6 update it become 16 bit unicode friendly so we can say that we can now use emoji is js now

//unicode Normalization
//see unicode like é can be written as by using \u00e9  or ASCII Character of e and cute accent by using \u0301
// console.log(e\u0301) gives same  é
//now js take both as a different entity and this created problem so that why unicode normalisation becomes important to avoid these things
//how to do unicode normalisation===> use such editors which support normalisation

//++++++++++++++++Optional semicolons++++++++++++++++++++
// ; to seperate statements basically
//when to omit ;===>if you write a code in new line,if you using {},

a = 5;
b = 6;

/*
//its also fine
a= 5; b = 6;

//this one also fine
a 
= 
5;
not evry line break means to be different statemnt until and unless u use a semicolon


//this is different
a;
=;
b;


//but 
let a
a
=
3 
is read by js as
let a; a=3;

//See this code
 let y=x+f
 (a+b).toString()

 //It read by js as
let y=x+f(a+b).toString()
 ..hence we need explicitely the semicolon to show that a statment is concluded



//here is another way called defensive 
let x=0
;[x,x+1,x+2].forEach(console.log) //used semicolon to be defensive that statement is seperated


//three exception in our optional semicolon learning


//First exception
using these keywords 
1.return
2.throw 
3.yield
4.break
 
//see this code
return 
true; 
//js meant as a
return; true;
//not
return true;

since after return js doesnot execute anything
same cases with other 3 words


//if u want return true; dont use break
return true; 
is right and not
return 
true;


//2nd exception is ++ and --
// use ++ or -- prefix of an expression 
//
++5; is what i meant
dont do
++
5;


//3rd exception is arrow syntax =>
dont make this syntax in another line otherwise it doesnot support.
*/
