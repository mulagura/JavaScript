// preincrement (++i) adds one to the value of i, then returns i, i++ returns i then adds one to it, 
 
let i =0;
i++;
console.log(i); // 1

let j=0;
console.log(j++); // 0

let k=0;
console.log(++k); // 1

let a =0;
a++;
console.log(a++); // 1
console.log(a); //2


let b = 0;
const ARR = [10,20,30,40,50];
let temp = ARR[b++];
console.log(temp); // 10
console.log(b); //1


let post = function foo(){
    for(let c=1;c<=5;c++){
    return c++;
}
};

let pre = function boo(){
    for(let d=1;d<=5;d++){
        return ++d;
    }
};

console.log(post()); // 1
console.log(pre()); // 2

