// Convert a negative number to postitive in JS

// Approach 1 - Using the Multiplication Operator(*)


function convertToPositive(number){
if (number < 0){
    number = number * -1;
}
   return number;
}

const number1 = -10;
const number2 = 5;

console.log(convertToPositive(number1));
console.log(convertToPositive(number2));

