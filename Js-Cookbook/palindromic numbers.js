const n = 104;
var final = [];
// palindromic numbers between the provided number
//output should be 1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,101

        //result = n.toString();
        for(var i=0;i<=n;i++){
            var result = i.toString().split('').reverse().join('');
            var result = parseInt(result);
            //console.log(result);
            if(result === i){
                final.push(result);
            }
        }
    

console.log(final);

// check given number palindrome or not
let palinStr1 = (num)=>{
    let check = num.toString().split('').reverse().join('');
   // console.log(check);
    
    let parse = parseInt(check); // or Number(check)
    //console.log(typeof check,typeof parse);
    if(num === parse){
        console.log('palindrome');
        
    }
    else{
        console.log('not a palindrome');
        
    }
    
};

palinStr1(121);

// check given negative number palindrome or not

let palinStr2 = (num)=>{
    let check = Math.abs(num).toString().split('').reverse().join('');
    //console.log(check);
    
    let parse = parseInt(check); // or Number(check)
    //console.log(typeof check,typeof parse);
    //console.log(typeof parse);
    
    if(Math.abs(num) === parse){
        console.log(num + 'palindrome');
        
    }
    else{
        console.log('not a palindrome');
        
    }
    
};

palinStr2(-121);

