// armstrong
// a number that is the sum of its own digits each raised to the power of the number of digits.
// 123 output: 1^3+2^3+3^3 = 1+8+27 = 36

// Solution: 1
const number = 123;

//Math.pow(base,exponent);  base^exponent
// Number('string')  --> converts provided string to number 
// split()           --> string to array
// toString() 

let lengthOfNumber = number.toString().length;
var result = 0;

for(var i=0;i<lengthOfNumber;i++){
    var eachNumberArray = number.toString().split('');
    eachNumberArray[i] =  Math.pow(Number(eachNumberArray[i]),lengthOfNumber);
    result+=eachNumberArray[i];
}

console.log(result);

// simplified version

// Solution: 2

// 1634 = 1^4 + 6^4 + 3^4 + 4^4 = 1+1296++81+256 = 1634

let armStrong = (num)=>{

    let count = num.toString().length;
  
    let eachNumber = num.toString().split('');
    
    let sumOf = 0;
    for(let i=0;i<count;i++){
        sumOf = sumOf + Math.pow(eachNumber[i],count);
    }
    
    if(sumOf === num){
        console.log(`Given ${num} is Armstrong`);
    }
    else{
        console.log(`Not an Armstrong`);
    }
    

};

armStrong(1634);


// Solution: 3 advanced

const sal = 2222;
var salLength = sal.toString().length;

var totalSal = 0;

for(var i=0;i<salLength;i++){
    totalSal = totalSal + Math.pow(Number(sal.toString()[i]),salLength);
}
console.log(totalSal);//64
