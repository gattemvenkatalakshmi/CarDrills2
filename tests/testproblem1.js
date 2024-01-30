const carWithId = require("../problem1");
const inventory = require("../inventory");
let data = carWithId(inventory);
console.log(`Car 33 is a ${data[0].car_year} ${data[0].car_model} ${data[0].car_make}`);
