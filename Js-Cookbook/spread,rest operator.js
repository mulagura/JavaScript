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

Interview Questions:
For Spread Operator:
Explain the purpose of the Spread Operator (...) in JavaScript. Provide examples of how it's used with arrays and objects.
How do you create a shallow copy of an array using the Spread Operator? What's the benefit of doing this?
Can you merge two arrays using the Spread Operator? If so, provide an example.
Describe a scenario where you might use the Spread Operator to merge objects. What are the advantages of using it in this context?
For Rest Operator:
What is the Rest Operator (...) in JavaScript, and where is it commonly used?
In what context is the Rest Operator typically used, and how does it collect values into an array?
Provide an example of a function that uses the Rest Operator to gather arguments into an array.
How can you work with a variable number of arguments in a function without using the Rest Operator? Compare the two approaches.
By understanding and explaining the differences between the Spread Operator and Rest Operator and demonstrating their practical applications, you'll showcase your knowledge of these important JavaScript concepts during interviews.



In summary, the spread operator is used to split and copy iterables (arrays/objects) or merge them together, 
  whereas the rest operator is used to gather multiple function arguments into a single array. 
  While they both use the `...` syntax, their usage contexts and functionalities are different.


var sumAll = (q,w,e,r,t)=>{
    console.log(q+w+e+r+t);
}

sumAll(...oddNUmbers); // 25

// in es6 arrow funcs are introduced , so apply > sumAll.apply(null,numbers);

          // string to array
let myName = 'Mulagura';
let strToArray = [...myName];
console.log(strToArray); // ["M", "u", "l", "a", "g", "u", "r", "a"]


// rest operator vs arguments object
// 1. arguments are not array but rest is array instance




