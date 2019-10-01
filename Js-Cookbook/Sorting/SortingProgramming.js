// sorting and Programs

// https://www.youtube.com/watch?v=zVevl-K-m7Y
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    const numbers = [1,3,5,-20,0,-10]; 
    const fruits = ['apple','Banana','Dragon fruit','carrots','citrus fruits'];
         
         console.log(`initial numbers are:=>${numbers}, initial array fruits:=>${fruits}`);
         
         // numbers ascending
            numbers.sort((a,b)=>{
                return a-b;  // ascending order
            });
            
            console.log(`numbers in ascending order:=>${numbers}`);
            
        // numbers descending    
            numbers.sort((a,b)=>{
                return b-a; // descending order
            });
            
            console.log(`numbers in descending order:=>${numbers}`);
            
         // string in ascending    
                fruits.sort((a,b)=>{
                
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                
                    if(a<b){ // ascending order
                        return -1;
                    }
                    else{
                        return 1;
                    }
                
                    return 0;
                
                });
                
                console.log(`fruits in ascending order:=>${fruits}`);
                
            // string in descending    
                fruits.sort((a,b)=>{
                
                    if(a>b){ // descending order
                        return -1;
                    }
                    else{
                        return 1;
                    }
                
                });
                
                console.log(`fruits in descending order:=>${fruits}`);
    // 
         
let proverb = 'god is great dude';

let words = proverb.split(/\W+/).filter((word)=> {
    return word.length>2;
});

console.log(words); // ["god", "great", "dude"]

words.sort((a,b)=>{
    if(a<b){
        return -1;
    }
    else{
        return 1;
    }

    return 0;
});

console.log(words); //  ["dude", "god", "great"]

// based on length

words.sort((a,b)=>{
    return a.length - b.length;
});

console.log(words); // ["god", "dude", "great"]

// how sorting of numbers works
// https://www.youtube.com/watch?v=9k9gPDxzGUg

const nums = [4,1,3];

nums.sort((a,b)=>{
    return a-b; // ascending order
});

console.log(nums); //   [1, 3, 4]
// if return of a-b, less than 0, a comes before b
// if return of a-b, greter than 0, b comes before a
// _ _ _ ; 4-1=3, 1 comes before 4; 4-3=2, 3 comes before 4; ....


 // string sorting

        let arrStr = ['yolo', 'yulu', 'yamaha', 'yureka'];

       
        // https://stackoverflow.com/questions/8282802/what-do-return-1-1-and-0-mean-in-this-javascript-code


        arrStr.sort((a, b) => {
            if (a < b) {
                return -1; // ascending
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        });

        console.log(arrStr);

        let num = [100, 10, 10101, 101, 101010, 1001];

        num.sort((a, b) => {
            return a - b; // ascending
        });

        console.log(num);
