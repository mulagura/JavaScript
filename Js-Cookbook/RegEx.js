                           // Regular Expressions

// https://www.w3schools.com/jsref/jsref_obj_regexp.asp                           

// describes a pattern of characters                           
// are used to perform "pattern-matching" and "search-and-replace" functions on text
// In JavaScript, regular expressions are often used with the two string methods: search() and replace().
// syntax: /pattern/modifiers;

/* modifiers: i -> Perform case-insensitive matching
              g -> Perform a global match (find all matches rather than stopping after the first match)
              m -> Perform multiline matching
 */

/* Brackets: [abc]  -> 	Find any character between the brackets
             [^abc] ->  Find any character NOT between the brackets
             [0-9]  ->  Find any character between the brackets (any digit)
             [^0-9] ->  Find any character NOT between the brackets (any non-digit)
             [x|y]  ->  Find any of the alternatives specified              
 */

/* metacharcters:  . -> Find a single character, except newline or line terminator (eg. /h.t/g) = hot,hat
                  \w -> Find a word character, 
                        A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
                        /\w/gi (eg, 'give me 100% ! = g,i,v,e,m,e,1,0,0)
                  \W -> Find a non-word charcter, /\w/gi (eg, 'give me 100% = %,!)
                  \d -> Find a digit
                  \D -> Find a Non-Digit

 */ 

 /* Qunatifiers:  + -> 	Matches any string that contains at least one
                  * ->  Matches any string that contains zero or more occurrences 
                  ? ->  Matches any string that contains zero or one occurrences 
  
  */

let str = 'Mark-9 Tim-890 Sam-10 Sara-9902'; // 9, 890, 10, 9902
let regex = /\d+/gi;
console.log(str.match(regex).join()); // 9,890,10,9902

let str2 = '908ABC12XYZ34'; // 908, 12, 34
let regex2 = /\d+/gi;
console.log(str2.match(regex2).join()); // 908,12,34

let str3 = '$1 $2 $901 ABC(100)'; // 1, 2, 901, 100
let regex3 = /\d+/gi;
console.log(str3.match(regex3).join()); // 1,2,901,100

let str4 = 'my mark is perfect,but markers are bad'; // mark
let regex4 = /mark/gi;
let regex44 = /\bmark\b/gi; // \b -> word boundary
console.log(str4.match(regex4).join()); // mark,mark
console.log(str4.match(regex44).join()); //mark

/* /\d\d\d\d/gi -> 4 digit mkatch like 1234,5678,9012
   /\b\d\d\d\d\b/gi -> exactly 4 digit numbers

   or /\b\d{4}\b/gi or /\b[0-9]{4}\b/gi

   /\b[a-zA-Z]{4}\b/gi -> abcd,ball,cats,dogs,Host,iTim

 */

// JS string methods used in regex, 1.match() 2.search() 3.replace() 4.split() 

let mobileNo = 9293752456;
let mobileRegex = /\b^[6-9]\d{9}\b/gi; // ^ Match the beginning of the string 

console.log(mobileNo.toString().replace(mobileRegex,'xxxx')); // xxxx

