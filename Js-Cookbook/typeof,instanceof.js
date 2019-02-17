//typeof
// typeof is an operator that returns a string with the type of whatever you pass.

console.log(typeof 24); // number
console.log(typeof true); // boolean
console.log(typeof [1,22]); // object
console.log(typeof ram); // undefined
console.log(typeof function foo(){}); // function

let num = typeof 456;
console.log(typeof num); //string; typeof 456 is number; and typeof typeof is string always

//instanceof
// it works on the level of prototypes
// instanceof doesn’t work with primitive types
// The instanceof operator tests 
   //whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

   function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  var auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // expected output: true
  
  console.log(auto instanceof Object);
  // expected output: true
  
