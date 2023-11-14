const arr = [
  { model: 'iphone 12', make: 'apple' },
  { model: 'iphone 13', make: 'apple' },
  { model: 'galaxy 12', make: 'samsung' },
  { model: 'iphone 15', make: 'apple' },
  { model: 'galaxy fe', make: 'samsung' }
];

// unique values from array
const arrNum = [1, 2, 3, 1, 2, 4, 5, 3, 5, 5];

const unique = arrNum.filter((ele,indx) => {
	return arrNum.indexOf(ele) === indx;
}); 
console.log(unique);

// unique values with count from array
const uniqueCount = unique.map((item) => {
	console.log(`${item} : ${arrNum.filter(el => el === item).length}`);
});

// unique array of objects both es5 and es6
   // sol 1: to return only make unique
const uniqueMake = [...new Set(arr.map((m) => m.make))];
console.log(uniqueMake);
   // sol 2: to return only make unique
const uniqueMakes = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueMakes.includes(arr[i].make)) {
    uniqueMakes.push(arr[i].make);
  }
}
console.log(uniqueMakes); // Output: ['apple', 'samsung']
  // sol 1.1 : to return whole object
const uniqueMakes = [];
const uniqueObjects = arr.filter(item => {
  if (!uniqueMakes.includes(item.make)) {
    uniqueMakes.push(item.make);
    return true;
  }
  return false;
});

console.log(uniqueObjects);
  // sol 2.1 : to return whole object
const uniqueMakes = [];
const uniqueObjects = [];

for (let i = 0; i < arr.length; i++) {
  const currentMake = arr[i].make;
  if (!uniqueMakes.includes(currentMake)) {
    uniqueMakes.push(currentMake);
    uniqueObjects.push(arr[i]);
  }
}

console.log(uniqueObjects);
