// Gertters And Setters

class Employee{
    #salary

    constructor(name, salary){
        this.name = name;
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see salary`;
    }
    set salary(value){
        if(value < 0 ){
            console.log("Invalid Salary");
        }else{
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice", 50000)
console.log(emp._salary)