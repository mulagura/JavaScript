// isNaN();
//  isNaN() function determines whether a value is an illegal number (Not-a-Number).
// This function returns true if the value equates to NaN. Otherwise it returns false.

// The function isNaN(x) attempts to convert the passed parameter to a number
   //(equivalent to Number(x)) and then tests if the value is NaN


console.log(isNaN(100)); // false
console.log(isNaN(-100)); // false
console.log(isNaN('100')); // false
console.log(isNaN('100a')); // true
console.log(isNaN(true)); // false
console.log(isNaN(undefined)); // true

console.log(isNaN(null)); // false

console.log(isNaN('')); // false
console.log(isNaN(0/0)); // true
console.log(isNaN(0*0)); // false

// The Number.isNaN() method determines whether the passed value is NaN and its type is Number. 
   //It is a more robust version of the original, global isNaN().

console.log(Number.isNaN(100)); // false
