// for in
//it iterates over object keys
// Use for…in to iterate over the properties of an object (the object keys)
// You can also use for…in to iterate over the index values of an iterable like an array or a string:
// for(variable in object){}
// for(var movie in movieObj){}
// https://www.youtube.com/watch?v=a3KHBqH7njs&t=22s

var movieObj = {

    name:'Face Off',
    actor:'nicolas cage & jOhn travolta',
    director:'john woo',
    isHit:true,
    genre:['action','suspense','thriller']
    // js keys are always string even if you don't see

};


var info = "";

for(movie in movieObj){
    
    console.log(movie); // name actor director isHit genre
   
    info = info + " " + movieObj[movie];
}

console.log("Movie  Information:",info); // Movie  Information:  Face Off nicolas cage & jOhn travolta john woo true action,suspense,thriller

var str = 'Mulagura';

for(var letter in str){
console.log(letter); // 0 1 2 3 4 5 6 7
}

var arr = ['mon','tues','wednes','thurs','fri'];

arr.foo ="Sunday";

for(var day in arr){
    console.log(day); // 0 1 2 3 4 foo
    
}

//console.log(arr[5]); // undefined

console.log(arr['foo']); // sunday


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// for of
// creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects 
// iterate over the value
//for(variable of iterableObject){}
//for(var i of arr){}

// traditional vs for of --> in for loop we specify the particular length and initilization;but in for of loop we leave it to js

// var newObj = {
//     name:'ram',
//     isCapable:true
// };

// for(var i of newObj){
//     console.log(i); // TypeError: newObj is not iterable
// }




