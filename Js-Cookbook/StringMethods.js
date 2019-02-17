         //all methods does not affect since  "JavaScript strings are immutable".

let str = 'Ram';
let str2 = 'Mulagura';
let strLength = str.length;
let str2Length = str2.length;

                          // charAt(); 
//method returns first occurance of character in a string and returns new string, 
//should pass integer between 0 and less than the length of string, 
//if not number or not passed then default is 0,
//if index is out of range or exceeds length of string then it will be empty string 

let charAtposition10 = str.charAt(2); 
let defaultPosition0 = str.charAt(); 
let lastCharacter = str.charAt(strLength-1); 
let indexOutOfRange = str.charAt(strLength); 
console.log(charAtposition10);
console.log(defaultPosition0);
console.log(lastCharacter);
console.log(indexOutOfRange);


                          // charCodeAt();
//method returns integer between 0 and 65535 representing UTF-16,
// A-Z (65-90), a-z(97-122)
//should pass integer between 0 and less than the length of string, 
//if not number or not passed then default is 0,
//returns NaN if the given index is less than 0 or is equal to or greater than the length of the string

let charCodeAt10 = str.charCodeAt(2);
let defaultCharCodeAt = str.charCodeAt();
let lastCharCodeAt = str.charCodeAt(strLength-1);
let charCodeAtOutOfRange = str.charCodeAt(strLength);

console.log(charCodeAt10);
console.log(defaultCharCodeAt);
console.log(lastCharCodeAt);
console.log(charCodeAtOutOfRange);

                     //fromCharCode();
//converts AsCII to string values,
//syntax is always String.fromCharCode(),
//if nothing is passed then it will be empty string

let convert = String.fromCharCode(119);
let setOfASCII = String.fromCharCode(112,66,101);
let defaultfromCharCode = String.fromCharCode();
console.log(convert);
console.log(setOfASCII);
console.log(defaultfromCharCode);

// for(let i=0;i<=65535;i++){
//     console.log(i + ''+ ':'+ String.fromCharCode(i));  
// }


// let lang = "中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ் עברית";

// console.log(lang.charCodeAt(30));


                               //concat();
//concatinates two strings and returns new string,
//If the arguments are not of the type string, they are converted to string values before concatenating,
//Performance: It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method. 

let concateTwoStrings = str.concat(str2);
let concateempty = ''.concat("Hello Mr.");
let concatNonString = str2.concat(123,45);
let concateObject = ''.concat({});
console.log(concateTwoStrings);
console.log(concateempty);
console.log(concatNonString);
console.log(concateObject);

                          //startsWith(searchString,position);  
//returns whether that string starts with given string or not
//true or false
//case-sensitive
//by default position is 0

console.log('I am not a fool'.startsWith('I'));
console.log('sa ri ga ma padanisa'.startsWith('r',3));


                         //endsWith();
//returns whether that string ends with given string or not
//true or false
//case-sensitive
//by default position is 0

let ends = str.endsWith('m');
let ends2 = str2.endsWith('ra',10);
console.log(ends);
console.log(ends2);


                      //includes(searchString,index);
//returns true if the searchString is found anywhere within the given string; otherwise, false
//The position within the string at which to begin searching for searchString. (defaults to 0).
//by default the position is 0
//case-sensitive

let doesStringIncludes = str.includes('Oranges');
let anotherStringIncludes = 'Hi i am Cortona'.includes('am');
console.log(doesStringIncludes);
console.log(anotherStringIncludes);
console.log(`${str.includes('Grapes')?'yes':'no'} a citrus fruit`);


                    //indexOf(searchValue,index);
//returns the index first occurrence of the specified value, starting the search from Index. 
//Returns -1 if the value is not found.
//An integer representing the index at which to start the search; the default value is 0. 
//For Index values lower than 0 or greater than str.length, the search starts at index 0 and str.length respectively.

let findIndex = str2.indexOf('Mul');
let findIndexWithIndex10 = str2.indexOf('Mula',1)
console.log(findIndex);
console.log(findIndexWithIndex10);

                      //lastIndexOf(searchValue,index)
//returns last occurance of specified string,searching backwards from index
//Returns -1 if the value is not found.
//If searchValue is an empty string, then length is returned
//The index of the last character in the string to be considered as the beginning of a match. 
//The default value is +Infinity.If Index >= str.length, the whole string is searched. 
//If Index < 0,  the behavior will be the same as if it would be 0.

let findLastIndex = str2.lastIndexOf('a');
let findLastIndex2 = 'Good Boy'.lastIndexOf('o',0);
let searchEmptyString = 'javascript'.lastIndexOf('');
console.log(findLastIndex);
console.log(findLastIndex2);
console.log(searchEmptyString);

// console.log([1,2,3].indexOf(2));

                            //match(regexp);
//retrieves the matches when matching a string against a regular expression.
//If you don't give any parameter and use the match() method directly, you will get an Array with an empty string:[""].

let regExpression = /[A-Z]/g;
console.log('JavaScript'.match(regExpression));
console.log('Apple'.match());

                              //repeat();
//constructs and returns new string of number of copies provided

console.log('TTD'.repeat(5));


                   //replace(regexp|substr, newSubstr|function);
//returns a new string with some or all matches of a pattern replaced by a replacement. 
//The pattern can be a string or a RegExp,
// If pattern is a string, only the first occurrence will be replaced

//g = global, match all instances of the pattern in a string, not just one
//i = case-insensitive (so, for example, /a/i will match the string "a" or "A".

let regEx = /Fruits/gi;

console.log('Fruits are good to helath and Fruits are awesome'.replace(regEx,'Vegetables'));
console.log('I love Banana and Banana milk-shake'.replace('Banana','Apples'));


                       //search(regexp);
//executes a search for a match between a regular expression and this String object.
//The index of the first match between the regular expression and the given string; if not found, -1.
//If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).

let regexOfAtoZ = /[A_Z]/g;
let regexOfDot = /[.]/g;
console.log('wanna start a RAP'.search(regexOfAtoZ));
console.log('wanna start a RAP'.search(regexOfDot));

                        //slice(beginINdex,endIndex);
//extracts section of a string and returns new string
//slice() extracts up to but not including endIndex
//If negative, it is treated as strLength + beginIndex / endIndex
//If endIndex is omitted, slice() extracts to the end of the string
//if greater than length then empty string
//If begin and end are equal or begin is greater than end, slice gives empty string.
//If either argument is NaN, it is treated as if it were 0.

console.log('My name is what?'.slice(3,7));
console.log('Ram'.slice(5));
console.log('Hey Ram'.slice(0,-3));// here lastIndex = length-3 = 4;
console.log('Mulagura Ram'.slice(-3,-1)); // here neginIndex = length-3 = 9
console.log('I wannna wanna fly'.slice(100)); //slices whole and length will be 0
console.log('Hello guru prema'.slice(2,2)); //slices whole and length will be 0
console.log('Gali chirugali'.slice(4,1)); // slices whole and length will be 0
console.log('Cheppave cheli'.slice(2,NaN)); //Nan treated as 0 and slices whole and length will be 0


                        //split(separator,limit);
//splits a String object into an array of strings by separating the string into substrings and returns new array,
// it uses a specified separator string to determine where to make each split
//When the string is empty, split() returns an array containing one empty string

console.log('andala aada bomma enta bagundi muddu gumma'.split(' '));
console.log('nuvu whistle este andhra soda buddi'.split(' ',3));
console.log('paduta teeyaga'.split(''));
console.log('friday/saturday/sunday'.split('/'));
console.log(''.split()); //array with empty string; [""]
console.log(''.split('')); //empty array


                           //toLowerCase();
//returns all string to lower case
console.log('Hey dude sup?'.toLowerCase());
console.log('123'.toLowerCase());

                           
                           //toUpperCase();
//returns all string to upper case
console.log('Bengaluru'.toUpperCase());
                           
                           //trim(); 
//removes whitespace from both ends of a string.
// Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) 

let stringTrim = '    Nuvve kavali          ';
let stringTrim2 = '  Nuvve kavali    yemantave';
console.log(stringTrim);
console.log(stringTrim.trim());
console.log(stringTrim2);
console.log(stringTrim2.trim());

