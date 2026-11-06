const person = {
    name: "Hitesh" ,
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    },
};
person.greet(); 

const greetFunction = person.greet;
greetFunction(); 

const boundGreetFunction = greetFunction.bind({ name: "John" });
boundGreetFunction();

//bind, call and apply