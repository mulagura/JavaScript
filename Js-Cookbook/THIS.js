// https://www.youtube.com/watch?v=gvicrj31JOM
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// https://www.youtube.com/watch?v=AOSYY1_np_4&list=WL&index=10&t=263s

// this ---> The JavaScript context object in which the current code is executing.
// 'this' refers to the object that is executing current function/method
// 'this' varies between strict mode('use strict') and non-strict mode
// outside function the 'this' refers to global object / window object even in strict mode
//  inside object, this refers to the object itself
// inside object, if foreach callback function with function, this behaves like in function(ie. global/window)
// but if it is arrow function, this refrs to the inherit from enclosing scope.

// global 
this.something = "Hi i am something";
console.log(this.something); // Hi i am something
console.log(window.something); // Hi i am something

// method --> obj
   // in an object function is a method; 'this' in a method refers to that object itself

   var obj = {

       title:'The Ferrari',
       race:function(){    //  or race(){   --> it's called method if it is inside object

        console.log(this); // { title: 'The Ferrari', race: [Function: race] }

       } 

   };

   obj.race();

   obj.oneMoreRace = function(){
       var distance= '500 KM';
       console.log(this); // { title: 'The Ferrari',race: [Function: race], oneMoreRace: [Function] }
   };

   obj.oneMoreRace();


// function --> global / window
    
    function foo(){
        var greet = "Hello World!";
        console.log(this); // window
        console.log(this.greet); // undefined
        function innerFoo(){
            console.log(this.greet); // undefined
            console.log(this); // window
        }
        innerFoo();
    }

    foo();

// constructor function
   // in constructor function it returns new instance; 
   // the value of “this” refers to newly created instance.

    function Drive(speed){

        this.speed = speed;
        console.log(this);
        
    }

    var ram = new Drive('90kmph');  // Drive { speed: '90kmph' }
    var babu = new Drive({a:1,b:2}); // Drive { speed: { a: 1, b: 2 } }


// inside obj:callback function
    // here log is consider as method and callback forEach is considered as normal function

    var liquidObj = {

        types:['water','petrol','oil'],
        arePriceable:true,
        log(){

            console.log(this.types,this.arePriceable); // [ 'water', 'petrol', 'oil' ] true
            this.types.forEach(function(type,indx,arr){
                console.log(type); // water petrol oil
                console.log(this.arePriceable); // undefined undefined undefined
                console.log(this); // window
                
            });  // }.bind(this));
        }

    };

    liquidObj.log();

    //solution: use var self = this; or use call/apply/bind; or use arrow functions

// Certainly! In the provided code, there is an object named liquidObj with a method (function inside an object) called log. 
// Inside the log method, there's a forEach loop that iterates through the elements of the types array. 
// However, there's an issue with how this is being used inside the forEach loop.
// When you use this inside a regular function (like the one inside forEach), 
// it doesn't refer to the object it's a part of (liquidObj in this case). 
// Instead, it refers to the global object (window in a browser environment).
// So, when you try to access this.arePriceable inside the loop, it doesn't work as expected, 
// and you get undefined. To solve this issue, you can use various approaches:

// Using a Variable (self): You can store a reference to the outer this in a variable and use that variable inside the loop.

var liquidObj = {
    types: ['water', 'petrol', 'oil'],
    arePriceable: true,
    log() {
        var self = this;
        console.log(this.types, this.arePriceable);
        this.types.forEach(function (type, indx, arr) {
            console.log(type);
            console.log(self.arePriceable);
            console.log(self);
        });
    }
};

liquidObj.log();

// Using Arrow Functions: Arrow functions don't have their own this. They inherit this from the enclosing scope, which makes them useful in this context.

var liquidObj = {
    types: ['water', 'petrol', 'oil'],
    arePriceable: true,
    log() {
        console.log(this.types, this.arePriceable);
        this.types.forEach((type, indx, arr) => {
            console.log(type);
            console.log(this.arePriceable);
            console.log(this);
        });
    }
};

liquidObj.log();
// These approaches ensure that this inside the loop still refers to the liquidObj object, allowing you to access its properties correctly.