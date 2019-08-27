                            // Execution Context

//  https://stackoverflow.com/questions/9384758/what-is-the-execution-context-in-javascript-exactly
// https://www.youtube.com/watch?v=QyUFheng6J0&list=PLUw808JhbZ_00NkLbwKkoKvke8QDjO-3d&index=1
// https://www.youtube.com/watch?v=jTGb4t31vCY


b();
console.log(a);

var a = "Hello World!";
function b(){
    console.log("Called b!");
}

// Called b!
// undefined


let abba = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');

// Inside first function
// Inside second function
// Again inside first function
// Inside Global Execution Context

let person = {
    name: 'peter',
    birthYear: 1994,
    calcAge: function() {
      console.log(2018 - this.birthYear);
    }
  }
  person.calcAge();  // 24
  // 'this' refers to 'person', because 'calcAge' was called with //'person' object reference
  let calculateAge = person.calcAge;
  calculateAge();  // NaN
  // 'this' refers to the global window object, because no object reference was given
