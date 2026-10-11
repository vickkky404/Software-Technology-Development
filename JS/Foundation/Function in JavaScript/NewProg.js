function makeTea(typeOfTea){}

function processTeaOrder(makeFunction){
   return makeFunction('Earl Grey');
}
 
let order = processTeaOrder(makeTea)