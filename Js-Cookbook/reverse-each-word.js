// 1. Given a string, reverse each word in the sentence

const str = 'hello this is venkat';

// idea : split indvidal word, and loop those individual words, and reverse each word and then join

// using map,split,reverse,join
var result = str.split(' ').map((val,indx,wholeArr) => {
    return val.split('').reverse().join('');
}).join(' ');

console.log(result);

// using split,reverse,join, for loop

const splitted = str.split(' ');
const result = [];

for (let i = 0; i < splitted.length; i++) {
  result[i] = splitted[i].split('').reverse().join('');
}

console.log(result.join(' '));