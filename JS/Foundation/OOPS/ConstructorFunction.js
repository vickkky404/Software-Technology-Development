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







// Constructor function and prototype
function Animal(species){
    this.species = species;

}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
console.log(dog.sound());



function Drink(name){
    //it will work as a cheking if the new keyword is used or not.
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea");

//intentionally not using new keyword to create an object of Drink constructor function
let coffee =  Drink("Coffee");
