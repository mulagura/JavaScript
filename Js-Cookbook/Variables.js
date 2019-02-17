                                 // variables ( var, let, const )
                               
// const variableName;  
   // use const when variable value does not need to be changed.

   // const are immutable for primitive values ; mutable for non-primitive values like objects, array type objects.

   const BIKE = {
    make:'suzuki',
    model:'gixxer sf',
    cc:160
};

BIKE.cc = 154;

console.log(BIKE); // 154

const YEARS = [2010,2012,2014,2015,2016,2018];
YEARS.forEach((year,index,arr)=>{
        if(year === 2014){
            YEARS[index] = undefined;
        }
});

console.log(YEARS); //   [2010, 2012, undefined, 2015, 2016, 2018]


   // But you can NOT reassign a constant object:
   // But you can NOT reassign a constant array:
   // For objects and arrays it can't be reassigned, but the contents can be changed 
   // const cannot be redeclared;

   const Z = 'I Love Amul';
   /* Z = 'I dont love anymore';
   console.log(z); // Assignment to constant variable  
   const Z = 220;
   console.log(Z); // dentifier 'Z' has already been declared */
 
   const CAR = {
       make:'skoda',
       model:'rapid',
       budget:10
   };
 
   /* const CAR = {};
   console.log(CAR); // Identifier 'CAR' has already been declared */

   //const PI = 3.14;
//      PI = 3.15;
//console.log(PI); // Uncaught TypeError: Assignment to constant variable 

  
   
   // JS primitives are always immutable though. Whether you use const or not doesn't affect that

   // unlike var; Variables defined with const are not hoisted to the top.

    /*  BIKE_NAME = "Honda";    // You can NOT use BIKE_NAME here
const BIKE_NAME = "Honda";
console.log(BIKE_NAME); // Uncaught ReferenceError: BIKE_NAME is not defined  */ 


   // A const variable cannot be used before it is declared
   // const scope is defined as 'block scoped'
   // convention is to use all-uppercase letters
   // Global constants do not become properties of the window object, unlike var variables.
   // An initializer for a constant is required;  you must specify its value in the same statement in which it's declared



carName = "Volvo";  
var carName;
console.log(carName); // Volvo



// let is block scoped like const

// let cannot be accessed before declaration 
// let cannot be redeclared.
// let can be reassigned
let y = 'Mulagura';
y = [{a:10},25];
console.log(y); //  [{…}, 25]
/* let y = 55;
console.log(y); // Identifier 'y' has already been declared  */


// At the top level of programs and functions,
   // let, unlike var, does not create a property on the global object

   var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefine


//var vs let;

 /* for(var i = 0; i<10; i++) {
    console.log(i);  // 0 1 2 3 4 5 6 7 8 9
  }
  console.log(i) // 10

  for(let j = 0; j<10; j++) {
    console.log(j);   // 0 1 2 3 4 5 6 7 8 9
  }
  console.log(j);  // Uncaught ReferenceError: j is not defined */

  // var variableName; -> declaration
  //     variableName = 'Mulagura';  -> initialize or Assignment
  
  var x = 10;
  var x = 'ram';
  console.log(x); // ram

    
  // var is function scoped
