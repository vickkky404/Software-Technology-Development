let computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__: computer
};
let tomHardware = {};

console.log(`Computer `, computer.__proto__); 