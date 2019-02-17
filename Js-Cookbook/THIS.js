// https://www.youtube.com/watch?v=gvicrj31JOM

// this ---> The JavaScript context object in which the current code is executing.
// 'this' refers to the object that is executing current function/method
// 'this' varies between strict mode('use strict') and non-strict mode
// outside function the 'this' refers to global object / window object even in strict mode
//  

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
