// add float numbers using JS
// - Addition of float numbers in JavaScript ....


// Approach 1 - Using parseFloat() and to Float()..
const num1 = parseFloat("2.3");
const num2 = parseFloat("2.4");

const sum = num1 + num2;


console.log("Without formatting", sum);
console.log("With formatting: ", sum.toFixed(2));


// Approach 2 - Using parseFloat() and Math.round()..
// - Math.round() method can be used to round the result to a specifiied number of decimal places...

const num3 = parseFloat("2.3");
const num4 = parseFloat("2.4");

const summ = num3 + num4;

console.log("Without formatting:", summ);

const roundedSum = Math.round(sum * 100) / 100;

console.log("With rounding: ", roundedSum);


