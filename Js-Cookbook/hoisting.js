               // hoisting

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
   // (to the top of the current script or the current function)

        console.log(x); // undefined
        var x = 10; 

        /* above code, js execution context looks like
        var x;
        console.log(x);
        x=10;
        */   

        var name = 'Ram';

        var display = function(){
            console.log(name); // undefined
            var name = 'Mulagura';
        }
        display();


// Variables and constants declared with let or const are not hoisted!

        // console.log(y); // Uncaught ReferenceError: y is not defined
        let y = 20;

 // JavaScript only hoists declarations, not initializations.
               // declaration (var b) is hoisted to the top, not the initialization (=2) 
        var a= 1;
        console.log(a,b); // 1 undefined
        var b =2;

// functions /or function declarations are hoisted too but not function expression

        newFunc(); // see function declarations are hoisted too
        function newFunc(){
            console.log(`see function declarations are hoisted too`); 
        }
        
       // foo(); // Uncaught TypeError: foo is not a function
        var foo = function(){
            console.log(`lets log foo`); 
        }

