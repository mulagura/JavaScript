// How to check whether variable is array or not

const a = {name:'Ram'};
const b = [92,87,76,94,92,99];

console.log(typeof a,typeof b); // object object

//Method 1

if(b instanceof Array){
    console.log('yeah its an array');
}

//Method 2

console.log(Array.isArray(b)); // true



