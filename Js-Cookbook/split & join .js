// String to Array  --> str.split();
// Array to String   --> arr.join();

// https://stackoverflow.com/questions/22075140/am-i-doing-this-split-reverse-join-correctly

//split(separator,limit)
//splits a String object into an array of strings

var sentence = 'ram is a good guy & adaptable';

console.log(sentence.split());// [ 'ram is a good guy & adaptable' ]
console.log(sentence.split("")); // ['r','a','m',....]
console.log(sentence.split(" ")); // [ 'ram', 'is', 'a', 'good', 'guy', '&', 'adaptable' ]
console.log(sentence.split(" & ")); // [ 'ram is a good guy', 'adaptable' ]
console.log(sentence.split(" ",4)); // [ 'ram', 'is', 'a', 'good' ]



// how to make string word reverse

// way:1
var word = 'Mulagura';
var wordLength = word.length;
var rev = ''; 

for(var i=wordLength-1;i>=0;i--){
    rev =  rev + word[i];
}

console.log(rev); // arugaluM

// way:2 
var result = 'Macdonalds'.split("").reverse().join("");
console.log(result); // sdlanodcaM



// join(separator)
//  creates and returns a new string by concatenating all of the elements in an array

var arrMobiles = ['lenovo','apple','one plus','nokia','oppo'];

console.log(arrMobiles.join("->")); // lenovo->apple->one plus->nokia->oppo
console.log(arrMobiles.join()); // lenovo,apple,one plus,nokia,oppo
console.log(arrMobiles.join("")); // lenovoappleone plusnokiaoppo



