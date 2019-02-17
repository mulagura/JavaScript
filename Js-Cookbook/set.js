let a = 'abcdefghiiijkklmnoo';
let b = [1,2,3,4,5,5,6,6,6,6,3,1];
let c = [1,"1","bob","soda","vodka","soda",{color:'red'},{color:'green'},{color:'red'}];

let lengthOfa = a.length;
let lengthOfb = b.length;
let lengthOfc = c.length;

let aSet = [...new Set(a)]; // if you need it in array
console.log(aSet);
console.log(typeof aSet);

let bSet = new Set(b);
console.log(bSet);

let cSet = new Set(c);
console.log(cSet);//not wrkng for objects

//has()
//add()
//delete()
//clear()
