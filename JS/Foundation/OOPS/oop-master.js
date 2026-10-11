// lets learn the OOPS concept --->
// Encapsulation, Inheritance, Polimorphism, Abstraction.

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,

    start: function(){
        return  `${this.make} ${this.model} is starting.`
    }
};

// console.log(car.start());

function Person(name, age){
    this.name = name;
    this.age = age;

}

let john = new Person("John", 30);

console.log(john.name); // Output: John