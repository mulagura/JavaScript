// Array Methods

// 1. push(element1,...elementN);
// 2. unshift(element1,...elementN);
// 3. pop();
// 4. shift();
// 5. concat(value1,....valueN);
// 6. join(separator);
// 7. reverse();
// 8. slice(begin,end);
// 9. sort();
// 10. splice(start,deleteCount,addItem1,addItem2,...);

                       // 1. push(element1,...elementN);
// method adds one or more elements to the end of an array  and returns new length of an array
// changes original array

const companies = ['Wipro','Infosys','Cognizant'];
const smallCompany = 'edgeVerve';
const bigCompany = 'microsoft';
console.log(companies.push(smallCompany,bigCompany,'NASSCOM')); //6
console.log(companies); //  ["Wipro", "Infosys", "Cognizant", "edgeVerve", "microsoft", "NASSCOM"]
console.log(smallCompany); // edgeVerve


const duplicate = companies;
console.log(duplicate);
const securityCompany = 'SiS';
console.log(duplicate.push(securityCompany));
console.log(duplicate);
console.log(companies);  // even after reference to duplicate original array changes

// const value here can be changed because const is immutable for primitive value not for array like non-primitive values


                        //2. unshift(element1,...elementN);
// adds one or more elements to the beginning of an array and returns the new length of the array
// changes original array

const devarakonda = ['pelli choopulu','Arjun Reddy','geeta govindam'];
console.log(devarakonda.unshift('dwaraka')); // 4
console.log(devarakonda); //  ["dwaraka", "pelli choopulu", "Arjun Reddy", "geeta govindam"]


                      // 3. pop();
// removes the last element from an array and returns that element
// This method changes the length of the array and of course original array
// If you call pop() on an empty array, it returns undefined.

const fruits = ['grapes','apples','banana',256];
const popped = fruits.pop();
console.log(popped); // 256
console.log(typeof popped); //number
console.log(fruits);

const empty = [];
console.log(empty.pop()); // undefined
console.log(empty); // []

 const veggies = ['tomato','brinjal','drum stick','carrot'];

// veggies.forEach((el)=>{return veggies.pop();});
// console.log(veggies);

/* for(var i=0;i<=veggies.length;i++){
    veggies.pop();
} 
 console.log(veggies); cant pop whole because length affects for each iteration

 i=0; l=4
i=1; l=3
i=2; l=2 */

// use, while loop
 /* while(veggies.length>0){
     veggies.pop();
 }
 console.log(veggies); */
 //This solution is not very succinct, and it is also the slowest solution; use splice instead


                        //4. shift();
//removes the first element from an array and returns that removed element. 
//This method changes original array and its length
//If you call shift() on an empty array, it returns undefined.

const tea = ['ginger','black','green','masala'];
console.log(tea.shift()); //ginger
// console.log(typeof tea.shift()); //string
console.log(tea); // ["black", "green", "masala"]


                        //5. concat(value1,....valueN);
//used to merge two or more arrays
//This method does not change the existing arrays, but instead returns a new array.                        

const set1 = [1,11,11];
const set2 = [2,22,222];
const set3 = [3,33,333];
let str = 'Abs';
console.log(set1.concat(set2,set3)); // [1, 11, 11, 2, 22, 222, 3, 33, 333]
console.log(set1); // [1,11,11]
console.log(set2.concat(str)); // [2, 22, 222, "Abs"]


                        //6. join(separator);
// creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string      
// If separator is an empty string, all elements are joined without any characters in between them.
// If arr.length is 0, the empty string is returned.
// If an element is undefined or null, it is converted to the empty string.                              

const movies = ['aakali rajyam','aravainda','kahidi','pokiri'];
console.log(movies.join()); // aakali rajyam,aravainda,kahidi,pokiri
console.log(typeof movies.join()); // string
console.log(movies.join('')); // aakali rajyamaravaindakahidipokiri
console.log(movies.join(',')); // aakali rajyam,aravainda,kahidi,pokiri
console.log(movies.join('$$')); // aakali rajyam$$aravainda$$kahidi$$pokiri
console.log(movies.join(' ')); // aakali rajyam aravainda kahidi pokiri
console.log(movies); //  ['aakali rajyam','aravainda','kahidi','pokiri']


                            // 7. reverse();
//reverses an array, first element becomes the last, and the last element becomes the first      
//reverse is destructive. It also changes the original array

const ntr = ['aravainda','temper','yamadonga'];
console.log(ntr.reverse()); //["yamadonga", "temper", "aravainda"]
console.log(ntr); //["yamadonga", "temper", "aravainda"]

// How to reverse a string 
/*let myName = 'Venkat';
console.log(myName.split('').reverse().join('')); */


                            //8. slice(begin,end);
//returns copy of a portion of an array into a new array selected from begin to end (end not included).
// The original array will not be modified.
// doesn't affect original array    
//If begin is undefined, slice begins from index 0.                        

const stateR = ['AP','TN','KA','PY','KL','GJ','MH','OD','RJ','UP'];
console.log(stateR.slice(3)); // ['PY','KL','GJ','MH','OD','RJ','UP']
console.log(stateR); // ['AP','TN','KA','PY','KL','GJ','MH','OD','RJ','UP']
console.log(stateR.slice(0,5)); // ["AP", "TN", "KA", "PY", "KL"]
console.log(stateR.slice());


                             //9. sort();
// sorts the elements of an array in place and returns the array       
// changes/affects original array                         
// The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.

//arr.sort([compareFunction])

const luckyNmbers = [7,2,77,111,-12];
console.log(luckyNmbers.sort()); //  [-12, 111, 2, 7, 77]
                                 // because it sorts based on first,
console.log(luckyNmbers); // [-12, 111, 2, 7, 77]
                                 
luckyNmbers.sort((a,b)=>{
    return a-b;
});      // correct way of doing sorting numbers; a-b = ascending order; b-a = descending order

console.log(luckyNmbers);  // [-12, 2, 7, 77, 111]

const luckyLetters = ['Venkat','s','a','M'];
console.log(luckyLetters.sort()); //  ["M", "Venkat", "a", "s"]
                                  // sorts based on unicode ASCII
luckyLetters.sort((a,b)=>{
    var lowerA = a.toLowerCase();
    var lowerB = b.toLowerCase();
  
    if(lowerA < lowerB){
        return -1;
    }
    if(lowerA > lowerB){
        return 1;
    }
    return 0;
});                                                                    

console.log(luckyLetters); // ["a", "M", "s", "Venkat"]


                            //10. splice(start,deleteCount,addItem1,addItem2,...);
// changes the contents of an array by removing existing elements and/or adding new elements.
// changes original array and of course its length
// returns deleted elements
// If no elements are removed, an empty array is returned
// start: Index at which to start changing the array (with origin 0)
          //If greater than the length of array,index will be set to the length of the array                               
          //If negative,index begins from end of the array (with origin -1) 
                        //and will be set to 0 if absolute value is greater than the length of the array.
// deleteCount: An integer indicating the number of old array elements to remove.
          //If deleteCount is omitted, or if its value is larger than array.length - start 
          // (that is, if it is greater than the number of elements left in the array, starting at start), 
            //then all of the elements from start through the end of the array will be deleted.    
           // If deleteCount is 0 or negative, no elements are removed. you should specify at least one new element
// itemN: The elements to add to the array, beginning at the start index
        // If you don't specify any elements, splice() will only remove elements from the array.
        
const phones = ['one plus 6T','iphone XS','galazy s9','Nokia XL'];
console.log(phones.splice(2,2,'Huawei p9')); // ["galazy s9", "Nokia XL"]
console.log(phones); //  ["one plus 6T", "iphone XS", "Huawei p9"]

const mobiles = ['Mi','Samsung','Apple'];
console.log(mobiles.splice(0,0,'Nokia')); // []
console.log(mobiles); //  ["Nokia", "Mi", "Samsung", "Apple"]
