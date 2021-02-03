// arrow function
// https://medium.com/better-programming/difference-between-regular-functions-and-arrow-functions-f65639aba256
// // ()=>{};
// basically these are anonymous functions
// in normal function this keyword changes from context to context (function to function)
// so 'this' is bound to function keyword, if new function with keyword function the 'this' context changes
   // before arrow functions; we should use var self = this; or .bind(this)
   
// but here we dont need to worry,
   //arrow functions doesn't have thier own 'this'; it uses parent's 'this'

// if some kind of function want to use their own 'this'; do not use arrow functions   
// arrow function don't have arguments variable  

//example 1
function Display(val){
   
    this.val = val;
    console.log(val,this.val); // Ram Mulagura Ram Mulagura
    
    var self = this;

    function innerFunction(){
        console.log(val,this.val); // Ram Mulagura undefined
        console.log(val,self.val); // Ram Mulagura Ram Mulagura
    };

    innerFunction();

};

var show = new Display('Ram Mulagura');

//example 2

var count = function(number){
    this.number = number;
    setTimeout(function(){
        this.number++;
        console.log(this.number); // after 2 seconds NaN; beacuse 7+undefined is NaN
    },2000);
};

count(7);
  
        // solution 1: use var self = this;

        var counter = function(num){
            var self = this;
            this.num = num;
            setTimeout(function(){
                self.num++;
                console.log(self.num); // 78
            },2000);
        };

        counter(77);

        // solution 2: use  .bind(this)  to function

        var toCount = function(digit){
            this.digit = digit;
            setTimeout(function(){
                this.digit++;
                console.log(this.digit); // 778
            }.bind(this),2000);
        };

        toCount(777);
  
// example 3

var toSum = (val)=>{  // or function(val){
    this.val = val;
    setTimeout(()=>{
        this.val++;
        console.log(this.val); // 7778
    },2000);
};

toSum(7777);

// example 4; arguments

var x = function(){
    console.log(arguments); // [Arguments] { '0': true, '1': 4, '2': 'Ram' } 
    console.log(Array.isArray(arguments)); //  // false
    console.log(arguments.length); // 3 
                                  
       // arguments are array like object but not real array; it has length property not push pop...
};

x(true,4,"Ram");

// with arrow function

var xx = ()=>{
    console.log(arguments); // gives Event object contains all info
};

xx(123,false,"mulagura");

// use spread operator (...n) to get arguments
