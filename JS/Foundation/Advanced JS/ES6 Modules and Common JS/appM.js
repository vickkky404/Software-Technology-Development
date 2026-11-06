//module import file

//deafault import
import multiply from "./mathOperationsM.js";

console.log(multiply(2, 3)); 


//named import or functions without default keyword.
 import { add, subtract } from "./mathOperationsM.js";

 console.log(add(2, 3));
 console.log(subtract(2, 3));
