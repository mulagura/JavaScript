// spread vs rest operator

The main difference between the spread operator and the rest operator lies in their use cases and how they manipulate data:

Spread Operator (...) and Rest Operator (...) are two closely related concepts in JavaScript. 
They both use the same syntax (...), but they serve different purposes depending on where they are used.

Spread Operator (...)
The Spread Operator is used to expand an array, object, or string into individual elements or key-value pairs. 
  It's typically used to create a shallow copy of an array or object and can be used for 
     cloning, merging, or spreading the elements of one data structure into another.

Arrays:
const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // Shallow copy
const combinedArray = [...originalArray, 4, 5]; // Merge arrays

Objects:
const originalObject = { a: 1, b: 2 };
const copyObject = { ...originalObject }; // Shallow copy
const mergedObject = { ...originalObject, c: 3, d: 4 }; // Merge objects

Rest Operator (...)
The Rest Operator is used in function parameters to gather remaining arguments into an array. 
  It collects multiple values into a single array, making it easier to work with variable-length argument lists.

Function Parameters:
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Outputs: 6


In summary, the spread operator is used to split and copy iterables (arrays/objects) or merge them together, 
  whereas the rest operator is used to gather multiple function arguments into a single array. 
  While they both use the `...` syntax, their usage contexts and functionalities are different.


// in es6 arrow funcs are introduced , so apply > sumAll.apply(null,numbers);

          // string to array
let myName = 'Mulagura';
let strToArray = [...myName];
console.log(strToArray); // ["M", "u", "l", "a", "g", "u", "r", "a"]


// rest operator vs arguments object
// 1. arguments are not array but rest is array instance




