class CoffeeMachine {
    start( ) {
        // call DB
        // filter value
        return `Starting the machine`;
    }
    brewCoffee( ) {
        //complex calculation
        return `Brewing the coffee`;
    }

    pressStartButton(){
        this.start();
        this.brewCoffee();
    }
}


let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

