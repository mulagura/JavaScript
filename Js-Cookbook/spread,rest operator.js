// spread vs rest operator

The main difference between the spread operator and the rest operator lies in their use cases and how they manipulate data:

**Spread Operator:**
- Use: The spread operator is used to split an iterable (like an array or a string) into individual elements.
- Syntax: It is represented by `...`.
- Use Cases:
  - Copying: You can create a shallow copy of an array or an object without modifying the original.
  - Merging: You can combine multiple arrays or objects into a new one.
- Example with Arrays:
  ```javascript
  const originalArray = [1, 2, 3];
  const newArray = [...originalArray];
  ```
- Example with Objects:
  ```javascript
  const originalObject = { name: 'John', age: 30 };
  const copiedObject = { ...originalObject };
  ```

**Rest Operator:**
- Use: The rest operator is used to collect multiple elements and combine them into an array.
- Syntax: It is also represented by `...`, but in this context, it is used in function parameters to gather arguments into an array.
- Use Cases:
  - Function Arguments: You can accept an arbitrary number of function arguments and process them as an array.
- Example in Function Parameters:
  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  sum(1, 2, 3, 4); // Returns 10
  ```

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




