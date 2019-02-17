              // Math() object

// Math is a built-in object that has properties and methods for mathematical constants and functions. 
// Not a function object              
// Unlike the other global objects, Math is not a constructor

//properties

console.log(Math.PI); //3.141592653589793
console.log(Math.LOG10E); //0.4342944819032518


//methods

// max,min,pow,random
console.log(Math.max(100,3,5,3,5,4454,4,5)); //4454
console.log(Math.min(0,0.00001,0.000000000001)); // 0

const NUMBERS = [1,5,100,0.05];
console.log(...NUMBERS); // 1 5 100 0.05
console.log(Math.min(...NUMBERS)); // 0.05

// Math.pow() function returns the base to the exponent power, that is, baseexponent

console.log(Math.pow(2,2)); // 4
console.log(Math.pow(123,0.0567)); //1.3137042950917506

// ceil : The Math.ceil() function returns greater than or equal to a given number.
         console.log(Math.ceil(0.9)); // 1
         console.log(Math.ceil(1.001)); // 2
         console.log(Math.ceil(-7.0023)); // -7
             
// floor : The Math.floor() function returns lesser or equal to a given number.
          console.log(Math.floor(0.9)); // 0
          console.log(Math.floor(1.001)); // 1
          console.log(Math.floor(-7.0023)); // -8
              
// round : The Math.round() function returns the value of a number rounded to the nearest integer.
           console.log(Math.round(0.9)); // 1
           console.log(Math.round(1.00123)); // 1
           console.log(Math.round(0.5)); // 1
           
// The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1)
            console.log(Math.random()); // 0.6809970125733167
    // numbers between 0-1
            console.log(Math.round(Math.random())); // 1
    // numbers between 0-10
            console.log(Math.round (Math.random() * 10) ); // 9
    // numbers between 1-10
            console.log(Math.floor( Math.random() * 10) +1 ); // 10
