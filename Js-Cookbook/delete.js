// delete

// The delete keyword deletes both the value of the property and the property itself.
// The delete operator is designed to be used on object properties. 
  //It has no effect on variables or functions.
// The delete operator should not be used on predefined JavaScript object properties.
   //It can crash your application.  

// When you delete an array element, the array length is not affected. 
   //This holds even if you delete the last element of the array.   


var sports = {
    name:'badminton',
    category:'costly',
    audience:'medium'
};

console.log(sports.audience); // medium
console.log(delete sports.audience); // true
console.log(sports.audience); // undefined

const pc = ['lenovo','dell','hp','vaio','msi'];

console.log(pc[4]); // msi
console.log(delete pc[3]); // true
console.log(pc); //  ["lenovo", "dell", "hp", empty, "msi"]
// length does not affect
