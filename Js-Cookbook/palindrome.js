const normalWord = 'racecar';
const line = 'A man, a plan, a canal. Panama';
const specialString = '0_0 (: /-\ :) 0–0';


// normal string
let normalResult = normalWord.split('').reverse().join('');
   //console.log(result);

if(normalResult === normalWord){
    //console.log("Yes its a palindrome");   
}
else{
    //console.log("Nah its not");
    
}

//line
let lineResult = line.replace(/[^a-zA-Z0-9]+/gi,'').toLowerCase().split('').reverse().join('');
        //console.log(lineResult);
        
//special string
let specialResult = specialString.replace(/[\W_]/g,'').split('').reverse().join('');
        console.log(specialResult);
                
