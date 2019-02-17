// https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
// https://stackoverflow.com/questions/10081593/are-named-functions-preferred-over-anonymous-functions-in-javascript
// https://www.youtube.com/watch?v=gjLn95skIKE


// function declaration or function statement
    /* function funcName(){
        statements
    } */
console.log("before",foo);  // before function foo() {}
console.log("before",foo()); // before I am function statement/definition/declaration

function foo(){
    return "I am function statement/definition/declaration";
}


// function expression
// can have named function or anonymous function 
    /* var exp = function(){
        statements
    } */
console.log("before anonymous",boo); // before anonymous undefined
console.log("before anonymous",boo()); //  boo is not a function

var boo = function(){
    return "Function expression with anonymous function";
};


console.log("before named",coo); // before named undefined
console.log("before named",coo()); // coo is not a function
console.log("before named with named function",justConsole); //  justConsole is not defined
console.log("before named with named function",justConsole()); // //  justConsole is not defined

var coo = function justConsole(){
    return 'I am function expression with named function';
};

sum(1,2); // sum is not function
add(1,2); //  add is not defined

var sum = function add(a,b){
    console.log(a+b);   
}

sum(2,3); // 5
add(2,3); // add is not defined


// VS
// function declarations can be hoisted but expressions cannot be hoisted
// in function expression with named function; easy to debug with named function as it shows in call stack while debugging f12->sources   

