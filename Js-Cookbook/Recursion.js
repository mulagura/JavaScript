                         // Recursion
// https://www.youtube.com/watch?v=VtG0WAUvq2w                    

// a function calls itself inside its own function body;
// LIFO

  // sum of first seven numbers
  // 0+1+2+3+4+5+6+7 = 28

    var total = 0;
    function sumOf(n){
        
        for(var i=0;i<=n;i++){
            total = total + i;
        }

        console.log(`sum of first seven numbers:${total}`);
        
    }
    sumOf(7); 

  // recursive way  

    let sumRecursive = (n)=>{

        if(n<=0){
            return 0;
        }
        else{
            return n + sumRecursive(n-1);
        }
    };

    console.log(`sum of first seven numbers:${sumRecursive(7)}`);

  // recurisve count down
  
  let countDown = (n)=>{

    if(n<=0){
        return 'boom';
    }
    else{
        console.log(n);
        return countDown(n-1);
    }

  };

  console.log(`${countDown(10)}`);
  
    
  // nested iterative approach
     function fact(n){

        if( n===0 || n===1 ){
            return 1;
        }

        var result = n;

        for(var i=0;i<=n;i++){
            result = result * (n-1);
            n = n-1;
        }
        console.log(result);
        
     }

     fact(6); // 720
     // 5*4, 4
     // 
     
     
     // with recursion
     
     let factorial = (n)=>{

    if( n===0 || n===1 ){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
};

console.log(factorial(5)); // 120
     // 5*4*3*2*1 = 120

// pros:
   //1.

// cons:
    // 1. consumes more processing time, stack overflows in global execution context.
    // 2. recursion takes more stack than iterative solution.

   //1. if nested stack are more than / < / = 15000 in chrome, the call stack exceeds its maximum range    
        //eg:
        let maxCallStack = (n)=>{
            if(n<=0){
                return 0;
            }
            else{
                return n + sumRecursive(n-1);
            }
        };   
        console.log(`global execution context, call stack:${maxCallStack(11371)}`);
        //  Uncaught RangeError: Maximum call stack size exceeded// without recursion

