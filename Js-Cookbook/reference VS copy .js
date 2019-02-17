     // refernce vs copy    
 
// https://www.youtube.com/watch?v=YnfwDQ5XYF4

//  JavaScript uses by value for primitive types and by reference for objects
// Every variable representing a primitive value is guaranteed to belong to a unique memory location
   // This means none of the variables will ever point to the same memory address. 
// Array, Function, and Object are passed by refernce   

// strings,numbers, boolean (it will make copy for primitive values)

     let a = 'Mulagura';
     let b = 24;
     let c = true;

console.log(a,b,c);  // Mulagura 24 true

     let aCopy = a;
     let bCopy = b;
     let cCopy =c; 

console.log(aCopy,bCopy,cCopy);  // Mulagura 24 true

     a='Chaganti';

console.log(a,aCopy); // Chaganti Mulagura
                      // here changing a does not affect aCopy because its a copy not a refernce; a and aCopy have different memory allocations     

// arrays / objects / functions ( it will make just refernce ; so we should do differently)

const NUM = [1,2,3,4,5];
const REF_NUM = NUM;

console.log(NUM,REF_NUM); // (5) [1, 2, 3, 4, 5] (5) [1, 2, 3, 4, 5]

NUM[5] = 6;

console.log(NUM,REF_NUM); // 1, 2, 3, 4, 5, 6] (6) [1, 2, 3, 4, 5, 6]
                          // its just giving reference, pointing to same memory location; 
                            // it does not contain any actual value
                            // so  its not a copy its just a reference

//1.slice();
     const CPY1_NUM = NUM.slice();
     console.log(NUM,CPY1_NUM); // (6) [1, 2, 3, 4, 5, 6] (6) [1, 2, 3, 4, 5, 6]

NUM[6] = 7;

     console.log(NUM,CPY1_NUM); //  [1, 2, 3, 4, 5, 6, 7] (6) [1, 2, 3, 4, 5, 6]
                               // now its making a copy not reference
     
     
//2. concat();
     const CPY2_NUM = [].concat(NUM);
//3. spread operator(...args)
     const CPY3_NUM = [...NUM];
//4. Array.from()
     const CPY4_NUM = Array.from(NUM);
     console.log(NUM,CPY4_NUM); // (7) [1, 2, 3, 4, 5, 6, 7] (7) [1, 2, 3, 4, 5, 6, 7]
        

// objects / functions ( it will make just refernce ; so we should do differently)     

let employee = {
    name:'Ram',
    age:24,
    band:true
};
let ceo = employee;

console.log(employee,ceo); // {name: "Ram", age: 24, band: true} {name: "Ram", age: 24, band: true}

ceo.band = false;

console.log(employee,ceo); // {name: "Ram", age: 24, band: false} {name: "Ram", age: 24, band: false}
                           // because of reference both values changed; 

//1.spread

let cfo = {...employee};

console.log(employee,cfo); // {name: "Ram", age: 24, band: false} {name: "Ram", age: 24, band: false}

cfo.age = 45;

console.log(employee,cfo); // {name: "Ram", age: 24, band: false} {name: "Ram", age: 45, band: false}

//2. Object.assign({},obj,{});

let coo = Object.assign({},employee,{age:40});

console.log(employee,coo); // {name: "Ram", age: 24, band: false} {name: "Ram", age: 40, band: false}

// this is shallow way of doing not deep copy; lets say object has another object inside { {} } , the inner will be again refernce not a copy; to do whole copy we should iterate and do
// this is only one level deep; both for arrays and objects
// lodash has cloneDeep method; JSON.parse(JSON.stringify)

