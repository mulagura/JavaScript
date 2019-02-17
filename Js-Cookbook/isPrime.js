// 0,1 not prime
// 2 is prime and all other even numbers are not prime
// prime number is divisible by 1 and its own number only 
var counter = 0;
var encounter = 0;
var decounter =0;

let isPrime = (n)=>{
    
        if( n===0 || n===1 || (n>2 && n%2 === 0) ){
        counter++; // 
            return false;
        }
        
        if(n===2){
        encounter++; //
            return true;
        }

        for(let i=3;i<=n-1;i++){ 
            // for(let i=3;i<=n-1;i=i+2){instead i++ ie 4(since % with 2,4,6 all same, we have acheived in above) we can do one more i++ ;
            // for(let i=3;i<=Math.sqrt(n);i=i+2)
               // suppose, n = x*y, x n y are equal, or x<y or x>y, x<=y, x*x<=y*x, x^2<=n, x<=sqrt(n);
            decounter++; //
            if(n%i === 0){
                console.log(`decounter${decounter}`); //
                return false;
            } 
        }

    return true;

}

console.log(isPrime(101));  // true
console.log(counter,encounter,decounter); // 0 0 98

// 1. i=3,decounter =1,49%3 ===1,
// 2. i=4,decounter =2,49%4 ===1,
// 3. i=5,decounter=3,49%5 ===1,
// 4. i=6,decounter =4,49%6 ===1,
// 5. i=7,decounter =5,49%7 ===0,


// prime numbers between 0 to 100
// for(let i=0;i<=100;i++){
//     if(isPrime(i)){
//         console.log(i); // 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 
//     }
// }

// clean code with optimization

let isPrimeNumber = (number)=>{

        if( (number === 0 || number === 1) || (number>2 && number%2 === 0) ){
            return false;
        }

        if(number === 2 ){
            return true;
        }

        for(let i=3;i<=Math.floor(Math.sqrt(number));i=i+2){

            if(number%i === 0){
                return false;
            }
            
        }

    return true;

};

console.log(isPrimeNumber(1010101)); // false
