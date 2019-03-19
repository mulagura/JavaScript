// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610

// fibanocci sequnce without recursion

let fib = (number)=>{
    var fibonacciSequence = [0,1];
    for(var j=0;j<number-2;j++){
    fibonacciSequence.push(fibonacciSequence[j]+fibonacciSequence[j+1]);  
}
return fibonacciSequence;
};


console.log(fib(8)); //  [0, 1, 1, 2, 3, 5, 8, 13]

// sum of given fibanocci using recursive

let sumOfFib = (num)=>{

if(num<2){
    return num;
}
else{
    return sumOfFib(num-1)+sumOfFib(num-2);
}

};

console.log(sumOfFib(8));

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
const n = 10;
var result = [];
result[0] = 0;
result[1] = 1;
//output:  0 1 1 2 3 5 8 13 21 34 55

for(var i=2;i<=15;i++){
     result[i] = result[i-2] + result[i-1]; 
    //console.log(result);
    
}

// Method 2

const number = 15;

var fibonacciSequence = [0,1];

for(var j=0;j<number-2;j++){
    fibonacciSequence.push(fibonacciSequence[j]+fibonacciSequence[j+1]);
    //console.log(fibonacciSequence);
    
}


// Fibonacci with even

const n1 = 10;

var result1 = [0,1];

for(var k=0;k<n1-2;k++){

    result1.push(result1[k]+result1[k+1]);    
    //console.log(result1);

    if( result1[k]%2 === 0 && result1[k] > 0){
        //console.log(result1[k]);
        
    }
    
}

// Fibonacci with odd

const n2 = 10;

var result2 = [0,1];

for(var l=0;l<n2-2;l++){

    result2.push(result2[l]+result2[l+1]);    
    //console.log(result2);

    if( result2[l]%2 !== 0 && result2[l] > 0){
        //console.log(result2[l]);
        
    }
    
}

// Fibonacci with recursive

function fib(n3){
    if(n3<2){
       
        return n3;
         
    }
    return fib(n3-1)+fib(n3-2);
}


console.log(fib(6));


