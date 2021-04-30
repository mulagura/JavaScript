             // swapping

// swapping with third variable
let x = 'var x';
let y = 'var y';
console.log(x,y);
let temp = x; // temp = x;
x=y; // x = 'y';
y = temp; // y = 'x';
console.log(x,y,'temp:'+temp);


// swapping without third variable

a=a+b;
b=a-b;
a=a-b;


let a = 1;
let b = 2;
console.log(a,b);
b = [a,a=b][0];
console.log(a,b);

// swapping without third variable ES6
let m = 'Mulagura';
let n = 'Ram';
console.log(m,n);
[m,n] = [n,m];
console.log(m,n);

let obj1 = {make:'honda'};
let obj2 = {make:'suzuki'};
console.log(obj1,obj2);
[obj1,obj2] = [obj2,obj1];
console.log(obj1,obj2);


