https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/

A let or const variable is said to be in a "temporal dead zone" (TDZ) 
from the start of the block until code execution reaches the line where the variable is declared and initialized. 
While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError

eg:

 {
 // tdz
  // tdz
  console.log(a); // ReferenceError
  // but if we use var, it will be undifined, becaus of hoisting
  // let and const can't / dont have hoisting
  let a;
  console.log(a); // undefined
}
