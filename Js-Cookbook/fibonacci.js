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

