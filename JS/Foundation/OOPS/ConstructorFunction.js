// Constructor function

function greet(name){
    console.log("Hello World ", name);
}

//this is Construction function... this is used to create object using new keyword
function Person(name, age){
    this.name = name;
    this.age = age;

}

function car(make, model){
    this.make = make;
    this.model = model;
    //till this we have creatred the constructor function.
}

// /Injecting the properties and methods to the constructor function
let myCar = new car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new car("Tata", "safari");
// console.log(myNewCar);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type} tea`;
    }
}
let lemonTea = new Tea("Lemon tea");
console.log(lemonTea.describe());
