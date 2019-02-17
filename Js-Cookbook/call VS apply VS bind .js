// https://www.youtube.com/watch?v=CCb96W92A54
// https://www.youtube.com/watch?v=lQtDH0kW6II
// https://www.youtube.com/watch?v=g2WcckBB_q0
// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

// function.call(thisArg, arg1, arg2, ...)
// allows you to call function and able to pass object values to 'this'; 
// the 'this' will be replaced by passed object


function foo(firstName,lastName){
    
    console.log(`first name is : ${firstName} and last name is ${lastName}`);
    console.log(this);
    
}

foo('ram','mulagura'); // first name is : ram and last name is mulagura
                       // window

// call method passing empty object; so 'this' window object will becomes call passed empty object   

foo.call({},'ram','mulagura'); // first name is : ram and last name is mulagura
                               // {}   

foo.call({age:25},'amit','pandey'); // first name is : amit and last name is pandey
                               // {age:25}                               

// in non-strict mode; null and undefined will be replaced with window/global object

foo.call(null,'Chinna','babu'); // first name is : Chinna and last name is babu
                               // Window

foo.call(undefined,'pedda','babu'); // first name is : pedda and last name is babu
                               // Window                               

// function.apply(thisArg, [argsArray])
// calls a function with a given this value, and arguments provided as an array

var names = ['middle','babu'];

foo.apply({},names) // first name is : middle and last name is babu
                    // {}


// function.bind(thisArg)
// creates a new function, binds an object to a function

    var evenObj = {x:2,y:4};
    var oddObj = {x:1,y:3};

var sumOf = function(){
    console.log(" Sum is: ",this.x+this.y);
};

var result = sumOf.bind(evenObj); // 

console.log(result); // [Function: bound sumOf]

result(); //  Sum is:  6



// VS

// Every function has call, apply and bind methods
// To pass the value of 'this' from one context to another, use call(), or apply() or bind()
// call() accepts an argument list, while apply() accepts a single array of arguments.
// Use .bind() when you want that function to later be called with a certain context
// Call/apply call's the function immediately