// map()
// does not affect the original array
// gives new array and return statement would be good

var evenNumbers = [2,4,6,8,10];
var names = ['johnny depp','cage','aston','charlie','penny','sheldon'];

var squaRoot = evenNumbers.map((number,index,arr)=>{
    return Math.sqrt(number);
});
console.log(squaRoot); // [ 1.4142135623730951,2,2.449489742783178,2.8284271247461903,3.1622776601683795 ]
console.log(evenNumbers); // [2,4,6,8,10]

var nameChange = names.map((name,index)=>{
        return index+"name";
});
console.log(nameChange); // [ '0name', '1name', '2name', '3name', '4name', '5name' ]
console.log(names); // ['johnny depp','cage','aston','charlie','penny','sheldon']

// VS
// https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
// https://stackoverflow.com/questions/34426458/javascript-difference-between-foreach-and-map

// forEach doesn't return anything but affects the array;
// forEach return statement will gives us undefined
// forEach preferable when we dont want any change in original array
// map gives new array,should have return statement

var foreach = names.forEach((n,i)=>{
    return i+"names";
});

console.log(names); // [ 'johnny depp', 'cage', 'aston', 'charlie', 'penny', 'sheldon' ]
console.log(foreach); // undefined

