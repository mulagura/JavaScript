// How to Empty array

let companies1 = ['Wipro','Infosys','TCS','Accenture','Cognizant','HCL','IBM'];
let companies2 = ['Wipro','Infosys','TCS','Accenture','Cognizant','HCL','IBM'];
let companies3 = ['Wipro','Infosys','TCS','Accenture','Cognizant','HCL','IBM'];
let companies4 = ['Wipro','Infosys','TCS','Accenture','Cognizant','HCL','IBM'];
let companies5 = ['Wipro','Infosys','TCS','Accenture','Cognizant','HCL','IBM'];

// Method 1

companies1.length = 0;
console.log(companies1); // []
// This is recommended if you don't have references to the original array

// Method 2

companies2 = [];
console.log(companies2); // []
// This is recommended if you don't have references to the original array


// Method 3

companies3.splice(0);
console.log(companies3); // []

// Method 4
while(companies4.length>0){
    companies4.pop(); // or shift()
}
console.log(companies4); // []



