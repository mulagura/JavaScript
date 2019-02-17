                                // spread opearator

// allows an iterable such as an array expression or string to be expected in places 
  //where zero or more arguments or elements or object expression expected


// For function calls: myFunction(...iterableObj);

const oddNUmbers = [1,3,5,7,9];

function sum(a,b,c,d,e){
    return a+b+c+d+e;
}

console.log(sum(...oddNUmbers)); // 25

var sumAll = (q,w,e,r,t)=>{
    console.log(q+w+e+r+t);
}

sumAll(...oddNUmbers); // 25

// in es6 arrow funcs are introduced , so apply > sumAll.apply(null,numbers);

          // string to array
let myName = 'Mulagura';
let strToArray = [...myName];
console.log(strToArray); // ["M", "u", "l", "a", "g", "u", "r", "a"]


// For array literals or strings: [...iterableObj, '4', 'five', 6];

let cities = ['Bengaluru','Chennai','Mumbai','Delhi'];
let all = ['Chittoor','palamaneru','Madanapalle',...cities];
console.log(all); // ["Chittoor", "palamaneru", "Madanapalle", "Bengaluru", "Chennai", "Mumbai", "Delhi"]


// For object literals (new in ECMAScript 2018): let objClone = { ...obj };     

let obj1 = {a:1,b:2};
let duplicate = {...obj1}; 
console.log(duplicate); // {a: 1, b: 2}
let duplicate2 = obj1;  // its not a copy , its just a reference
console.log(duplicate2); // {a: 1, b: 2}

        // rest operator

// allows us to represent an indefinite number of arguments as an array.

const movies = ['aravainda','simhadri','yamadonga','temper'];

var showMovies = (...list)=>{
    console.log(list);
};
showMovies(movies); // [Array(4)]

var onePlus = (...num)=>{
    console.log(num);
};
const evenNumbers = [2,4,6,8];
onePlus(...evenNumbers); // (4) [2, 4, 6, 8]

// A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) 
   //arguments to be placed within a "standard" javascript array. Only the last parameter can be a "rest parameter".

function hoo(a,...args){
    console.log(args); // ["b", "c", "d", "e", "f", "g", "h"]
}

hoo('a','b','c','d','e','f','g','h');

// rest operator vs arguments object
// 1. arguments are not array but rest is array instance




