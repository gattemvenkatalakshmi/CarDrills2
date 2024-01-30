const lastId = require("../problem2");
const inventory= require("../inventory");
const data = lastId (inventory);
console.log(`Last car is a ${data.car_make} ${data.car_model}`);