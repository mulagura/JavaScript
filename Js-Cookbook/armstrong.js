// armstrong
// 123 output: 1^3+2^3+3^3 = 1+8+27 = 36

const number = 123;

//console.log(Math.pow(number,3)); Math.pow(base,exponent)

//console.log(number.toString().length);

let lengthOfNumber = number.toString().length;
var result = 0;

for(var i=0;i<lengthOfNumber;i++){
    var eachNumberArray = number.toString().split('');
    //console.log(eachNumberArray);  
    eachNumberArray[i] =  Math.pow(Number(eachNumberArray[i]),lengthOfNumber);
    result+=eachNumberArray[i];
    
}

console.log(result);

// simplified version

// armstrong

// 1634 = 1^4 + 6^4 + 3^4 + 4^4 = 1+1296++81+256 = 1634

let armStrong = (num)=>{

    let count = num.toString().length;
    //console.log(count); // 4
    let eachNumber = num.toString().split('');
    //console.log(eachNumber); // ["1", "6", "3", "4"]
    let sumOf = 0;
    for(let i=0;i<count;i++){
        sumOf = sumOf + Math.pow(eachNumber[i],count);
    }
    // console.log(sumOf); // 1634
    if(sumOf === num){
        console.log(`Given ${num} is Armstrong`);
    }
    else{
        console.log(`Not an Armstrong`);
    }
    

};

armStrong(1634);

let armStrong1 = (num)=>{

    let toStrng = num.toString(); 
    let legth = toStrng.length;
    let count = 0;

    for(let i=0;i<legth;i++){
        count+=Math.pow(toStrng.charAt(i),legth);
    }
    //console.log(count);

    if(count === num){
        console.log(`Given ${num} is Armstrong`);
    }
    else{
        console.log(`Not an Armstrong`);
    }
    

};

armStrong1(1634);
