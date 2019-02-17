// stacks
//example for stack is browsers back button

// functions: push, pop, length, peek (peek is first pop in array/ displaying top elment of stack)

var letters = [];

var word = "maryram";

var rword = "";

let newObj = {
    make:'Ford',
    year:1967
};

var count = 0;

//push - The push() method adds one or more elements to the end of an array 
          //and returns the new length of the array.
//pop - The pop() method removes the last element from an array
          //and returns that element. This method changes the length of the array.          


//put letters of word into stack

for(var i=0;i<word.length;i++){
    letters.push(word[i]);
    //console.log(letters);
    //console.log(typeof word[i]);
    
}

for(var i=0;i<word.length;i++){
    rword = rword + letters.pop();
    //console.log(rword);
    
}

if(rword === word){
   // console.log("Hoo,its a match, Palindrome");  
  
    //console.log(newObj['make']);

    newObj[count] = word;
    //console.log(newObj);
    
    

}

