
function countyears(inventory) {
    let count = [];
    if (Array.isArray(inventory)) {
        count = inventory.filter(value => value.car_year <= 2000);
    }
    return count;
}

module.exports= countyears;