// unique values from array

const arr = [1, 2, 3, 1, 2, 4, 5, 3, 5, 5];

const unique = arr.filter((ele,indx) => {
	return arr.indexOf(ele) === indx;
}); 
console.log(unique);

// unique values with count from array

const uniqueCount = unique.map((item) => {
	console.log(`${item} : ${arr.filter(el => el === item).length}`);
});
