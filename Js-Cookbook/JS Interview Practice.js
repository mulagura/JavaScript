// https://www.maxpou.fr/js-exercises-explained
// https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-%28written-by-a-Frontend-Engineer%29
// https://github.com/h5bp/Front-end-Developer-Interview-Questions
// https://github.com/khan4019/front-end-Interview-Questions
// https://github.com/kennymkchan/interview-questions-in-javascript
// https://www.toptal.com/javascript/interview-questions
// https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z
// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
// https://www.interviewcake.com/javascript-interview-questions


// 1. Write a function that will loop through a list of integers
   // and print the index of each element after a 3 second delay. 

(function printIndex(){
    for(let i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },3000);
    }
})();

/*or */

(function printIndex(){
    for(var i=0;i<10;i++){
        function display(j){
            setTimeout(()=>{
                console.log(j);
            },3000);
        }
        display(i);
    }
})();

// 2. I want this code to log “hey amy”, but it logs “hey arnold” - why?

function greet (person) {
    if (person == { name: 'amy' }) {
      console.log( 'hey amy');
    } else {
        console.log( 'hey arnold');
    }
  }
  greet({ name: 'amy' });
// Here the problem is the following: { name: 'amy' } != { name: 'amy' }. 
  //When comparing two objects with equality or strict equality, 
  //JavaScript gonna compare the related internal references. 
  //Here, these two objects have the same properties and the same value. 
  //But in memory, this is 2 different objects.  
 
  function greet (person) {
    if (person.name === 'amy') {
      return 'hey amy'
    }
    return 'hey arnold'
  }
  greet({ name: 'amy' }) // "hey amy"

// 3. I want this code to log out “doggo”, but it logs out undefined!  
let dog = {
    name: 'doggo',
    sayName () {
      return this.name;
    }
  }
  let sayName = dog.sayName
  console.log(sayName()); // undefined
  // we need to bind the dog the context on it
  console.log(sayName.bind(dog)()); // doggo

// 4. 
function isBig (thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true

// When comparing an array to a number, the array will be converted to a number.
 //if we compare a number with an Object (reminder: arrays are object in JS), 
 //this array will be converted to an array. Here, there is only one item inside so [2] == 2.
 
// 5. isPrime - Returns true or false, indicating whether the given number is prime.
// 6. set of numbers wether it is prime or not: eg. 2:prime,3:not a prime,...

