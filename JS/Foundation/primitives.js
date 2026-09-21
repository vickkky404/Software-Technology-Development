// Number

let balance = 120;
let anotherBalance = new Number(120);




// checking the type of the variable that will explaon the difrence between the usage of new keyword and the plain variabe
console.log(typeof balance);
console.log(typeof anotherBalance);


console.log(balance);

console.log(anotherBalance);
console.log(typeof(anotherBalance));


let isActive = true;
let anotherIsActive = new Boolean(true); //not recomended


// null and undefined
let firstName = null;
let lastname = undefined;
console.log(firstName);
console.log(lastname);



// String
let myString = "hello";
let myStringOne = 'Hola'
let username = 'hitesh'

let oldGreet = myString +  'Hitesh';
console.log(oldGreet);


let greetMessage =  `Hello ${username} !`;
console.log(greetMessage);
