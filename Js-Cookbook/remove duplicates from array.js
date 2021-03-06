// https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31


let arr = [1,2,3,1,2,2];
let arrLength = arr.length;

--> using inlcudes,indexOf -1, filter, Set operator

//M1

let empty = [];
for(let i=0;i<arrLength;i++){
    if(empty.indexOf(arr[i]) === -1){
        empty.push(arr[i]);
    }
}
console.log(empty);

//M2

let filtered = arr.filter((ele,indx,wholeArr)=>{
    if( wholeArr.indexOf(ele) === indx ){
        return ele;
    }
});

console.log(filtered);

// M3

let empty1 = [];
for(let i=0;i<arrLength;i++){
   if(empty1.includes(arr[i]) === false){
       empty1.push(arr[i]);
   }
}
console.log(empt1y);


//M4

let newSet = [... new Set(arr)];
console.log(newSet);


//M5

console.log(arr.sort());

arr.sort();
let c = [];
let _temp;

for(let i=0;i<arrLength;i++){
    if(arr[i] !== _temp){
        c.push(arr[i]);
        _temp = arr[i];
    }
}

console.log(c);
