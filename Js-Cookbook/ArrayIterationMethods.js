                                  // Array Iteration Methods
// forEach(callback);
// map(callback) 
// filter()
// reduce()
// find()          
// findIndex()                       

/*1. forEach(function(element,index,array)=>{

            });
      // executes the provided callback once for each element present in the array in ascending order
      // There is no way to stop or break a forEach() loop other than by throwing an exception       
  */
 
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

  console.log(HollyWoodMovies);
 
// for vs forEach  
   // if the condition contains <= instead of <. As a result, for loop will behaves diifferently,
   // in for loop using keyword 'break' can come out of loop, but not in forEach; we should throw exception
   // scoping; forEach has its own this args
   // When using the .forEach() you pass an individual function with it’s own scope.
   // In a for loop you’re polluting whatever scope you place the loop in.  

/* 2. map(function(element,index,wholeArray){

});
    // creates a new array with the results of calling function on every element in the calling array
    // .map() when you want to transform elements in an array.
  */

const oddNumbers = [1,3,5,7,9];
const sqrOfOddNumbers = oddNumbers.map((number,index,arr)=>{
    return Math.pow(number,2);
});

console.log(sqrOfOddNumbers);

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
console.log(filteredAges);

/* 4. reduce((Accumulator,Current Value,Current Index, Source Array )=>{

});
    // executes a reducer function on each member of the array resulting in a single output value
    // The accumulator accumulates the callback's return values; 
       it is the accumulated value previously returned in the last invocation of the callback, or initialValue
    // .reduce() when you want derive a single value from multiple elements in an array.
 */

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

const objs = [{id:1,total:85},{id:2,total:93},{id:3,total:97},{id:4,total:67},{id:5,total:90},];
const letsFind = objs.find((student,index,arr)=>{
        return student.total <= 80;
});
console.log(letsFind);

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
 
