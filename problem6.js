const inventory = require("./inventory");
function bmwandaudi(inventory) {
       bmw_and_audi=[];
       if (Array.isArray(inventory)) {
              bmw_and_audi = inventory.filter(value =>
                     value.car_make === "BMW" || value.car_make === "Audi"
              ).map(JSON.stringify);
       }
        return bmw_and_audi;
}

module.exports = bmwandaudi;