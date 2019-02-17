                                         // null and undefined
// null   
// null means nothing, void or emptiness
// assigned value represents no value.
// null has to be set intentionaly,           
// The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values                        
console.log(null+10); // 10
console.log(null -1); // -1
console.log(null * 18); // 0
console.log(null / 10); // 0

console.log(null+'Ram'); // nullRam
console.log('Ram'+null); // Ramnull

console.log(typeof null); // object

console.log(null == undefined); // true
console.log(null === undefined); // false



// undefined
// variable has been declared but value not yet assigned.
// functions with no return statement will return undefined by default,
// The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types
console.log(undefined+1); //NaN
console.log(undefined -1); //NaN
console.log(undefined *2); //NaN
console.log(undefined/ 2); //NaN

console.log(undefined+'Mulagura'); //undefinedMulagura
console.log('Mulagura'+undefined); //Mulaguraundefined

console.log(typeof undefined); // undefined
