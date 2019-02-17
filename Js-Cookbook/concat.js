// concat()
// merges two or more arrays and returns new array; doesn;t affect the original array

// array concatination
var a = [2,4,6,8];
var b = [1,3,5,7];

var c = a.concat(b); //    [ 2, 4, 6, 8, 1, 3, 5, 7 ]
var d = [].concat(a,b); // [ 2, 4, 6, 8, 1, 3, 5, 7 ]

console.log(c);
console.log(d);

// strings concatination
var str = 'Mulagura';

var e = str.concat("Ram");
console.log(e); // MulaguraRam

// objects concatination
// https://stackoverflow.com/questions/2454295/how-to-concatenate-properties-from-multiple-javascript-objects

var obj1 = {a:'apple'};
var obj2 = {b:'ball'};

//var f = obj1.concat(obj2); //  obj1.concat is not a function
//console.log(f);

// for object concatination use Object.assign() or spread operator;

//Object.assign({},obj1,obj2,...);
var g = Object.assign({},obj1,obj2);
console.log(g); // { a: 'apple', b: 'ball' }

// spread operator {..obj1,...obj2}
var h = {...g, ...obj1, ...obj2,...{c:'cat'}}; // duplicates are removed automatically
console.log(h); // { a: 'apple', b: 'ball', c: 'cat' }



var name = 'Mulagura Ram';

var fullName = [].concat(name);
console.log(fullName); // [ 'Mulagura Ram' ]

var wholeName = name.concat(['Venkata',123,{id:799,age:true}]); // typeof == String
console.log(wholeName); // Mulagura RamVenkata,123,[object object] 





