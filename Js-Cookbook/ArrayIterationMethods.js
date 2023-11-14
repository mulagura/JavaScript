                                  // Array Iteration Methods
// https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c                                  
// forEach(callback);
// map(callback) 
// filter() https://www.digitalocean.com/community/tutorials/js-filter-array-method
// reduce()
// find()          
// findIndex()                       

/*1. forEach(function(element,index,array)=>{

            });
      // executes the provided callback once for each element present in the array in ascending order
      // There is no way to stop or break a forEach() loop other than by throwing an exception       
  */
// forEach.js 
 
  const HollyWoodMovies = ['Apocalypto','Passion of christ','MI','Ghost Rider','Thor','Avnegers'];

  HollyWoodMovies.forEach((movie,index,arr)=>{
        if(movie === 'MI'){
           //throw movie; // Uncaught MI  
           console.log(movie.toLowerCase());
           
        }
        else{
            console.log(movie.toUpperCase());   
        }
  });

  console.log(HollyWoodMovies); // ['Apocalypto','Passion of christ','MI','Ghost Rider','Thor','Avnegers']
 

/* 2. map(function(element,index,wholeArray){

});
    // creates a new array with the results of calling function on every element in the calling array
    // .map() when you want to transform elements in an array.

  */ // map.js

const oddNumbers = [1,3,5,7,9];
const sqrOfOddNumbers = oddNumbers.map((number,index,arr)=>{
    return Math.pow(number,2);
});

console.log(sqrOfOddNumbers); // [ 1, 9, 25, 49, 81 ]

/* 3. filter((element,index,array)=>{

});
   // creates a new array with all elements that pass the test implemented by the provided function. 
  //  filter() when you want to select a subset of multiple elements from an array.
  // A new array with the elements that pass the test. 
     If no elements pass the test, an empty array will be returned.
  */

const orphanAges = [2,4,6,8,11,20,19];
const filteredAges = orphanAges.filter((age,index,arr)=>{
        if(age>=18){
            return age;
        }
});
console.log(filteredAges); // [ 20, 19 ]

/* 4. reduce((Accumulator,Current Value,Current Index, Source Array )=>{

});
    // executes a reducer function on each member of the array resulting in a single output value
    // The accumulator accumulates the callback's return values; 
       it is the accumulated value previously returned in the last invocation of the callback, or initialValue
    // .reduce() when you want derive a single value from multiple elements in an array.
 */
// reduce.js
// https://www.youtube.com/watch?v=g1C40tDP0Bk

const values = [1,3,5,78,8,8,545,4,4];
const reducerFunc = values.reduce((acc,cur,index,arr)=>{
        return acc+cur;
        
}); 
console.log(reducerFunc); //656

// If you were to provide a different value to accumulator, then

/* values.reduce(()=>{
 },10); */

/* 5. find((element,index,array)=>{

}); */
    //  returns the value of the first element in the array that satisfies the provided testing function. 
    // Otherwise undefined is returned
    // .find() When you want to select a single element from an array.

    // filter returns an array , while find return an object
    // filter scans the entire array and creates another array

const objs = [{id:1,total:85},{id:2,total:93},{id:3,total:97},{id:4,total:67},{id:5,total:90},];
const letsFind = objs.find((student,index,arr)=>{
        return student.total <= 80;
});
console.log(letsFind); // { id: 4, total: 67 }

/* 6. findIndex((element,index,array)=>{

}); */
  // returns the index of the first element in the array that satisfies the provided testing function. 
  //Otherwise, it returns -1, indicating no element passed the test.  

 const tollyCollections = [{movie:'bahubali',gross:800},{movie:'bahubali2',gross:1000},{movie:'aravainda',gross:300},
                            {movie:'rangastalam',gross:200},{movie:'arjun reddy',gross:150}];

 const letsFindIndex = tollyCollections.findIndex((tolly,index,arr)=>{
            return tolly.gross <= 100;
 });      
 
 console.log(letsFindIndex); // -1 
 
 var ages = [3, 10, 18, 20];
 console.log(ages.indexOf(10)); // 1

 console.log( [1, 2, 3].includes(2) );      // true
