// negative to positive number

let num1 = -121;
let num2 = -num1;
console.log(num1,num2);
//or
let num = -143;
console.log(Math.abs(num));

Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs();         // NaN
Math.abs('string'); // NaN
