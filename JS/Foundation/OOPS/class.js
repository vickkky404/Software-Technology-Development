class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    start(){
         return `${this.make} is a car from ${this.model}`;
    }
}


class car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}