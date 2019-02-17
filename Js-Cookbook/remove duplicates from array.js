//[1,2,3,1,5,2];
//output: [1,2,3,5];

let a = [1,2,3,1,5,2];
let b = [];
let lengthOfa = a.length;

for(let i=0;i<lengthOfa;i++){

    if( b.indexOf(a[i]) === -1){
        b.push(a[i]);
    }

}

console.log(b);


//Method 2

console.log(a.sort());

a.sort();
let c = [];
let _temp;

for(let i=0;i<lengthOfa;i++){
    if(a[i] !== _temp){
        c.push(a[i]);
        _temp = a[i];
    }
}

console.log(c);
