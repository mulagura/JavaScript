var names = ['ram','mulagura','venkata','venkat','amit','subramanyam'];

let namesLength = names.length; 

//increment
for(let i=0;i<namesLength;i++){
    console.log(names[i]);
    
}

//decrement
for(let j=namesLength-1;j>=0;j--){
console.log(names[j]);

}

// console.log(i);

var log = [foo(),boo()]; 

function foo(){
    console.log("i am foo");
    
}

function boo(){
    console.log("i am boo");
    
}

console.log(log);


var temp = log.push("unnamed");

console.log(temp);

var temp1 = log.unshift("noname");

console.log(temp1);


var temp2 = log.pop();

console.log(temp2);
console.log(log);

// push and unshift return new length
//pop and shift return poped item only

//splice returns array containing deleted elements; if no element is removed it returns empty array

//Array.splice(startingIndex,deletecount,..items to be added);

var fruitArray = ["apple", "peach", "orange", "lemon" ,"lime", "cherry"]; 
var splice1 = fruitArray.splice(2, 0, "melon", "banana");
console.log(splice1);
console.log(fruitArray);

var splice2 = fruitArray.splice(3); // remove all elments from index 3
console.log(splice2);  // [ 'banana', 'orange', 'lemon', 'lime', 'cherry' ]
console.log(fruitArray);  // [ 'apple', 'peach', 'melon' ]

var splice3 = fruitArray.splice(0); // remove all from 0
console.log(splice3); //  [ 'apple', 'peach', 'melon' ]
console.log(fruitArray); // []

// slice returns shallow copy of removed elements; does change the original array
//Array.slice(begin,end) // end not included while slicing

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

var slice1 = fruits.slice(0,2);
console.log(slice1); // ['Banana', 'Orange']
console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

var slice2 = fruits.slice(undefined); // if undefined it takes as 0 and slice from 0 to end
console.log(slice2); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']


// for in loop
// for(var book in bookObj){}
// https://alligator.io/js/for-of-for-in-loops/

// for of VS for in
// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements-in-jav

var bookObj = {
    name:'Man who sold his ferrari',
    author:'unknown',
    tag:'must read',
    price:150,
    isAvailable:true,
    awards:['oscar','best seller','its now or never']
};

console.log(typeof bookObj.awards);
console.log(typeof bookObj.isAvailable);
console.log(Array.isArray(bookObj.awards)); // to check array or not  Array.isArray(obj);
console.log(bookObj["tag"]); // must read


for(var book in bookObj){

    console.log(book); // name author tag price isAvailable awards
    console.log(typeof book); // string
    console.log(book.length); // lengths of keys/lables : 4 6 3 5 10 6

    var inLine = '';
    inLine = inLine + bookObj[book];
    console.log(inLine); // Man who sold his ferrari unknown must read 150 true oscar best seller its now or never
    
    console.log(bookObj[book].length); // 24 7 9 undefined undefined 3
    
}

// for(var BUK of bookObj){
//     console.log(BUK); //  bookObj is not iterable
// }

var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

for(var day of days){
    console.log(day); // Monday Tuesday Wednesday Thursday Friday Saturday Sunday
}

// JS is case-sensitive ; all keywords, variables, function names, and any other identifiers

for(var DAY in days){
    // keys/lables will get in for in loop
    console.log(DAY); // 0 1 2 3 4 5 6
}

var anotherObj = {
    '0':'hii',
    1:'hello',
    $:'bonjour',
    _:'namste'
};

//console.log(anotherObj.0); // error
//console.log(anotherObj.1); // error
console.log(anotherObj.$); // bonjour
console.log(anotherObj._); // namste



// Dot Notation vs Bracket Notation
// When working with dot notation, property identifies can only be alphanumeric (and _ and $). 
   //Properties can’t start with a number.
// When working with bracket notation, property identifiers only have to be a String
// https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781   


// to find string length
// var str = "Mulagura";
// console.log(str.length); // 8

// to find number length
// var num = 7200350360.2
// console.log(num.toString().length); // 12







